import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BASE_URL } from '@/helpers/constants'

type search = { collection: { items: [{ data: []; links: [] }] } }

type params = { term: string; isImagesCheck: boolean; isAudioCheck: boolean }

export const searchApi = createApi({
  reducerPath: 'searchApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: builder => ({
    fetchFiles: builder.query<search, params>({
      query: ({ term, isImagesCheck, isAudioCheck }) =>
        `/search?q=${term}${isImagesCheck ? '&media_type=image' : ''}${
          isAudioCheck ? '&media_type=audio' : ''
        }`,
    }),
  }),
})

export const { useFetchFilesQuery } = searchApi
