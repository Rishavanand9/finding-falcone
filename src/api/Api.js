export async function getToken() {
  const res = await fetch('https://findfalcone.herokuapp.com/token', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
    },
  }).then((data) => {
    return data.json()
  })

  return res.token
}

export async function getVehicles() {
  const res = await fetch('https://findfalcone.herokuapp.com/vehicles', {
    method: 'GET',
  }).then((data) => {
    return data.json()
  })

  return res
}

export async function getPlanets() {
  const res = await fetch('https://findfalcone.herokuapp.com/planets', {
    method: 'GET',
  }).then((data) => {
    return data.json()
  })

  return res
}

export async function findFalcone(token) {
  let localPlanet = JSON.parse(localStorage.getItem('planet')) || [],
    localVehicle = JSON.parse(localStorage.getItem('vehicle')) || []

  localPlanet = localPlanet.filter((v, i, a) => a.indexOf(v) === i)

  const apiParams = {
    token: token,
    planet_names: localPlanet,
    vehicle_names: localVehicle,
  }

  const res = await fetch('https://findfalcone.herokuapp.com/find', {
    method: 'POST',
    body: JSON.stringify(apiParams),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  }).then((data) => {
    return data.json()
  })

  return res
}
