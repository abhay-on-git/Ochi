import React from 'react'

function Marquee() {
  return (
    <div className=' bg-[#004D43] flex items-center rounded-tl-3xl rounded-tr-3xl  text-white w-full py-20'>
        <div className="marquee-in flex items-center justify-between overflow-hidden border-t-2 border-b border-slate-200">
            <h1 className=' uppercase pb-12 boredr font-["founders"] text-[30vmax] whitespace-nowrap leading-[20vmax]'>We Are Ochi</h1>
            <h1 className='uppercase pb-12 boredr font-["founders"] text-[30vmax] whitespace-nowrap leading-[20vmax]'>We Are Ochi</h1>
        </div>
    </div>
  )
}

export default Marquee