
import Content from "./components/content/content"
import React, { Suspense, useEffect, useState } from 'react';
import NavBar from "./components/navbar/navbar"
import AboutMe from './components/about_me/about_me';
import Footer from './components/footer/footer';
import './App.css';

function App() {


  function ScrollPillar() {
      const [scrollHeight, setScrollHeight] = useState(0);
  
      useEffect(() => {
          const handleScroll = () => {
              const scrollTop = window.scrollY; // Current scroll position
              const docHeight = document.documentElement.scrollHeight; // Total document height
              const winHeight = window.innerHeight; // Viewport height
              const scrolled = (scrollTop / (docHeight - winHeight)) * 100;
              setScrollHeight(scrolled);
          };
  
          window.addEventListener("scroll", handleScroll);
          return () => window.removeEventListener("scroll", handleScroll);
      }, []);
  
      return (
          <div className="scroll-pillar-container">
              <div
                  className="scroll-pillar"
                  style={{ height: `${scrollHeight}%` }}
              ></div>
          </div>
      );
  }
  return (
    
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <ScrollPillar />
          <NavBar/>
          <Content/>
          <AboutMe />
          <Footer />
      </Suspense>
    </div>
  );
}

export default App;
