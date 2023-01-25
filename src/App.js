import {Route, Routes} from "react-router-dom"
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import "./css/style.css"
import About from "./Pages/About";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Packages from "./Pages/Packages";
import Products from "./Pages/Products";
import Services from "./Pages/Services";

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path="/Contact" element={<Contact/>}/>
      <Route path="/Packages" element={<Packages/>}/>
      <Route path="/Products" element={<Products/>}/>
      <Route path="/Services" element={<Services/>}/>
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
