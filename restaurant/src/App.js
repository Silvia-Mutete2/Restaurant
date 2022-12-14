import RestaurantList from "./components/restaurant/RestaurantList";
import ReservationList from "./components/reservations/ReservationList";
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { useState, useEffect } from "react"
import Header from "./components/navigation/Header";
import GuestProf from "./components/guest/GuestProf";
import Navbar from "./components/navigation/Navbar";
import GuestNav from "./components/navigation/GuestNav";
import GuestLogin from "./components/login/GuestLogin";
import RestaurantProf from "./components/restaurant/RestaurantProf";





const App = () => {

  const [restaurants, setRestaurants] = useState([])
  const [guests, setGuests] = useState([])

  useEffect(() => {
    fetch("https://restaurant-backend2.herokuapp.com/guests")
      .then(r => r.json())
      .then(fetchedGuests => setGuests(fetchedGuests))
  }, [])
  
  useEffect(() => {
    fetch("https://restaurant-backend2.herokuapp.com/restaurants")
      .then(r => r.json())
      .then(fetchedRestaurants => setRestaurants(fetchedRestaurants))
  }, [])

  const [currentGuestId, setCurrentGuestId] = useState("")
  const [loggedInGuest, setLoggedInGuest] = useState({})
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const addNewGuest = (newGuest) => {
    setGuests([...guests, newGuest])
  }

  const addNewReservation = (updatedGuest) => {
    console.log("updated guest", updatedGuest)
    const updatedGuests = guests.map(guest => guest.id == updatedGuest.id ? updatedGuest : guest)
    setLoggedInGuest(updatedGuest)
    setGuests(updatedGuests)
    console.log("updated guests", updatedGuests)
    
    
  }
  console.log("logged in guest", loggedInGuest)

  const onUpdateReservation = (updatedReservation) => {
    const reservationsWithReplacedReservation = loggedInGuest.reservations.map(reservation => reservation.id === updatedReservation.id ? updatedReservation : reservation)
    setLoggedInGuest({...loggedInGuest, reservations: reservationsWithReplacedReservation})
    const updatedGuests = guests.map(guest => guest.id == loggedInGuest.id ? loggedInGuest : guest)
    setGuests(updatedGuests)
  }

  const onDeleteReservation = (id) => {
    const filteredReservations = loggedInGuest.reservations.filter(reservation => reservation.id !== id)
    setLoggedInGuest({...loggedInGuest, reservations: filteredReservations})
  }

  return (
    <BrowserRouter>
    <Header />
    {isLoggedIn ?<GuestNav /> :<Navbar />}
     <Routes>
        <Route exact path="/" element={<GuestLogin guests={guests} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} currentGuestId={currentGuestId} setCurrentGuestId={setCurrentGuestId} loggedInGuest={loggedInGuest} setLoggedInGuest={setLoggedInGuest} onAddNewGuest={addNewGuest} />} />
        <Route exact path="/restaurants" element={<RestaurantList restaurants={restaurants} isLoggedIn={isLoggedIn}/>} />
        <Route exact path="/profile" element={<GuestProf loggedInGuest={loggedInGuest} setLoggedInGuest={setLoggedInGuest} setIsLoggedIn={setIsLoggedIn}/>} />
        <Route exact path="/reservations" element={<ReservationList  loggedInGuest={loggedInGuest} onDeleteReservation={onDeleteReservation} onUpdateReservation={onUpdateReservation}/>} />
        <Route path="/restaurants/:id" element={<RestaurantProf restaurants={restaurants} loggedInGuest={loggedInGuest} addNewReservation={addNewReservation}/>}/>
      </Routes>
    </BrowserRouter>
  )
      }

export default App;
