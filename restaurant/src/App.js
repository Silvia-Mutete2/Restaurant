import RestaurantList from "./components/restaurant/RestaurantList";
import ReservationList from "./components/reservations/ReservationList";
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Header from "./components/navigation/Header";


const App = () => {

  return (
    <BrowserRouter>
    <Header />
    <Routes>
        <Route exact path="/restaurants" element={<RestaurantList  />} />
      
        <Route exact path="/reservations" element={<ReservationList/>} />

      </Routes>
    </BrowserRouter>
  )
      }

export default App;
