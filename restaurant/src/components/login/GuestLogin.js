import { Outlet } from 'react-router-dom'
import LoginHome from './LoginHome'
import LoggedHome from './LoggedHome'


const GuestLogin = ({ guests, isLoggedIn, setIsLoggedIn, currentGuestId, setCurrentGuestId, loggedInGuest, setLoggedInGuest}) => {

    return (
        <div>
        {!!isLoggedIn ? <LoggedHome loggedInGuest={loggedInGuest}/> : <LoginHome guests={guests} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} currentGuestId={currentGuestId} setCurrentGuestId={setCurrentGuestId} loggedInGuest={loggedInGuest} setLoggedInGuest={setLoggedInGuest}/>}

            <Outlet />
            
        </div >
    )
}



export default GuestLogin