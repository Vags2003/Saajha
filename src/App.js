import React from 'react';
import './App.css';
import CardItem from './components/CardItem';
import CardItemVol from './components/CardItemVol';
// import CardItemLogin from './components/CardItemLogin';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NGOHome } from './pages/NGOHome';
import { Volunteer } from './pages/Volunteer';
// import { LoginSignup } from './pages/LoginSignup';
import { Navbar } from './components/NavbarItem';

function App() {
  return (
    <>
      <div className='App'>
      <Navbar/>
          <Routes>
            <Route path='/NGOHome' element={<CardItem/>} />
            <Route path='/Volunteer' element={<CardItemVol/>} />
            {/* <Route path='/LoginSignup' element={<CardItemLogin/>} /> */}
          </Routes>
      </div>
    </>
  );
}

export default App;