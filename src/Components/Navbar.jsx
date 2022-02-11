import { NavLink } from "react-router-dom";

const NavBar = () => {
    return ( 
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <NavLink className="nav-link" to="/count" >Count</NavLink>
              <NavLink  className="nav-link" to="/timer" >Timer</NavLink>
              <NavLink  className="nav-link" to="/togglebg">Toggle</NavLink>
              <NavLink  className="nav-link" to="/arraylist">Array Of List</NavLink>
            </div>
          </div>
        </div>
      </nav>
     );
}
export default NavBar;