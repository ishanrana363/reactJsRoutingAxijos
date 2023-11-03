import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./Component/Routing/Home.jsx";
import About from "./Component/Routing/About.jsx";
import Contact from "./Component/Routing/Contact.jsx";
import Product from "./Component/Routing/Product.jsx";
import NotFound from "./Component/Routing/NotFound.jsx";
import Routing from "./Component/Routing/Routing.jsx";

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

