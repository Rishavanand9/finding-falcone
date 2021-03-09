import { createSlice } from '@reduxjs/toolkit'

export const vehicleSlice = createSlice({
  name: 'vehicle',
  initialState: {
    vehicles: null,
  },
  reducers: {
    updateVehicles: (state, action) => {
      state.vehicles = action.payload
    },
  },
})

export const { updateVehicles } = vehicleSlice.actions

export const selectVehicles = (state) => state.vehicles.vehicles

export default vehicleSlice.reducer
