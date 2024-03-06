import React from 'react'

function Cards() {
  return (
    <div className='w-full min-h-screen bg-zinc-100 relative flex items-center justify-center px-12 gap-5'>
      <div className='w-1/2 h-[28vw] rounded-xl bg-[#004D43] flex items-center justify-center'>
          <img src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"  />
      </div>
      <div className='w-1/2 h-[28vw] flex items-center justify-between gap-5 rounded-xl'>
      <div className='w-1/2 h-full rounded-xl flex items-center justify-center  bg-[#212121]'>
          <img src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" />
      </div>
      <div className='w-1/2 h-full rounded-xl flex items-center justify-center  bg-[#212121]'>
          <img src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" />
      </div>
      
      </div>

    </div>
  )
}

export default Cards