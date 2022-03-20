import React, { ReactElement } from 'react'
import styled from '@emotion/styled'
import { Box, ScaleFade } from '@chakra-ui/react'

import { Link } from '@/components/link'
import { Image } from '@/components/Image'

import audioIcon from './audio.svg'
import videoIcon from './video.svg'

const cardWidth = 200

type MasonryLayoutProps = {
  collection: { items?: { data: any[]; links: any[] }[] }
}

export const MasonryLayout = ({
  collection = {},
}: MasonryLayoutProps): ReactElement => {
  const { items = [] } = collection

  const boxProps = {
    bgColor: 'gray.500',
    borderWidth: '1px',
    borderRadius: 'lg',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: cardWidth,
    height: 100,
  }
  return (
    <MasonryContent>
      {items.map(({ data, links }) => (
        <Link
          href={{
            pathname: '/fileDetails',
            query: {
              id: data[0].nasa_id,
              type: data[0].media_type,
              title: data[0].title,
              description: data[0].description,
            },
          }}
          key={data[0].nasa_id}
        >
          <ScaleFade initialScale={0.1} in key={data[0].nasa_id}>
            {data[0].media_type === 'image' ? (
              <Image src={links[0].href} width={cardWidth} />
            ) : (
              <Box {...boxProps}>
                {data[0].media_type === 'audio' && (
                  <Image src={audioIcon} width={64} />
                )}
                {data[0].media_type === 'video' && (
                  <Image src={videoIcon} width={64} />
                )}
              </Box>
            )}
          </ScaleFade>
        </Link>
      ))}
    </MasonryContent>
  )
}

const MasonryContent = styled('div')`
  columns: 6 ${cardWidth + 'px'};
  a {
    width: ${cardWidth + 'px'};
    color: white;
    margin-bottom: 2rem;
    display: inline-block;
    width: 100%;
    text-align: center;
    div {
      display: flex;
    }
  }
`
