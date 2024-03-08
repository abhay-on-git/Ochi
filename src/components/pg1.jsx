import { easeInOut, motion } from 'framer-motion';
import React from 'react'
import { MdArrowOutward } from "react-icons/md";
function pg1() {
  return (
    <div data-scroll data-scroll-speed="-0.5" className='w-full min-h-dvh bg-slate-200 pt-1'>
       <div className="text-structure mt-40 px-12">
       {["WE CREATE","EYE OPENING","PRESENTATIONS"].map((item,index)=>{
        return <div className="masker">
            <div className="masker-in pb-[0.5vw] w-fit flex items-end overflow-hidden">
                {index === 1 && (
                    <motion.div initial={{width:0}} animate={{width:"8vw"}} transition={{ease:[0.76, 0, 0.24, 1],duration:1}} className='mr-3 w-[8vw] rounded-md h-[5.7vw] relative bg-[url(https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg)] bg-center bg-cover bg-green-500'></motion.div>
                )}
                <h1 className=' -mb-[1vw] uppercase text-[9vw] font-semibold leading-[8vw] font-["founders"]'>{item}</h1>
            </div>
        </div>
       })}
       </div>
       <div className="pg1p2 px-12 flex justify-between items-center border-t mt-16 pt-5 border-zinc-400">
           <div className="pg1p2-l flex items-center justify-between w-[60%]">
            <h2 className='text-lg'>For public and private companies</h2>
            <h2 className='text-lg'>From the first pitch to IPO</h2>
           </div>
           <div className="pg1p2-R flex items-center justify-between">
            <div className="btn uppercase border px-4 py-1 rounded-full hover:text-[#ffffff] hover:bg-zinc-900 transition-colors cursor-pointer border-zinc-900">start the project</div>
            <div className="btn-arrow border p-2 rounded-full ml-2 border-zinc-900 "><MdArrowOutward /></div>
           </div>
       </div>
    </div>
  )
}

export default pg1