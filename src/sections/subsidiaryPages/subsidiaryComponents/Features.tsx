import React from 'react'

interface Contents {
    img: string;
    img2: string;
    head: string;
    desc: string;
    colour: string;
  }

interface FeaturesProps {
    header: string;
    contents: Contents[]

}

const Features: React.FC<{ data: FeaturesProps }> = ({data}) => {
    // const contents: Contents[]=[
    //     {
    //         img: 'assets/images/subsidiaryPagesImages/props/save-energy 1.png',
    //         img2:  'assets/images/subsidiaryPagesImages/props/Gap.png',
    //         head: "Specialized Talent Acquisition & Development",
    //         desc: "Timely and comprehensive data for better decision-making, reliability,resilience, and capacity management",
    //         colour: "text-purple-400"
    //     },
    //     {
    //         img: 'assets/images/subsidiaryPagesImages/props/save-energy 1-1.png',
    //         img2: 'assets/images/subsidiaryPagesImages/props/Gap.png',
    //         head: "Efficient HRMS  for Operations",
    //         desc: "Timely and comprehensive data for better decision-making, reliability,resilience, and capacity management",
    //         colour: "text-purple-400"
    //     },
    //     {
    //         img: 'assets/images/subsidiaryPagesImages/props/save-energy 1-2.png',
    //         img2: 'assets/images/subsidiaryPagesImages/props/Gap.png',
    //         head: "Strategic Outsourcing for Engineering Tasks",
    //         desc: "Timely and comprehensive data for better decision-making, reliability,resilience, and capacity management",
    //         colour: "text-purple-400"
    //     },
    //     {
    //         img: 'assets/images/subsidiaryPagesImages/props/save-energy 1-3.png',
    //         img2: 'assets/images/subsidiaryPagesImages/props/Gap.png',
    //         head: "Cost Savings and Flexibility through Outsourcing",
    //         desc: "Timely and comprehensive data for better decision-making, reliability, resilience, and capacity management",
    //         colour: "text-purple-400"
    //     },
    // ]
  return (
    <div className='z-10 lg:h-fit text-white'>

        <div className='flex flex-col text-center justify-center items-center h-full '>
            <div className='flex justify-center lg:mt-auto mt-20 items-center mb-10'>
                <h1 className='text-2_5xl font-semibold opacity-85 lg:text-4xl w-[90%] lg:w-[55%] '>{data.header}</h1>
            </div>
            
            <div className='flex lg:p-4 w-full lg:w-[75%] flex-col lg:flex-row justify-between items-start'>
            {data.contents.map((item, index)=>(

                <div key={index} className="w-full flex-col flex justify-center items-center ">
                    <div  className='flex py-4 w-full md:w-[270px] mb-10 flex-col justify-center items-center'>
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