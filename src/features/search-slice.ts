import { createSlice } from '@reduxjs/toolkit'

type search = {
  data: any
}

const initialState: search = {
  data: [],
}

export const counterSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {},
})

// export const {} = counterSlice.actions
export default counterSlice.reducer
