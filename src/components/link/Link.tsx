import React, { ReactNode, ReactElement } from 'react'
import { Link as ChakraLink } from '@chakra-ui/react'
import NextLink from 'next/link'

type LinkProps = {
  children?: ReactNode
  href: {
    pathname: string
    query?: {
      id: string
      type: string
      title: string
      description: string | string[]
    }
  }
}

export const Link = ({
  children,
  href,
  ...restProps
}: LinkProps): ReactElement => (
  <NextLink href={href} passHref>
    <ChakraLink {...restProps}>{children}</ChakraLink>
  </NextLink>
)
