import React, { useEffect, useRef } from 'react'
import '../../../../src/App.css'
const Card = ({ value }) => {
    const ref = useRef(null)
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('blogs-Cardanimation')
                }
            })
        }).observe(ref.current)
        return () => {
            if (ref.current) {
                observer.unobserve(ref.current)
            }
        }
    }, [])
    return (
        <div className=' flex-shrink-0 xsm:w-[85%] w-[50%] sm:w-[40%] md:w-[30%] xl:w-[25%] 4xl:w-[21%] h-[327px] flex flex-col gap-4 rounded-md my-[22px]' ref={ref}>
            <img src={value.image} alt="" className='h-[70%] object-cover rounded-lg'/>
            <div className=" content flex flex-col justify-center items-start gap-2">
                <p className='text-[#222222] font-[primary-poppins] font-medium text-[16px]'>
                    {value.content}
                </p>
                <p className=' text-[#999999] font-[primary-poppins] font-normal text-[14px]'>
                    {value.date}
                </p>
            </div>
        </div>
    )
}
export default Card