//
// import {BrowserRouter, Route, Routes} from "react-router-dom";
// import Home from "./Component/Dynamic-Routing/pages/Home.jsx";
// import Blogs from "./Component/Dynamic-Routing/pages/Blogs.jsx";
// import Product from "./Component/Dynamic-Routing/pages/Product.jsx";
// import Contact from "./Component/Dynamic-Routing/pages/Contact.jsx";
// import About from "./Component/Dynamic-Routing/pages/About.jsx";
// import DRoutes from "./Component/Dynamic-Routing/Component/DRoutes.jsx";
// import Blog from "./Component/Dynamic-Routing/pages/Blog.jsx";
//
// const App = () => {
//     return (
//         <div>
//           <BrowserRouter>
//             <DRoutes/>
//             <Routes>
//               <Route path="/" element={<Home/>} />
//               <Route path="/blogs" element={<Blogs/>} />
//                 <Route path="/blogs/:title" element={<Blog/>} />
//               <Route path= "/about" element={<About/>} />
//               <Route path= "/contact" element={<Contact/>}/>
//               <Route path= "/product" element={<Product/>} />
//             </Routes>
//           </BrowserRouter>
//         </div>
//     );
// };
//
// export default App;


import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./Component/UseLocationHookDRouting/Pages/Home.jsx";
import Blogs from "./Component/UseLocationHookDRouting/Pages/Blogs.jsx";
import About from "./Component/UseLocationHookDRouting/Pages/About.jsx";
import Product from "./Component/UseLocationHookDRouting/Pages/Product.jsx";
import NotFound from "./Component/UseLocationHookDRouting/Pages/NotFound.jsx";
import UseLocation from "./Component/UseLocationHookDRouting/Component/UseLocation.jsx";
import Blog from "./Component/UseLocationHookDRouting/Pages/Blog.jsx";
import User from "./Component/UseLocationHookDRouting/Pages/User.jsx";

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <UseLocation/>
                <Routes>
                    <Route path= "/" element={<Home/>} />
                    <Route path= "/blogs" element={<Blogs/>} />
                    <Route path= "blogs/:title" element= {<Blog/>} />
                    <Route path="/about" element={<About/>} />
                    <Route path= "/product" element={<Product/>}/>
                    <Route path= "/user" element={<User/>} />
                    <Route path = "*" element={<NotFound/>} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;






































































































































