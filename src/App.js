import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Components/Home';
import Coindetail from './Components/Coindetai';
import Footer from './Components/Footer';
import Header from './Components/Header';




function App() {

  
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/coins/:id' element={<Coindetail/>}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}


export default App;
