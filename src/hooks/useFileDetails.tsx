import useSWR from 'swr'

import { BASE_URL } from '@/helpers/constants'
import { fetcher } from '@/helpers/fetcher'

type UseFileDetailsProps = {
  id: string | string[]
}

export const useFileDetails = ({ id }: UseFileDetailsProps) => {
  const address = BASE_URL + `/asset/${id}`

  const { data: { collection } = {}, error: isError } = useSWR(address, fetcher)

  return { collection, isError }
}
