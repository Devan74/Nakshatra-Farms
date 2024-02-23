import React from 'react'
import { FaGreaterThan } from "react-icons/fa6";
import Image from "next/image";
import Cow from "../../public/assets/cow.png"


const Contact = () => {
  return (
    <div className='contact-bg '>
        <p className="text-[#3C1D59] text-[48px] text-center pt-[113px]">Want to Start Your Own Farm? We're Here to Help!</p>
        <div className="w-[1262px] h-[315px] border border-[#3C1D59] mx-auto my-9 rounded-3xl bg-[#EFDDFF] text-center">
            <p className="text-[24px] mt-[5%]">At Nakshatra Farms, we believe in sharing our passion for sustainable farming with others.</p> <br />
            <p className="text-[24px]">If you've ever imagined waking up to the serenity of your own farm, tending to your crops, and harvesting the fruits of your labor, we're here to help turn that dream into a thriving reality.</p>
            <button type="button" className='flex items-center justify-center gap-2 font-bold bg-[#3C1D59] hover:bg-yellow-200 hover:text-[#3C1D59] rounded-xl text-white p-2 transition duration-300 mt-[2.5rem] mx-auto'>Contact Us <span><FaGreaterThan className='text-[12px]' /></span></button>
            <div className='relative left-[65%] top-[-41%]'>
                <Image src={Cow} alt="cow-img"></Image>
            </div>
        </div>
    </div>
  )
}

export default Contact