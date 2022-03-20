import Head from 'next/head'
import { Spinner, Heading } from '@chakra-ui/react'
import { useState, ChangeEvent } from 'react'
import styled from '@emotion/styled'

import { DarkModeSwitch } from '@/components/DarkModeSwitch'
import { Header } from '@/components/header'
import { SearchInput } from '@/components/SearchInput'
import { MasonryLayout } from '@/components/MasonryLayout'
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

  console.log('collection', collection)
  console.log('isError', isError)

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
        <DarkModeSwitch />
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
`

export default SearchPage
