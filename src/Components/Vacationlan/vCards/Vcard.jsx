import React from 'react'
import navigation from '../../../assets/images/vacationImages/Icons/Navigation.png'
import star from '../../../assets/images/vacationImages/Icons/star 1.png'
const Vcard = ({image, price , trip , rating, vName }) => {
    return (
        <div className='my-[4px] w-[50%] xsm:w-[65%] sm:w-[40%] md:w-[30%] lg:w-[28%] xl:w-[29%] 2xl:w-[27%] 4xl:w-[21%] flex-shrink-0 h-[320px]  flex flex-col shadow-md rounded-lg'>
            <img src={image} alt="" className=' object-cover h-[70%] w-full rounded-md' />
            <div className=' flex flex-col p-2 gap-4'>
                <div className="flex justify-between">
                    <span className=' font-[primary-poppins] text-[16px] md:text-[18px] font-medium text-[#222222]'>
                        {vName}
                    </span>
                    <span className=' font-[primary-poopins] font-semibold text-[16px] md:text-[20px] xl:text-[18px] text-[#FA7436]'>
                        {price}
                    </span>
                </div>
                <div className="flex justify-between">
                    <div className='flex gap-2 items-center'>
                        <img src={navigation} alt="" className='size-4'/>
                        <p className=' text-[#666666] font-[primary-poppins] text-[14px]'>{trip}</p>
                    </div>
                    <div className=' flex justify-center items-center gap-2'>
                        <img src={star} alt="" className=' size-3'/>
                        <p className=' text-[#666666] font-[primary-poppins] text-[16px]'>{rating}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Vcard