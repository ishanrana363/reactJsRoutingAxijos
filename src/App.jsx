//
// import {BrowserRouter, PRoutes, Routes} from "react-router-dom";
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
//               <PRoutes path="/" element={<Home/>} />
//               <PRoutes path="/blogs" element={<Blogs/>} />
//                 <PRoutes path="/blogs/:title" element={<Blog/>} />
//               <PRoutes path= "/about" element={<About/>} />
//               <PRoutes path= "/contact" element={<Contact/>}/>
//               <PRoutes path= "/product" element={<Product/>} />
//             </Routes>
//           </BrowserRouter>
//         </div>
//     );
// };
//
// export default App;


// import {BrowserRouter, PRoutes, Routes} from "react-router-dom";
// import Home from "./Component/UseLocationHookDRouting/Pages/Home.jsx";
// import Blogs from "./Component/UseLocationHookDRouting/Pages/Blogs.jsx";
// import About from "./Component/UseLocationHookDRouting/Pages/About.jsx";
// import Product from "./Component/UseLocationHookDRouting/Pages/Product.jsx";
// import NotFound from "./Component/UseLocationHookDRouting/Pages/NotFound.jsx";
// import UseLocation from "./Component/UseLocationHookDRouting/Component/UseLocation.jsx";
// import Blog from "./Component/UseLocationHookDRouting/Pages/Blog.jsx";
// import User from "./Component/UseLocationHookDRouting/Pages/User.jsx";

// const App = () => {
//     return (
//         <div>
//             <BrowserRouter>
//                 <UseLocation/>
//                 <Routes>
//                     <PRoutes path= "/" element={<Home/>} />
//                     <PRoutes path= "/blogs" element={<Blogs/>} />
//                     <PRoutes path= "blogs/:title" element= {<Blog/>} />
//                     <PRoutes path="/about" element={<About/>} />
//                     <PRoutes path= "/product" element={<Product/>}/>
//                     <PRoutes path= "/user" element={<User/>} />
//                     <PRoutes path = "*" element={<NotFound/>} />
//                 </Routes>
//             </BrowserRouter>
//         </div>
//     );
// };

// export default App;


import {BrowserRouter, Routes,Route} from "react-router-dom";
import Home from "./Component/ProtectedRoute/Pages/Home.jsx";
import AddBlog from "./Component/ProtectedRoute/Pages/AddBlog.jsx";
import About from "./Component/ProtectedRoute/Pages/About.jsx";
import PRoutes from "./Component/ProtectedRoute/Route/PRoutes.jsx";
import Error from "./Component/ProtectedRoute/Pages/Error.jsx";
import {useState} from "react";
import ProtectedRoute from "./Component/ProtectedRoute/Component/ProtectedRoute.jsx";

const App = () => {
    const [isLogin,setIsLogin] = useState(false)
    return (
        <div>
            <BrowserRouter>
                <PRoutes/>
                {isLogin ? (
                    <button onClick={()=>{
                        setIsLogin(!isLogin)
                    }} >
                        Logout
                    </button>
                ) :(
                    <button onClick={()=>{setIsLogin(!isLogin)}} >
                        Login
                    </button>
                ) }
                <Routes>
                    <Route path= "/" element={<Home/>}/>
                    <Route path= "/addblog" element={<ProtectedRoute isLogin={isLogin} >
                        <AddBlog/>
                    </ProtectedRoute>} />
                    <Route path= "/about" element={<About/>} />
                    <Route path="*" element={<Error/>} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;





































































































































