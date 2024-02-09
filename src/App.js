// import logo from './logo.svg';
import "./App.css";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "../src/pages/About";
import Menu from "../src/pages/Menu";
import Contact from "../src/pages/Contact";
import Home from "../src/pages/Home";
import Crousel2 from "../src/components/Crousel2";
import Aboutus from "./components/Aboutus";
import Workers from "./components/Worker";
import ViewWorker from "./components/ViewWorker";
import Card from "./components/Card";
import ProfessionCard from "./components/ProfessionCard";
import Facts from "./components/Facts";
import CustomerReviews from "./components/CustomerReviews";
import Ourfeature from "./components/Ourfeature";
import Footer from "./components/Footer";
import LowerFooter from "./components/LowerFooter";
// import CardSlick from "./components/CardSlick";




function App() {
  return (
    <>
      <Header />
      <Crousel2 />
      <Aboutus />
      <Workers />
      <ViewWorker />
      <Card />
      <ProfessionCard />
      <Facts />
      <Ourfeature />   
      <CustomerReviews />
      <Footer />
      <LowerFooter />
      {/* <CardSlick /> */}

      
    
      
      
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/menu" element={<Menu />} />
      </Routes> */}
    </>
  );
}

export default App;
