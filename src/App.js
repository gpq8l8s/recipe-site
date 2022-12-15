import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './pages/Header'
import Home from './pages/Home';
import './assets/data/style.css'


function App() {
  return (
    <div className="App">
      <Header/>
      {/* <Routes>
        <Route element={<Home/>}></Route>
      </Routes> */}
    </div>
  );
}
export default App;  
