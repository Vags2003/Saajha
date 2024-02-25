import React from 'react';
import './App.css';
import CardItem from './components/CardItem';
import CardItemVol from './components/CardItemVol';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NGOHome } from './pages/NGOHome';
import { Volunteer } from './pages/Volunteer';

function App() {
  return (
    <>
      <Router>
        <div className='container'>
          <Routes>
            <Route path='/NGOHome' element={<CardItem />} />
          </Routes>
        </div>

        <div>
          <Routes>
            <Route path='/Volunteer' element={<CardItemVol />} />
          </Routes>
        </div>
        
      </Router>
    </>
  );
}

export default App;
