import React from 'react'

function Footer() {
  return (
    <div className='Footer w-full flex h-[27vw] px-12'>
        <div className="fl w-1/2 h-full py-12 ">
            <div className='fl1 w-full h-[80%]'>
            <h1 className='text-[10vw] font-bold font-["founders"] leading-[8vw] '>EYE-</h1>
            <h1 className='text-[10vw] font-bold font-["founders"] leading-[8vw] '>OPENING</h1>
            </div>
            <div className='credits w-full h-[30%] flex items-center justify-start '>
                <h1 className='text-[1.4vw] font-medium'>Design Credits : Ochi Design</h1>

            </div>
        </div>
        <div className="fr flex flex-col w-1/2 h-full pt-12">
            <h1 className='text-[9vw] font-bold self-end font-["founders"] mb-10 leading-[8vw] '>PRESENTATIONS</h1>
            <h1 className='text-[1.4vw] self-end font-medium'>Developed by : Abhay Agnihotri</h1>
            <div className='flex flex-col mt-7 w-full'>
                {["Linkedin", "Twitter", "Instagram"].map((item, index) => {

                    const urls = {
                        "Linkedin": "https://www.linkedin.com/in/abhay-agnihotri-34328a24a/",
                        "Twitter":"https://twitter.com/abhayog",
                        "Instagram" : "https://www.instagram.com/iamabhayagnihotri/"
                    }
                    return (
                        <a key={index} href={urls[item]} className='text-[2vw] cursor-pointer font-thin text-right font-["founders"] hover:tracking-wide'>{item}</a>
                    );
            })}
            </div>

        </div>

    </div>
  )
}

export default Footer