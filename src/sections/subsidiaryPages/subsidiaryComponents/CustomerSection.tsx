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
    <div className="w-full h-[1100px] lg:h-fit bg-black">
      <div className='flex flex-col relative justify-center items-center'>
        <img src="assets/images/subsidiaryPagesImages/props/marquee-line-left.png" alt=""  className='lg:absolute invisible lg:visible left-[8.3rem] top-[14.2rem] '/>
        <img src="assets/images/subsidiaryPagesImages/props/marquee-line-right.png" alt="" className='lg:absolute invisible lg:visible right-[8.3rem] top-[14.2rem]' />

          <div className='h-[400px] w-[500px] lg:w-[70%] flex-col relative flex justify-center items-center '>
        <h1 className='text-white opacity-60 mb-6 lg:mb-10'>CUSTOMERS</h1>
              <Marquee pauseOnHover={true} className='border border-opacity-40 border-white rounded-xl ' >
                {cards.map((item, index)=>(
                    <div key={index} className='m-0 p-2 w-[200px] h-[150px] flex justify-center items-center border-white text-white border border-opacity-30 '>
                            <div className=' flex justify-center items-center'>
                                <img src={item.img} alt="" />
                            </div>
                    </div>
                ))}
              </Marquee>
          </div>
      </div>
    </div>
  );
};

export default CustomerSection;
