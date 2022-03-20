import Head from 'next/head'
import { Spinner, Heading } from '@chakra-ui/react'
import { useState, ChangeEvent } from 'react'
import styled from '@emotion/styled'

import { ThemeModeSwitch } from '@/components/theme-mode-switch'
import { Header } from '@/components/header'
import { SearchInput } from '@/components/search-input'
import { MasonryLayout } from '@/components/masonry-layout'
import { useSearch } from '@/hooks/useSearch'

const SearchPage = () => {
  const [query, setQuery] = useState('')
  const [isImagesCheck, setIsImagesCheck] = useState(true)
  const [isAudioCheck, setIsAudioCheck] = useState(true)

  const { collection = null, isError = false } = useSearch({
    query,
    isImagesCheck,
    isAudioCheck,
  })

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void =>
    setQuery(event.target.value)

  const headerProps = {
    query,
    handleInputChange,
    isImagesCheck,
    setIsImagesCheck,
    isAudioCheck,
    setIsAudioCheck,
  }

  return (
    <>
      <Head>
        <title>NASA Search</title>
      </Head>
      <Header title={'Searching NASA files'}>
        <SearchInput {...headerProps} />
      </Header>
      <Main>
        {isError ? (
          <Heading as='h2'>Something is going wrong</Heading>
        ) : !collection && query.length !== 0 ? (
          <Spinner thickness='4px' color='blue.500' size='xl' />
        ) : (
          collection &&
          (collection.items.length === 0 ? (
            <Heading as='h2'>There are not any files</Heading>
          ) : (
            <MasonryLayout collection={collection} />
          ))
        )}
        <ThemeModeSwitch />
      </Main>
    </>
  )
}

const Main = styled('section')`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  text-align: center;
  margin: 0 3rem;
`

export default SearchPage
