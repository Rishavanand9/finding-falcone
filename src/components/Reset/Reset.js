import "./Reset.css"

function Reset() {

  //Handler function on logout button click
  const handleReset = (e) => {
    e.preventDefault()
  }

  debugger
  return (
    <div className="reset">
      <button className="reset-button" onClick={handleReset}>
        Reset
      </button>
      </div>
  )
}

export default Reset
