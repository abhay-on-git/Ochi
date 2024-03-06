import React from 'react'

function Featured() {
  return (
    <div className='relative w-full min-h-screen bg-zinc-100'>
        <h1 className='text-[6vw] font-light font-["founders"] border-b px-12 pt-16 pb-10 border-zinc-500 '>Featured Projects</h1>
        <div className="cards-container-parent w-full h-screen flex gap-5 px-12 pt-16">
            <div className="card-container-out rounded-xl overflow-hidden w-1/2 h-full">
                <div className='card-container  rounded-xl overflow-hidden w-full h-[90%]'>
                    <div className="img-container w-full h-full bg-[#C8C8C9]">
                        <img className=' w-full h-full object-center object-cover' src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"/>

                    </div>
                </div>
                <div className='card-btns flex gap-2 items-center justify-start w-full h-[10%]'>
                    <button className='uppercase border border-zinc-900 px-6 rounded-full h-[2.5vw]'>Copyrighting</button>
                    <button className='uppercase border border-zinc-900 px-6 rounded-full h-[2.5vw]'>Sales</button>
                    <button className='uppercase border border-zinc-900 px-6 rounded-full h-[2.5vw]'>Design</button>
                </div>
            </div>
            <div className="card-container-out rounded-xl overflow-hidden w-1/2 h-full">
                <div className='card-container  rounded-xl overflow-hidden w-full h-[90%]'>
                    <div className="img-container w-full h-full bg-[#19181E]">
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