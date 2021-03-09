import React, { useState } from 'react'
import './Login.css'
import { ResponsiveCard, Loader } from './../../components'
import { useDispatch } from 'react-redux'
import { login } from '../../features/userSlice'
import { updateVehicles } from '../../features/vehicleSlice'
import { updatePlanets } from '../../features/planetSlice'

import { getPlanets, getToken, getVehicles } from '../../api/Api'

function Login() {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const dispath = useDispatch()

  //Handler function on login button click
  const handleLogin = async (e) => {
    e.preventDefault()
    setLoading(true)
    const token = await getToken()
    const vehicles = await getVehicles()
    const planets = await getPlanets()

    //Add User State to store
    dispath(
      login({
        name: name,
        loggedIn: true,
        accessToken: token,
      }),
    )

    //Add Vehicle Data to store
    dispath(
      updateVehicles({
        vehicles: vehicles,
      }),
    )

    //Add Planet Data to store
    dispath(
      updatePlanets({
        planets: planets,
      }),
    )

    setLoading(false)
  }

  if (loading) {
    return <Loader />
  }

  return (
    <>
      <div className="loginroot">
        <ResponsiveCard>
          <div className="login">
            <form className="login-form" onSubmit={handleLogin}>
              <h1 className="h1">
                <span className="planetName">Lengaburu</span> Falcone
                Authorization
              </h1>
              <input
                type="name"
                placeholder="Hint: shan"
                value={name}
                onChange={(e) => {
                  setName(e.target.value)
                }}
              />
              <input
                type="password"
                placeholder="Hint: king"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value)
                }}
              />
              <button
                type="submit"
                className="submit"
                disabled={!name || !password}
              >
                Log In
              </button>
            </form>
          </div>
        </ResponsiveCard>
      </div>
    </>
  )
}

export default Login
