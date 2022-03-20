import useSWR from 'swr'

import { BASE_URL } from '@/helpers/constants'
import { fetcher } from '@/helpers/fetcher'

type UseSearchProps = {
  query: string
  isImagesCheck: boolean
  isAudioCheck: boolean
}

export const useSearch = ({
  query,
  isImagesCheck,
  isAudioCheck,
}: UseSearchProps) => {
  const address =
    BASE_URL +
    `/search?q=${query}${isImagesCheck ? '&media_type=image' : ''}${
      isAudioCheck ? '&media_type=audio' : ''
    }`

  const { data: { collection } = {}, error: isError } = useSWR(
    query ? address : null,
    fetcher,
  )

  return { collection, isError }
}
