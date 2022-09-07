import {NavLink} from 'react-router-dom'

const style = {
    width: "60%",
    margin: "5% 0 1%",
    padding: "1em",
    textDecoration: "none",
    color: "black",
    backgroundColor: "rgb(2555, 120, 44)",
    fontWeight: "bold",
    verticalAlign: "center"
}

const Navbar = () => {
    return (
        <div>
            <NavLink activeStyle={{fontWeight: "bolder",color: "blue"}}exact style={style} to="/">Home</NavLink>
            <NavLink activeStyle={{fontWeight: "bolder",color: "blue"}}exact style={style} to="/restaurants/reservations">Manage Reservations</NavLink>
            <NavLink activeStyle={{fontWeight: "bolder",color: "blue"}}exact style={style} to="/restaurants/profile">Restaurant Profile</NavLink>
        </div>
    )
}

export default Navbar;