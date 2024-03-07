import { motion } from 'framer-motion'
import React from 'react'

function Marquee() {
  return (
    <div className=' relative bg-[#004D43] flex items-center rounded-tl-3xl rounded-tr-3xl  text-white w-full py-20'>
        <div className="marquee-in flex items-center justify-between overflow-hidden border-t-2 border-b border-slate-200">
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{repeat:Infinity,ease:"linear",duration:"10"}} className='uppercase pl-8 pb-12 boredr font-["founders"] text-[30vmax] whitespace-nowrap leading-[20vmax]'>We Are Ochi</motion.h1>
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{repeat:Infinity,ease:"linear",duration:"10"}} className='uppercase pl-8 pb-12 boredr font-["founders"] text-[30vmax] whitespace-nowrap leading-[20vmax]'>We Are Ochi</motion.h1>
        </div>
    </div>
  )
}

export default Marquee