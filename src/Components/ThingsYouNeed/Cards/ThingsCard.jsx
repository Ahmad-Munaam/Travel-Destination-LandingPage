import React from 'react'
import '../../../../src/App.css'

const ThingsCard = ({ img, head, content, className }) => {
    return (
        <div className={` cursor-pointer things-card-hover ThingsCard shadow-lg flex flex-col items-start justify-around p-[28px] rounded-xl relative z-0 ${className} opacity-[100%] gap-2 4xl:w-[378px]`}>
            <div className='h-[48px] w-[48px]'>
                <img src={img} alt="image" className='object-contain text-orange-800 z-10'/>
            </div>
            <div className=' flex flex-col gap-3'>
                <h3 className=' text-[24px] text-[#222222] font-[primary-poppins] font-semibold'>{head}</h3>
                <p className=' text-[#666666] font-[primary-poppins] text-[16px] leading-[24px]'>{content}</p>
            </div>
        </div>
    )
}
export default ThingsCard