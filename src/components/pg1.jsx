import React from 'react'

function pg1() {
  return (
    <div className='w-full min-h-dvh bg-slate-200 pt-1'>
       <div className="text-structure mt-52 px-20">
       {["WE CREATE","EYE OPENING","PRESENTATIONS"].map((item,index)=>{
        return <div className="masker">
            <div className="masker-in w-fit flex items-end overflow-hidden">
                {index === 1 && (
                    <div className='mr-3 w-[8vw] rounded-md h-[5.7vw] relative bg-green-500'></div>
                )}
                <h1 className=' -mb-[1vw] uppercase text-[8vw] font-semibold leading-[8vw] font-["founders"]'>{item}</h1>
            </div>
        </div>
       })}
       </div>
    </div>
  )
}

export default pg1