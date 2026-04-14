import React from 'react'
import { RiArrowDropDownLine } from "react-icons/ri";
const footerCards = ({title, body}) => {
    return (
        <div className=' flex flex-col justify-center items-start gap-3'>
            <div className='flex justify-start items-center gap-0 font-[primary-poppins] font-medium'>
                <span className='text-[#222222] text-[16px] font-semibold leading-[100%]'>{title}</span>
                <span className=' p-0'><RiArrowDropDownLine className='cursor-pointer icons-color w-[24px] h-[24px]'/>
                </span>
            </div>
            <p className='text-[#666666] leading-[100%] text-[12px] font-[primary-poppins] font-normal'>
                {body}
            </p>
        </div>
    )
}
export default footerCards