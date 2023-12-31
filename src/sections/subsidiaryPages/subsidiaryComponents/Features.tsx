import React from 'react'

interface Contents {
    img: string;
    img2: string;
    head: string;
    desc: string;
  }

const Features: React.FC = () => {
    const contents: Contents[]=[
        {
            img: 'assets/images/subsidiaryPagesImages/props/save-energy 1.png',
            img2: '',
            head: "Specialized Talent Acquisition & Development",
            desc: "Timely and comprehensive data for better decision-making, reliability,resilience, and capacity management"
        },
        {
            img: 'assets/images/subsidiaryPagesImages/props/save-energy 1-1.png',
            img2: 'assets/images/subsidiaryPagesImages/props/Gap.png',
            head: "Efficient HRMS  for Operations",
            desc: "Timely and comprehensive data for better decision-making, reliability,resilience, and capacity management"
        },
        {
            img: 'assets/images/subsidiaryPagesImages/props/save-energy 1-2.png',
            img2: 'assets/images/subsidiaryPagesImages/props/Gap.png',
            head: "Strategic Outsourcing for Engineering Tasks",
            desc: "Timely and comprehensive data for better decision-making, reliability,resilience, and capacity management"
        },
        {
            img: 'assets/images/subsidiaryPagesImages/props/save-energy 1-3.png',
            img2: 'assets/images/subsidiaryPagesImages/props/Gap.png',
            head: "Cost Savings and Flexibility through Outsourcing",
            desc: "Timely and comprehensive data for better decision-making, reliability, resilience, and capacity management"
        },
    ]
  return (
    <div className='bg-black h-[1550px] lg:h-fit text-white'>
        <div className='flex flex-col text-center justify-center items-center h-screen '>
            <div className='flex justify-center lg:mt-auto mt-20 items-center mb-8'>
                <h1 className='text-4xl lg:text-4xl w-[80%] lg:w-[55%] '>Elevate Excellence: Strategize, Implement, and Optimize Engineering Dynamics at Scale for Unparalleled Industry Advancement</h1>
            </div>
            <div className='flex lg:p-4 w-full lg:w-[75%] flex-col lg:flex-row justify-between items-center'>
            {contents.map((item, index)=>(
                <div className="w-full flex-col flex justify-center items-center ">
                    <img src={item.img2} className='w-[100vw] lg:hidden' alt="" />
                    <div key={index} className='flex p-4 w-[270px] mb-10 flex-col justify-center items-center'>
                        <img src={item.img} alt={item.head} />
                        <h1 className='text-purple-400 text-2xl mt-3 mb-6 '>{item.head}</h1>
                        <p className='text-sm opacity-80 '>{item.desc}</p>
                    </div>
                </div>
            ))}
            </div>
        </div>
    </div>
  )
}

export default Features