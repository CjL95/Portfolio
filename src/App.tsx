import React from 'react';
import './styles/styles.scss';

import {Routes, Route} from "react-router-dom";
import {Home} from "./Components/Pages/Home/Home";
import {About} from "./Components/Pages/About/About";
import {Projects} from "./Components/Pages/Projects/Projects";
import {Contact} from "./Components/Pages/Contact/Contact";
import {Header} from "./Components/Header/Header";
import {Footer} from "./Components/Footer/Footer";
function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
    
  );
}

export default App;
