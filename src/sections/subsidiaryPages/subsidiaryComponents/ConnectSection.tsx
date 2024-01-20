import React from 'react'
import { Link } from 'react-router-dom'
import { IoIosArrowRoundForward } from "react-icons/io";

const ConnectSection: React.FC = () => {
    return (
        <div className=' rounded-b-3xl  w-full h-[650px] lg:h-screen relative flex justify-center items-center text-white '>
            <img className="absolute text-center  " src="/assets/images/subsidiaryPagesImages/props/Circles.png" alt="" />
            <div className='flex z-50 relative items-center justify-center flex-col h-full w-[90%] lg:w-[35%] text-center '>
                <h1 className=' text-4xl lg:text-5xl uppercase font-semibold lg:font-bold'>Connect with Us Today</h1>
                <p className='text-xl opacity-85 my-10'>Have questions or ready to explore how our solutions can benefit you? Reach out to us! Our dedicated team is here to assist. Contact us for personalized assistance and let's embark on a journey towards your success.</p>
                <div className=" py-2 w-fit font-semibold z-10 cursor-pointer flex justify-center items-center rounded-full px-5 bg-white text-black">
                    <Link to={"#"} className="w-full" >GET CONNECTED </Link><IoIosArrowRoundForward size={30} />
                </div>
            </div>
        </div>
    )
}

export default ConnectSection