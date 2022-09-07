import RestaurantList from "./components/restaurant/RestaurantList";
import ReservationList from "./components/reservations/ReservationList";
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Header from "./components/navigation/Header";
import GuestProf from "./components/guest/GuestProf";
import Navbar from "./components/navigation/Navbar";
import GuestNav from "./components/navigation/GuestNav";




const App = () => {

  const [restaurants, setRestaurants] = useState([])
  const [guests, setGuests] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/guests")
      .then(r => r.json())
      .then(fetchedGuests => setGuests(fetchedGuests))
  }, [])
  
  useEffect(() => {
    fetch("http://localhost:9292/restaurants")
      .then(r => r.json())
      .then(fetchedRestaurants => setRestaurants(fetchedRestaurants))
  }, [])

  return (
    <BrowserRouter>
    <Header />
     <GuestNav /> 
     <Navbar />
    <Routes>
        <Route exact path="/restaurants" element={<RestaurantList restaurants={restaurants} />} />
        <Route exact path="/profile" element={<GuestProf />} />
        <Route exact path="/reservations" element={<ReservationList/>} />

      </Routes>
    </BrowserRouter>
  )
      }

export default App;
