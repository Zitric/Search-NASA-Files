import React, { ReactNode, ReactElement } from 'react'
import styled from '@emotion/styled'
import { Heading } from '@chakra-ui/react'

type HeaderProps = {
  title: string | string[]
  children?: ReactNode
}

export const Header = ({
  title = '',
  children = null,
}: HeaderProps): ReactElement => {
  return (
    <Wrapper>
      <Heading
        as='h1'
        bgGradient='linear(to-l, #7928CA, #FF0080)'
        bgClip='text'
      >
        {title}
      </Heading>
      {children}
    </Wrapper>
  )
}

const Wrapper = styled('header')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 800px;
  text-align: center;
  margin: 7rem auto 0 auto;
`
