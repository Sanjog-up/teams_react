import { Link } from "react-router";

const Navbar = () => {
    return (
        <nav>
            <Link to= "/">
            <span>Home</span>
            </Link>

            <Link to= "/about">
            <span>About</span>
            </Link>

            <Link to ="/service">
            <span>Services</span>
            </Link>

            <Link to ="/contact">
            <span>Contact Us</span>
            </Link>
        </nav>
    )
};

export default Navbar;