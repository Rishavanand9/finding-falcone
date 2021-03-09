import { useSelector } from 'react-redux'
import { finalResult } from '../../features/resultSlice'
import { useHistory } from 'react-router-dom'

function Results() {
  const result = useSelector(finalResult)
  const history = useHistory()

  const handleBack = (e) => {
    e.preventDefault()
    localStorage.setItem('planet', JSON.stringify([]))
    localStorage.setItem('vehicle', JSON.stringify([]))
    localStorage.setItem('time', JSON.stringify(0))
    history.push('/home')
  }

  const planetName = result.result.planet_name
  return (
    <div className="homeRoot fade-in">
      <h1 className="h1">Results</h1>
      <h2 className="h1">
        Falcone was successful in the planet{' '}
        <span className="planetName">{planetName}</span>
      </h2>
      <div className="findButton">
        <button onClick={handleBack}>Go Back</button>
      </div>
    </div>
  )
}

export default Results
