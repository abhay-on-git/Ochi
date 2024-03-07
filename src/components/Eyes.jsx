import React, { useEffect, useState } from 'react'

function Eyes() {

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
    <div className='w-full h-screen overflow-hidden '>
        <div data-scroll data-scroll-speed="-.6" className='relative w-full h-full bg-cover bg-center bg-[url(https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg)]'>
            <div className='eye-continer absolute flex gap-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
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
        
    </div>
  )
}

export default Eyes