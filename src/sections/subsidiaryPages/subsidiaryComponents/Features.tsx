import React from 'react'
import { features_content } from '../subConstants';

interface features_content {
    img: string;
    img2: string;
    head: string;
    desc: string;
    colour: string;
  }

const Features: React.FC = () => {
    
  return (
    <div className='z-10 lg:h-fit text-white'>

        <div className='flex flex-col text-center justify-center items-center h-full '>
            <div className='flex justify-center lg:mt-auto mt-20 items-center mb-10'>
                <h1 className='text-2_5xl font-semibold opacity-85 lg:text-4xl w-[90%] lg:w-[55%] '>Elevate Excellence: Strategize, Implement, and Optimize Engineering Dynamics at Scale for Unparalleled Industry Advancement</h1>
            </div>
            
            <div className='flex lg:p-4 w-full lg:w-[75%] flex-col lg:flex-row justify-between items-center'>
            {features_content.map((item, index)=>(

                <div className="w-full flex-col flex justify-center items-center ">
                    <div key={index} className='flex py-4 w-full md:w-[270px] mb-10 flex-col justify-center items-center'>
                        <img src={item.img} className='pb-4 md:p-0 w-[10rem] md:w-[120px] opacity-90 ' alt={item.head} />
                    <img src={item.img2} className='w-[100vw] lg:hidden' alt="" />
                        <h1 className={`${item.colour} px-4 text-xl_2 font-semibold opacity-90 md:text-2xl mt-3 mb-3 lg:mb-6`} >{item.head}</h1>
                        <p className='text-sm opacity-80 px-4 font-medium '>{item.desc}</p>
                    </div>
                </div>

            ))}
            </div>
            
        </div>

    </div>
  )
}

export default Features