// import { useState } from 'react'
import React from 'react';
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import './App.css'
import HomePage from './pages/HomePage';
import SeeYourStorySection from './components/SeeYourStorySection';
import ReadStoriesPage from './pages/ReadStoriesPage';
import SignupPage from './components/SignupPage';

function App() {


  return (
    <>

      <Router>
        <main>
          <Routes>
           
            <Route path="/" element={<HomePage />} />
            <Route path="/" Component={SeeYourStorySection} />
            <Route path="/read-stories" element={<ReadStoriesPage />} />
            
           
            {/* ... */}
          </Routes>
        </main>
      </Router>

    </>
  )
}

export default App
