import ReservationCard from "../reservations/ReservationCard"
import { Link, useNavigate } from "react-router-dom"


const GuestProf= ({loggedInGuest, setLoggedInGuest, setIsLoggedIn}) => {

  let navigate = useNavigate()

  const logOutGuest = () => {
    setLoggedInGuest({})
    setIsLoggedIn(false)
    navigate("/")
  }
 
  return (
    <div>
      <h3>{loggedInGuest.name}'s Profile</h3>

      <p>username: {loggedInGuest.username}</p>
      <Link to={"/reservations"}>View and edit my reservations</Link>
      <button onClick={logOutGuest}>Log Out</button>
    </div> 
  )
}
export default GuestProf