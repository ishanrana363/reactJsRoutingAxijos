import {NavLink} from "react-router-dom";

const Routing = () => {
    return (
        <div>
            <nav>
                <NavLink className= "nav-link" to = "/" >Home</NavLink>
                <NavLink className= "nav-link" to = "/about" >About</NavLink>
                <NavLink className= "nav-link" to = "/contact" >Contact</NavLink>
                <NavLink className= "nav-link" to = "/product" >Product</NavLink>
            </nav>
        </div>
    );
};

export default Routing;