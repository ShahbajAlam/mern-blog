import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <nav>
            <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "text-red-400" : "")}
            >
                Home
            </NavLink>
            <NavLink
                to="/signup"
                className={({ isActive }) => (isActive ? "text-red-400" : "")}
            >
                Signup
            </NavLink>
            <NavLink
                to="/login"
                className={({ isActive }) => (isActive ? "text-red-400" : "")}
            >
                Login
            </NavLink>
        </nav>
    );
}

export default Navbar;
