import { useSelector } from 'react-redux'
import { Planets } from './../../components'
import { selectUser } from '../..//features/userSlice'
import './Home.css'

function Home() {
  const user = useSelector(selectUser)

  return (
    <>
      <div className="homeRoot fade-in">
        <h1 className="h1Home">
          Welcome <span className="homeName">{user.name}</span>
        </h1>
        <h2 className="h2Home">
          Please select 4 Planets from the List below...
        </h2>
        <Planets />
      </div>
    </>
  )
}

export default Home
