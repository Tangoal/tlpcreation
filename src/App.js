import React from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css'
import './ResetCSS.css';
import Navbar from './components/Navbar'
import Home from "./pages/Home";
import Projets from "./pages/Projets";
import Contact from "./pages/Contact";
import MentionsLegales from "./pages/MentionsLegales";
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <>
      <div className='page-layout'>
      <Navbar />
      <div className='main-section'>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/projets' element={<Projets />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/mentions-legales' element={<MentionsLegales />}></Route>
      </Routes>
      <Footer />
      <ScrollToTop />
      </div>
      </div>
    </>
  );
};

export default App;