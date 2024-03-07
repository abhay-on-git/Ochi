import React from 'react'

function About() {
  return (
    <div className='bg-[#CDEA68] pt-20 rounded-tl-3xl rounded-tr-3xl'>
        <h1 className='text-[3.5vmax] border-b-2 border-[#a8b872] p-16 leading-[4vw] '>Ochi is a strategic partner for fast-grow­ing tech businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.</h1>
        <div className='w-full flex items-center justify-between px-14 py-16'>
             <div className='flex flex-col'>
                <h1 className='text-[3.5vmax] mb-7'>Our approch:</h1>
                <div className='py-3 px-5 w-[12vmax] flex items-center text-white bg-black rounded-full border border-zinc-800'>
                    <h2 className='text-[1.2vmax] whitespace-nowrap'>Read More</h2>
                    <div className='w-2 h-2 ml-5 bg-slate-50 rounded-full'></div>
                </div>
             </div>
             <div className='w-1/2 h-[30vmax] rounded-lg bg-[#8b946c] bg-[url(https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg)] bg-center bg-cover'></div>
        </div>
    </div>
  )
}

export default About