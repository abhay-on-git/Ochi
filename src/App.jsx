import React from 'react'
import  Navbar  from "./components/Navbar";
import  Page1 from "./components/pg1"
import Marquee from './components/Marquee';
import About from './components/About';
import Eyes from './components/Eyes';

function App() {
  return (
    <div className='w-full min-h-dvh bg-slate-200'>
      <Navbar/>
      <Page1 />
      <Marquee/>
      <About/>
      <Eyes/>
    </div>
  )
}

export default App
