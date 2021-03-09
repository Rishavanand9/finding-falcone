import React, { useState } from 'react'
import { selectPlanet } from '../../features/planetSlice'
import { ResponsiveCard, Vehicles } from '../../components'
import Donlon from '../../assets/Donlon.png'
import Enchai from '../../assets/Enchai.png'
import Jebing from '../../assets/Jebing.png'
import Sapir from '../../assets/Sapir.png'
import Lerbin from '../../assets/Lerbin.png'
import Pingasor from '../../assets/Pingasor.png'
import { Modal } from '@material-ui/core'

import { useDispatch, useSelector } from 'react-redux'
import { updateResult } from '../../features/resultSlice'
import { selectUser } from '../../features/userSlice'

import './Planets.css'
import { useHistory } from 'react-router-dom'
import { findFalcone } from '../../api/Api'

function getImage(name) {
  switch (name) {
    case 'Donlon':
      return Donlon
    case 'Enchai':
      return Enchai
    case 'Jebing':
      return Jebing
    case 'Sapir':
      return Sapir
    case 'Lerbin':
      return Lerbin
    case 'Pingasor':
      return Pingasor
    default:
      return null
  }
}

function Planets() {
  const [modal, setModal] = useState(false)

  const user = useSelector(selectUser)

  const history = useHistory()
  const [planetState, setPlanetState] = useState(null) //tO Select a planet from the list
  const dispath = useDispatch()
  const planets = useSelector(selectPlanet)
  let localPlanet = JSON.parse(localStorage.getItem('planet')) || [],
    localTimeTaken = JSON.parse(localStorage.getItem('time')) || 0

  const planetList = planets?.planets

  const handleSelect = (e, item) => {
    e.preventDefault()

    if (localPlanet.filter((v, i, a) => a.indexOf(v) === i).length < 4) {
      setModal(true)
      setPlanetState(item)
    }
  }

  const handleFind = async (e) => {
    e.preventDefault()
    
    if (localPlanet.filter((v, i, a) => a.indexOf(v) === i).length < 4) {
      alert('Please select atleast 4 Planets')
    } else {
      const results = await findFalcone(user.accessToken)

      if (results.error || results.status === 'false') {
        alert(results.error || 'Falcons Lost')
      } else {
        //Add User State to store
        dispath(
          updateResult({
            result: results,
          }),
        )

        history.push('/result')
      }
    }
  }

  const handleClose = () => {
    setModal(false)
  }

  const CardContent = (i) => (
    <div
      className={
        localPlanet.includes(i.name) ? 'selectedplanetImg' : 'planetImg'
      }
    >
      <img
        src={getImage(i.name)}
        height={200}
        width={180}
        alt={i.name}
        onClick={(e) => {
          handleSelect(e, i)
        }}
      />
    </div>
  )

  return (
    <>
      <ResponsiveCard>
        <div className="planetCard">
          {planetList?.map((i) => (
            <div>{CardContent(i)}</div>
          ))}
        </div>
      </ResponsiveCard>
      <Modal
        open={modal}
        onClose={handleClose}
        className="modal"
        onClick={handleClose}
      >
        <Vehicles planet={planetState} />
      </Modal>

      <div className="findButton">
        <h1 className="h1">
          Time Taken : <span className="homeName">{localTimeTaken}</span>
        </h1>
        <button onClick={handleFind}>Find Falcone</button>
      </div>
    </>
  )
}

export default Planets
