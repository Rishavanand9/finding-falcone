import { useSelector } from 'react-redux'
import { selectVehicles } from '../../features/vehicleSlice'
import Space_pod from '../../assets/Space_pod.png'
import Space_rocket from '../../assets/Space_rocket.png'
import Space_ship from '../../assets/Space_ship.png'
import Space_shuttle from '../../assets/Space_shuttle.png'

import './Vehicles.css'

function getImage(name) {
  switch (name) {
    case 'Space pod':
      return Space_pod
    case 'Space rocket':
      return Space_rocket
    case 'Space ship':
      return Space_ship
    case 'Space shuttle':
      return Space_shuttle
    default:
      return null
  }
}

function Vehicles(props) {
  const vehicles = useSelector(selectVehicles)

  const local_vehicleList = vehicles.vehicles
  const { planet } = props

  let localPlanet = JSON.parse(localStorage.getItem('planet')) || [],
    localVehicle = JSON.parse(localStorage.getItem('vehicle')) || [],
    localTimeTaken = JSON.parse(localStorage.getItem('time')) || 0

  const handleSelect = (e, i) => {
    e.preventDefault()

    localTimeTaken += planet.distance / i.speed

    localStorage.setItem(
      'time',
      JSON.stringify(Number(localTimeTaken.toFixed(0))),
    )

    localPlanet.push(planet.name)
    localStorage.setItem('planet', JSON.stringify(localPlanet))

    localVehicle.push(i.name)
    localStorage.setItem('vehicle', JSON.stringify(localVehicle))
  }

  console.log(local_vehicleList)

  const filteredVehicleList = [...local_vehicleList].filter(
    (vehicle) => vehicle.max_distance >= planet.distance,
  )

  console.log(filteredVehicleList)

  const VehicleModalContent = (i) => (
    <div className="planetImg">
      <img
        src={getImage(i.name)}
        alt={i.name}
        onClick={(e) => {
          handleSelect(e, i)
        }}
      />
    </div>
  )

  return (
    <div className="modalInner">
      <h3 className="modalH1">
        Please select{' '}
        {filteredVehicleList.length > 1
          ? `one of the below space vehicles`
          : `the below vehicle`}{' '}
        which can cover a distance of {planet.distance} megamiles
      </h3>
      <div className="planetCard">
        {filteredVehicleList?.map((i) => (
          <div>{VehicleModalContent(i)}</div>
        ))}
      </div>
    </div>
  )
}

export default Vehicles
