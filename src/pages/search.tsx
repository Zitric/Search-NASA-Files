import Head from 'next/head'
import { Spinner, Heading } from '@chakra-ui/react'
import { useState, ChangeEvent } from 'react'
import styled from '@emotion/styled'

import { ThemeModeSwitch } from '@/components/theme-mode-switch'
import { Header } from '@/components/header'
import { SearchInput } from '@/components/search-input'
import { MasonryLayout } from '@/components/masonry-layout'
import { useFetchFilesQuery } from '../features/search-slice'

const SearchPage = () => {
  const [term, setTerm] = useState('')
  const [isImagesCheck, setIsImagesCheck] = useState(true)
  const [isAudioCheck, setIsAudioCheck] = useState(true)

  const {
    data: { collection = null } = {},
    error: isError = false,
    isLoading,
  } = useFetchFilesQuery({ term, isImagesCheck, isAudioCheck })

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void =>
    setTerm(event.target.value)

  const headerProps = {
    term,
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
        ) : isLoading ? (
          <Spinner thickness='4px' color='blue.500' size='xl' />
        ) : (
          collection &&
          (collection.items.length < 1 ? (
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
