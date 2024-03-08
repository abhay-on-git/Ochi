import React, { useEffect, useState } from 'react'

function Project() {

  const [rotate,setRotate] = useState(0);
  useEffect(()=>{
      window.addEventListener("mousemove",(e)=>{
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth/2; 
      let deltaY = mouseY - window.innerHeight/2;

      let angle = Math.atan2(deltaY, deltaX) * (180/Math.PI);
      
      setRotate(angle -180);

      })
  })

  return (
    <div className='relative w-full min-h-screen bg-[#CDEA68] text-center flex flex-col items-center justify-center'>
        <h1 className='text-[15vw] leading-[11.5vw] font-["founders"]'>READY</h1>
        <h1 className='text-[15vw] leading-[11.5vw] font-["founders"]'>TO START</h1>
        <h1 className='text-[15vw] leading-[11.5vw] font-["founders"]'>THE PROJECT</h1>
        <button className='bg-black text-white px-20 py-4 text-[1.2vw] mt-10 rounded-full'>Start The Project</button>

              
        <div data-scroll data-scroll-section data-scroll-speed="0.3" className='eye-continer absolute flex gap-10 top-[35%] left-3/2 -translate-x-1/2 -translate-y-1/2'>
               <div className='eye1 relative w-[12vmax] h-[12vmax] rounded-full bg-zinc-100'>
                  <div style={{transform : `translate(-50%,-50%) rotate(${rotate}deg)`}} className='eye2-container absolute w-[90%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                     <div className='eye2 relative w-[8vmax] h-[8vmax] rounded-full bg-zinc-900'>
                         <div  className='eye3-container absolute w-[90%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                            <div  className='eye3 w-[2vmax] h-[2vmax] rounded-full bg-zinc-100 '>
                            
                            </div>
                         </div>
                     </div>
                  </div>
               </div>
               <div className='eye1 relative w-[12vmax] h-[12vmax] rounded-full bg-zinc-100'>
                  <div style={{transform : `translate(-50%,-50%) rotate(${rotate}deg)`}} className='eye2-container absolute w-[90%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                     <div className='eye2 relative w-[8vmax] h-[8vmax] rounded-full bg-zinc-900'>
                         <div  className='eye3-container absolute w-[90%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                            <div className='eye3 w-[2vmax] h-[2vmax] rounded-full bg-zinc-100 '>

                            </div>
                         </div>
                     </div>
                  </div>
               </div>
            </div>      

    </div>
  )
}

export default Project