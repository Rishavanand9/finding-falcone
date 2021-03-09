import { createSlice } from '@reduxjs/toolkit'

export const resultSlice = createSlice({
  name: 'result',
  initialState: {
    result: null,
  },
  reducers: {
    updateResult: (state, action) => {
      state.result = action.payload
    },
  },
})

export const { updateResult } = resultSlice.actions

export const finalResult = (state) => state.result.result

export default resultSlice.reducer
