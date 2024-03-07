import React from 'react'
import  Navbar  from "./components/Navbar";
import  Page1 from "./components/pg1"
import Marquee from './components/Marquee';
import About from './components/About';
import Eyes from './components/Eyes';
import Featured from './components/Featured';
import Cards from './components/Cards';
import Project from './components/Project';
import Footer from './components/Footer';
import LocomotiveScroll from 'locomotive-scroll';

function App() {

  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className='w-full min-h-dvh bg-zinc-100'>
      <Navbar/>
      <Page1 />
      <Marquee/>
      <About/>
      <Eyes/>
      <Featured/>
      <Cards />
      <Project/>
      <Footer/>
    </div>
  )
}

export default App
