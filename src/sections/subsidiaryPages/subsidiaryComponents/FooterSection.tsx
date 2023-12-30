import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const FooterSection: React.FC  = () => {
  return (
  <div className='h-[700px] flex justify-center bg-inherit items-center '>

      <div className=' m-5 w-full h-[95%] bg-white flex rounded-2xl border' >
        <div className='w-[50%] flex flex-col items-center justify-center text-center'>

            <div className=" h-[80%] w-full flex flex-col  items-center justify-center ">
                <div className='rounded-lg bg-gray-400 h-[50px] w-[200px] '> </div>
                <div className='mb-10 mt-5 text-lg tracking-wider '>
                    <p>SHUTTLEWORTHSTRASSE 31-33,</p>
                    <p>1210 VIENNA, AUSTRIA</p>
                    <p>SALES@6B47.COM</p>
                </div>
                <div className='flex text-4xl w-[20%] justify-around '>
                        <FaLinkedin />
                        <FcGoogle />
                </div>
            </div>

            <div className='flex h-[20%] opacity-80 p-10 w-full items-end justify-between '>
                <p>© 2023 6B47 REAL ESTATE INVESTORS AG</p>
                <div className='flex '>
                    <p className='mr-3'>Imprint</p>
                    <p>Legal</p>
                </div>
            </div>

        </div>
        <div className='w-[50%] flex-col justify-center flex container '>
            <h2 className='w-[70%] text-xl px-6 text-left flex items-start justify-start mb-3 '>If you want to book an appointment or find solutions, fill out the form below and our manager will contact you within a day</h2>
            <form className='flex justify-center items-center  flex-col p-4 w-full ' action="#">
                <input className='border-b  w-full mb-2 focus-within:border-black hover:border-black duration-150 outline-none p-3' placeholder='Name' type="text" />
                <input className='border-b w-full mb-2 focus-within:border-black hover:border-black duration-150  outline-none p-3' placeholder='Phone Number' type="text" />
                <input className='border-b  w-full mb-2 focus-within:border-black hover:border-black duration-150 outline-none p-3' placeholder='Selection' type="text" />
                <textarea className='border-b resize-none w-full focus-within:border-black  hover:border-black outline-none p-3' placeholder='Message' name="" id="" cols={30} rows={10}></textarea>
                <div className="flex items-start justify-start w-full"><button className='text-left p-2 px-7 hover:bg-black hover:text-white duration-200 mt-5 outline-none border border-black rounded-full w-fit '>Send</button></div>
            </form>
        </div>
      </div>
  </div>
  )
}

export default FooterSection