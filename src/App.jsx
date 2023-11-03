import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./Component/Routing/pages/Home.jsx";
import About from "./Component/Routing/pages/About.jsx";
import Contact from "./Component/Routing/pages/Contact.jsx";
import Product from "./Component/Routing/pages/Product.jsx";
import NotFound from "./Component/Routing/pages/NotFound.jsx";
import Routing from "./Component/Routing/component/Routing.jsx";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routing/>
        <Routes>
          <Route path= "/" element={<Home/>}/>
          <Route path= "/about" element={<About/>} />
          <Route path= "/contact" element={<Contact/>}/>
          <Route path= "/product" element={<Product/>} />
          <Route path= "*" element={<NotFound/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

