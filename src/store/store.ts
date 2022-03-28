import { configureStore } from '@reduxjs/toolkit'
import { searchApi } from '../features/search-slice'

export const store = configureStore({
  reducer: {
    [searchApi.reducerPath]: searchApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(searchApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
