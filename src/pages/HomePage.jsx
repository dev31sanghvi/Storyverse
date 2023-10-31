// src/components/HomePage.js
import React from 'react';
import Navbar from '../components/Navbar';
// import FlowingTextSection from '../components/FlowingTextSection';
import HeroSection from '../components/HeroSection';
import SeeYourStorySection from '../components/SeeYourStorySection';
import DiscoverSection from '../components/DiscoverSection';
import GetInTouchSection from '../components/GetInTouchSection';
import Footer from '../components/Footer';
import WriteStoriesPage from './WriteStoriesPage.jsx';
import ReadStoriesPage from './ReadStoriesPage';
import SignupPage from '../components/SignupPage';
import LoginPage from '../components/LoginPage';


function HomePage() {
  return (
    <>
    <div className="navbar bg-customBgColor">
            <Navbar />
            {/* <FlowingTextSection /> */}
            <HeroSection />
            <DiscoverSection />
            <SeeYourStorySection />
            <GetInTouchSection />
            <Footer />
            <WriteStoriesPage />
            <ReadStoriesPage />     
            <SignupPage />  
            <LoginPage />
         
     

       
    </div>


   

  
    </>
  );
}

export default HomePage;
