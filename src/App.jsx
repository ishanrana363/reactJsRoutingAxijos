
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./Component/Dynamic-Routing/pages/Home.jsx";
import Blogs from "./Component/Dynamic-Routing/pages/Blogs.jsx";
import Product from "./Component/Dynamic-Routing/pages/Product.jsx";
import Contact from "./Component/Dynamic-Routing/pages/Contact.jsx";
import About from "./Component/Dynamic-Routing/pages/About.jsx";
import DRoutes from "./Component/Dynamic-Routing/Component/DRoutes.jsx";
import Blog from "./Component/Dynamic-Routing/pages/Blog.jsx";

const App = () => {
    return (
        <div>
          <BrowserRouter>
            <DRoutes/>
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/blogs" element={<Blogs/>} />
                <Route path="/blogs/:title" element={<Blog/>} />
              <Route path= "/about" element={<About/>} />
              <Route path= "/contact" element={<Contact/>}/>
              <Route path= "/product" element={<Product/>} />
            </Routes>
          </BrowserRouter>
        </div>
    );
};

export default App;
