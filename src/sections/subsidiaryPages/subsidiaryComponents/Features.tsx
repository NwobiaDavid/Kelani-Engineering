import React from 'react'

interface Contents {
    img: string;
    head: string;
    desc: string;
  }

const Features: React.FC = () => {
    const contents: Contents[]=[
        {
            img: 'assets/images/subsidiaryPagesImages/props/save-energy 1.png',
            head: "Specialized Talent Acquisition & Development",
            desc: "Timely and comprehensive data for better decision-making, reliability,resilience, and capacity management"
        },
        {
            img: 'assets/images/subsidiaryPagesImages/props/save-energy 1-1.png',
            head: "Efficient HRMS  for Operations",
            desc: "Timely and comprehensive data for better decision-making, reliability,resilience, and capacity management"
        },
        {
            img: 'assets/images/subsidiaryPagesImages/props/save-energy 1-2.png',
            head: "Strategic Outsourcing for Engineering Tasks",
            desc: "Timely and comprehensive data for better decision-making, reliability,resilience, and capacity management"
        },
        {
            img: 'assets/images/subsidiaryPagesImages/props/save-energy 1-3.png',
            head: "Cost Savings and Flexibility through Outsourcing",
            desc: "Timely and comprehensive data for better decision-making, reliability, resilience, and capacity management"
        },
    ]
  return (
    <div className='bg-black text-white'>
        <div className='flex flex-col text-center justify-center items-center h-screen '>
            <div className='flex justify-center items-center mb-8'>
                <h1 className='text-4xl w-[55%] '>Elevate Excellence: Strategize, Implement, and Optimize Engineering Dynamics at Scale for Unparalleled Industry Advancement</h1>
            </div>
            <div className='flex p-4 w-[75%] justify-between items-center'>
            {contents.map((item, index)=>(
                <div key={index} className='flex w-[270px] flex-col justify-center items-center'>
                    <img src={item.img} alt={item.head} />
                    <h1 className='text-purple-400 text-2xl mt-3 mb-6 '>{item.head}</h1>
                    <p className='text-sm opacity-80 '>{item.desc}</p>
                </div>
            ))}
            </div>
        </div>
    </div>
  )
}

export default Features