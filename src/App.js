import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from "react";
import Menu from "./components/Menu";
import Hero from "./components/Hero";
import Collections from "./components/Collections";
import Discount from "./components/Discount";
import HappyCustomer from "./components/HappyCustomer";
import About from "./components/About";
import InsertContact from "./components/InsertContact";
import Footer from "./components/Footer";
import Carrusel from "./components/Carousel";

export default function App() {
  
  return (
      <>


          <Menu />
          <Hero />
          <Collections />
          <Discount />
          <HappyCustomer />
          <About />
          <Carrusel/>
          <div className="App">
              <BrowserRouter>
                  <Routes>
                      <Route path="/" element={<InsertContact />} />
                  </Routes>
              </BrowserRouter>
          </div>
          <Footer />
      </>
  );
}
