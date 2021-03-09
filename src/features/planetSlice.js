import { createSlice } from '@reduxjs/toolkit'

export const planetSlice = createSlice({
  name: 'planets',
  initialState: {
    planets: null,
  },
  reducers: {
    updatePlanets: (state, action) => {
      state.planets = action.payload
    },
  },
})

export const { updatePlanets } = planetSlice.actions

export const selectPlanet = (state) => state.planets.planets

export default planetSlice.reducer
