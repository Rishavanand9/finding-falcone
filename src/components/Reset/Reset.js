import './Reset.css'

function Reset() {
  const handleReset = (e) => {
    e.preventDefault()
    localStorage.setItem('planet', JSON.stringify([]))
    localStorage.setItem('vehicle', JSON.stringify([]))
    localStorage.setItem('time', JSON.stringify(0))
    alert('Planet selection cleared')
  }

  return (
    <div className="reset fade-in">
      <button className="reset-button" onClick={handleReset}>
        Reset
      </button>
    </div>
  )
}

export default Reset
