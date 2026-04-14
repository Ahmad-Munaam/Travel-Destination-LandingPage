import React from 'react'
const LeftBottomCard = ({ img, content, heading, customClass }) => {
    return (
        <div className={` shadow-md p-1 lg:p-2 xl:p-2 3xl:p-3 rounded-md absolute ${customClass} bg-[#FFFFFF] flex justify-center items-center w-[28%]   md:w-[25%]  h-[11%] lg:h-[13%] gap-2 lg:gap-x-[4px] lg:w-[39%] xl:w-[43%] 4xl:w-[36%] 3xl:w-[40%]`}>
            <div className=' flex justify-center items-center'>
                <img src={img} alt="Map Image" className=' object-contain xsm:size-7 size-9'/>
            </div>
            <div className=' flex flex-col items-start justify-center xl:gap-1'>
                <h2 className=' font-[primary-poppins] font-medium text-[9px] sm:text-[12px] md:text-[16px] lg:text-[14px] xl:text-[18px]  xsm:text-[6px]'>{heading}</h2>
                <p className=' text-[9px] sm:text-[12px]  md:text-[14px] lg:text-[12px] xl:text-[14px] 3xl:text-[16px] xl:leading-[100%] text-[#666666] font-[primary-poppins] font-normal xsm:text-[6px]'>{content}</p>
            </div>
        </div>
    )
}
export default LeftBottomCard