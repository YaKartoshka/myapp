
import './App.css';
import React from 'react';
import Header from './Header';
import {BrowserRouter, Routes, Route } from "react-router-dom"
import Profile from './Profile';
import Main from './Main';
import data from './data';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Header />
        <Routes>
          <Route path="/" element={<Main data={data.PostPage} />} />
          <Route path="/about" element={<Profile data={data.ProfilePage}/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;