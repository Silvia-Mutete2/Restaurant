import { Outlet } from 'react-router-dom'
import LoginHome from './LoginHome'
import LoggedHome from './LoggedHome'
import Footer from '../navigation/Footer'


const GuestLogin = ({ guests, 
    isLoggedIn, setIsLoggedIn, 
    currentGuestId, setCurrentGuestId, 
    loggedInGuest, setLoggedInGuest,
    onAddNewGuest}) => {

    return (
        <div>
        {!!isLoggedIn ? <LoggedHome loggedInGuest={loggedInGuest}/> : <LoginHome guests={guests} 
        isLoggedIn={isLoggedIn} 
        setIsLoggedIn={setIsLoggedIn} currentGuestId={currentGuestId} 
        setCurrentGuestId={setCurrentGuestId} loggedInGuest={loggedInGuest} 
        setLoggedInGuest={setLoggedInGuest}
        onAddNewGuest={onAddNewGuest}/>}

        <Outlet />
        <Footer/>
            
        </div >
    )
}



export default GuestLogin