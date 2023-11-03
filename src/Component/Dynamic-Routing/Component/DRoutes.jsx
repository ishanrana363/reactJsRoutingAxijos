import {NavLink} from "react-router-dom";

const DRoutes = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <NavLink className= "nav-link" to= "/" >Home</NavLink>
                        <NavLink className= "nav-link" to= "/blogs">Blogs</NavLink>
                        <NavLink className= "nav-link" to='/about'>About</NavLink>
                        <NavLink className= "nav-link" to= "/contact" >Contact</NavLink>
                        <NavLink className= "nav-link" to="/product">Product</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default DRoutes;