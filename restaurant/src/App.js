import RestaurantList from "./components/restaurant/RestaurantList";
import ReservationList from "./components/reservations/ReservationList";

const App = () => {

  return (
    <BrowserRouter>
    <Header />
    <Routes>
        <Route exact path="/restaurants" element={<RestaurantList restaurants={restaurants}  />} />
      
        <Route exact path="/reservations" element={<ReservationList/>} />

      </Routes>
    </BrowserRouter>
  )
      }

export default App;
