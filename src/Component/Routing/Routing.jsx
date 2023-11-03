import {NavLink} from "react-router-dom";

const Routing = () => {
    return (
        <div>
            <NavLink to = "/" >Home</NavLink>
            <NavLink to = "/about" >About</NavLink>
            <NavLink to = "/contact" >Contact</NavLink>
            <NavLink to = "/product" >Product</NavLink>
        </div>
    );
};

export default Routing;