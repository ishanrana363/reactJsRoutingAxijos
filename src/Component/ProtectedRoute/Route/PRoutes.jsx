import {NavLink} from "react-router-dom";

const PRoutes = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <NavLink className= "nav-link" to= "/">Home</NavLink>
                        <NavLink className= "nav-link" to= "/addblog" >AddBlog</NavLink>
                        <NavLink className= "nav-link" to= "/about">About</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default PRoutes;