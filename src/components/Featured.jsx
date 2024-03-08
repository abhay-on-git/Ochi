import { useState } from 'react';
import { motion } from 'framer-motion'
import { Power4 } from 'gsap'
import React from 'react'

function Featured() {
    const [isHovering1, setHovering1] = useState(false);
    const [isHovering2, setHovering2] = useState(false);
  return (
    <div className='relative w-full min-h-screen bg-zinc-100'>
        <h1 className='text-[6vw] font-light font-["founders"] border-b px-12 pt-16 pb-10 border-zinc-500 '>Featured Projects</h1>
        <div className="cards-container-parent w-full h-screen flex gap-5 px-12 pt-16">
            <div className="card-container-out rounded-xl w-1/2 h-full">
                <div className='card-container relative rounded-xl w-full h-[90%]' 
                onMouseEnter={() => setHovering2(true)} 
                onMouseLeave={()=>  setHovering2(false)}
                >
                    <h1 className='absolute text-[8vw] whitespace-nowrap overflow-hidden text-[#CDEA68] leading-none font-["founders"] font-normal top-1/2 left-[100%] z-10 -translate-x-1/2 -translate-y-1/2'>
                        {"FYDE".split("").map((item,index)=>{
                            return <motion.span 
                            initial={{y:"100%"}}
                            animate={isHovering2 ? {y:"0"} : {y:"100%"}}
                            transition={{ease:[0.22, 1, 0.36, 1],delay:index*0.1}}
                            key={index}
                            className='inline-block'
                            >{item}</motion.span>
                        })}
                    </h1>
                    <div className="img-container w-full h-full rounded-xl overflow-hidden bg-[#C8C8C9]">
                        <img className=' w-full h-full object-center object-cover' src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"/>
                         
                    </div>
                </div>
                <div className='card-btns flex gap-2 items-center justify-start w-full h-[10%]'>
                    <button className='uppercase border border-zinc-900 px-6 rounded-full h-[2.5vw]'>Copyrighting</button>
                    <button className='uppercase border border-zinc-900 px-6 rounded-full h-[2.5vw]'>Sales</button>
                    <button className='uppercase border border-zinc-900 px-6 rounded-full h-[2.5vw]'>Design</button>
                </div>
            </div>
            <div className="card-container-out rounded-xl w-1/2 h-full">
                <div 
                onMouseEnter={() => setHovering1(true)} 
                onMouseLeave={()=>  setHovering1(false)}
                className='card-container relative  rounded-xl w-full h-[90%]'>
                <h1 className='absolute text-[8vw] font-normal overflow-hidden text-[#CDEA68] leading-none font-["founders"] top-1/2 left-[0%] z-10 -translate-x-1/2 -translate-y-1/2'>
                        {"VISE".split("").map((item,index)=>{
                            return <motion.span 
                            initial={{y:"100%"}}
                            animate={isHovering1 ? {y:"0"} : {y:"100%"}}
                            transition={{ease:[0.22, 1, 0.36, 1],delay:index*0.1}}
                            key={index}
                            className='inline-block'
                            >{item}</motion.span>
                        })}
                    </h1>
                    <div className="img-container rounded-xl w-full overflow-hidden h-full bg-[#19181E]">
                        <img className=' w-full h-full object-center object-cover' src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"/>

                    </div>
                </div>
                <div className='card-btns flex gap-2 items-center justify-start w-full h-[10%]'>
                    <button className='uppercase border border-zinc-900 px-6 rounded-full h-[2.5vw]'>Copyrighting</button>
                    <button className='uppercase border border-zinc-900 px-6 rounded-full h-[2.5vw]'>Sales</button>
                    <button className='uppercase border border-zinc-900 px-6 rounded-full h-[2.5vw]'>Design</button>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Featured