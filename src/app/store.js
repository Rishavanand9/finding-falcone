import { configureStore } from '@reduxjs/toolkit'

import userReducer from './../features/userSlice'
import vehicleReducer from './../features/vehicleSlice'
import planetReducer from './../features/planetSlice'
import resultReducer from './../features/resultSlice'

//Globally store all the state for the App
export default configureStore({
  reducer: {
    user: userReducer,
    vehicles: vehicleReducer,
    planets: planetReducer,
    result: resultReducer,
  },
})
