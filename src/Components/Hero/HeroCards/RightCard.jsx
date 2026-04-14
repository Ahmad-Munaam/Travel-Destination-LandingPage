import React from 'react'
const RightCard = ({ img, content, heading , customClass}) => {
    return (
        <div className={` shadow-xl md:p-2 xl:p-2 sm:p-2 p-1 md:py-10 rounded-md sm:rounded-md absolute ${customClass} bg-[#FFFFFF] flex justify-center items-center xsm:w-[36%] w-[30%]  md:w-[30%] h-[12%] sm:h-[10%] sm:w-[25%] md:h-[12%] lg:w-[36%] lg:h-[16%] xl:w-[39%] 3xl:w-[36%] xl:h-[14%] gap-1 lg:gap-x-[4px] 4xl:w-[32%]`}>
            <div className=' flex justify-center items-center'>
                <img src={img} alt="Map Image" className=' object-contain size-9 sm:size-12 md:size-16'/>
            </div>
            <div className=' flex flex-col items-start justify-center sm:gap-1 lg:gap-0 xl:gap-1'>
                <h2 className=' font-[primary-poppins] font-medium xsm:text-[6px] text-[9px] sm:text-[12px] lg:text-[14px] xl:text-[16px] tracking-[100%]'>{heading}</h2>
                <p className='xsm:text-[6px] text-[9px] sm:text-[10px] md:text-[16px] lg:text-[12px] 3xl:text-[16px] xl:leading-[20px] text-[#666666] font-[primary-poppins] font-normal'>{content}</p>
            </div>
        </div>
    )
}
export default RightCard