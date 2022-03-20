import NextImage from 'next/image'
import { ReactElement, useState } from 'react'
import styled from '@emotion/styled'

type ImageProps = {
  src: string
  width: number
}

export const Image = ({
  src,
  width,
  ...restProps
}: ImageProps): ReactElement => {
  const [ratio, setRatio] = useState(16 / 9) // default to 16:9

  return (
    <StyledImage
      {...restProps}
      src={src}
      width={width}
      height={width / ratio}
      priority
      onLoadingComplete={({ naturalWidth, naturalHeight }) =>
        setRatio(naturalWidth / naturalHeight)
      }
    />
  )
}

const StyledImage = styled(NextImage)`
  border-radius: 10px;
`
