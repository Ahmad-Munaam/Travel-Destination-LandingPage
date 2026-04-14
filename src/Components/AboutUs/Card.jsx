import React from 'react'
const Card = ({ value }) => {
    return (
        <>
            <img src={value.image} alt="" className='  absolute top-0 left-[-20px] z-50' />
            <div className='bg-white  card1 mt-[35px] w-full flex-col flex justify-center p-[1.75rem] items-start gap-3 shadow-lg rounded-xl pr-[2.7rem] z-10'>
                <p className='text-[16px] text-[#444444] font-[primary-poppins] font-medium'>
                    {value.content}
                </p>
                <div className='flex flex-col items-start gap-2'>
                    <h3 className='text-[18px] text-[#222222] font-[primary-poppins] font-semibold'>{value.h3}</h3>
                    <p className='text-[#666666] font-[primary-poppins] font-medium'>{value.location}</p>
                </div>
            </div>

        </>
    )
}

export default Card
