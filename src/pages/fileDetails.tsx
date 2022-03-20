import Head from 'next/head'
import { Button, Heading, Spinner } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { ArrowBackIcon } from '@chakra-ui/icons'
import styled from '@emotion/styled'

import { ThemeModeSwitch } from '@/components/theme-mode-switch'
import { Header } from '@/components/header'
import { Image } from '@/components/image'
import { useFileDetails } from '@/hooks/useFileDetails'

const FileDetailsPage = () => {
  const router = useRouter()
  const { id, type, title, description } = router.query

  const { collection = null, isError } = useFileDetails({ id: id })

  return (
    <>
      <Head>
        <title>Details page</title>
      </Head>
      <Button
        variant='outline'
        position='fixed'
        top='1rem'
        left='1rem'
        leftIcon={<ArrowBackIcon />}
        onClick={() => router.back()}
      >
        Back
      </Button>

      <Header title={title || 'File details'}>
        <DescriptionWrapper>{description}</DescriptionWrapper>
      </Header>
      <Main>
        {isError ? (
          <Heading as='h2'>Something is going wrong</Heading>
        ) : !collection ? (
          <Spinner thickness='4px' color='blue.500' size='xl' />
        ) : (
          collection && (
            <>
              {type === 'image' && (
                <Image src={collection.items[0].href} width={800} />
              )}
              {type === 'audio' && (
                <audio controls src={collection.items[0].href} autoPlay>
                  Your browser does not support the <code>audio</code> element.
                </audio>
              )}
              {type === 'video' && (
                <VideoWrapper>
                  <video src={collection.items[0].href} autoPlay controls>
                    Tu navegador no admite el elemento <code>video</code>.
                  </video>
                </VideoWrapper>
              )}
            </>
          )
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
  margin-bottom: 4rem;
`

const VideoWrapper = styled('div')`
  max-width: 800px;
`

const DescriptionWrapper = styled('div')`
  margin: 2rem 2rem 3rem;
`

export default FileDetailsPage
