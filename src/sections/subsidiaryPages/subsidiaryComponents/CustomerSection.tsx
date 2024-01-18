import React from 'react';
// import { motion } from 'framer-motion';
import Marquee from "react-fast-marquee";


interface Card {
    img: string;
  }
const CustomerSection: React.FC = () => {
        const cards: Card[] = [
          {
            img: 'assets/images/subsidiaryPagesImages/props/image-1.png'
          },
          {
            img: 'assets/images/subsidiaryPagesImages/props/image-2.png'
          },
          {
            img: 'assets/images/subsidiaryPagesImages/props/image-3.png'
          },
          {
            img: 'assets/images/subsidiaryPagesImages/props/image-4.png'
          },
          {
            img: 'assets/images/subsidiaryPagesImages/props/image-5.png'
          },
          {
            img: 'assets/images/subsidiaryPagesImages/props/image-6.png'
          },
          {
            img: 'assets/images/subsidiaryPagesImages/props/imagee.png'
          },
        ];

  return (
    <div className="w-full  h-[500px] lg:h-fit ">
        <div className="lg:h-[500px] z-50 relative h-[200px]">
          <h1 className='text-white opacity-60 mb-6 text-center font-semibold text-xs lg:text-base lg:mb-10 '>CUSTOMERS</h1>
                <div className='flex w-full relative justify-center items-center'>
          <img src="assets/images/subsidiaryPagesImages/props/marquee-line-left.png" alt=""  className=' invisible lg:visible left-[8.3rem] top-[14.2rem]' />

            <div className=' w-[500px] 3xl:w-[55%] lg:w-[88%] flex-col relative flex justify-center items-center '>
                <Marquee pauseOnHover={true} className='border  border-opacity-40 border-white rounded-xl ' >
                  {cards.map((item, index)=>(
                      <div key={index} className='m-0 bg-black p-2 w-[150px] h-[100px] md:w-[250px] md:h-[170px] lg:h-[190px] lg:w-[260px] 3xl:h-[200px] 3xl:w-[270px] flex justify-center items-center border-white text-white border border-y-0 border-opacity-30 '>
                              <div className=' flex justify-center items-center'>
                                  <img src={item.img} className=' w-[45px] md:w-full ' alt="" />
                              </div>
                      </div>
                  ))}
                </Marquee>
            </div>

            <img src="assets/images/subsidiaryPagesImages/props/marquee-line-right.png" alt="" className='invisible lg:visible right-[8.3rem] top-[14.2rem]' />
                </div>
        </div>
    </div>
  );
};

export default CustomerSection;
