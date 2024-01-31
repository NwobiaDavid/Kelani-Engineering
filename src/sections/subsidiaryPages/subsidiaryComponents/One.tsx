import React from 'react'

export const One: React.FC  = () => {
  return (
    <div>
        <div className='w-full h-[600px] bg-neutral-400' ></div>
        <div className=' h-[100vh] relative ' >
            {/* <div className='h-[300px] bg-blue-400 w-[200px] ' ></div> */}
            <div className=' sticky top-[50%] h-[300px] bg-red-300 z-10 w-[300px] '> </div>
            <div className=' h-[300px] bg-green-300 w-[300px] z-50  '></div>
        </div>
        <div className='w-full h-[500px] bg-neutral-400' >

        </div>
    </div>

  )
}
