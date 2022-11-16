import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">MyOrg</NavLink>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <NavLink className="nav-link active" to="/employees/add">CreateEmployee</NavLink>
                    </div>
                </div>
            </div>
            </nav>
        </div>
    )
}

export default Header;