import React from 'react'
import trophy from '../../../assets/images/HeroImages/trophy-removebg-preview 1.png'
const LeftCard = () => {
    return (
        <div className=' absolute top-[15%] text-[9px] sm:text-[12px] md:text-[16px] lg:text-[14px] xl:text-[16px]  bg-[#FFFFFF] left-[-8%] xsm:left-[-10%] xsm:w-[30%] xsm:text-[6px] z-0 md:left-[-2%] lg:left-[-14%] xl:left-[-12%] 3xl:left-[-5%] p-2 gap-2  w-[25%] md:w-[22%] lg:w-[32%] md:h-[72px] xl:w-[30%] 3xl:w-[25%]  lg:h-[14%px] flex items-center justify-center rounded-md shadow-lg font-[primary-poppins] font-medium tracking-[100%] 4xl:left-[-1%] 4xl:rounded-lg '>
            <img src={trophy} alt="trophy" className='xsm:w-[20px]' />
            <div className=' flex items-start justify-center'>
                <span>Best Tour Award</span>
            </div>
        </div>
    )
}
export default LeftCard