import React, { useEffect, useRef } from 'react'
import element from '../../../assets/images/SubscribeImages/Group 46.png'
import rightElement from '../../../assets/images/SubscribeImages/Element.png'
import bottomEement from '../../../assets/images/SubscribeImages/Element (1).png'
import FooterInfo from '../FooterInfo/FooterInfo'
const Subscribe = () => {
    const ref = useRef(null)
    console.log(ref.current)
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.remove('sub-left-animation')
                    void entry.target.offsetWidth
                    entry.target.classList.add('sub-left-animation')
                    console.log("left done")
                }
            })
        }, { threshold: 0.2 }).observe(ref.current)
        return () => {
            if (ref.current) {
                observer.unobserve(ref.current)
            }
        }
    }, [])
    return (
        <div className='4xl:max-w-[1400px] 4xl:mx-auto w-full relative'>
            <div className="py-[8%] relative subscribe h-[380px] sm:h-[416px] bg-[#FA7436] w-full rounded-lg flex justify-center">
                <img src={rightElement} alt="" className=' rightElement sm:block hidden absolute right-0 top-0' />
                <img src={bottomEement} alt="" className='bottomElement absolute left-0 bottom-0 z-0 ' ref={ref} />
                <div className='w-[90%] sm:w-[70%] flex flex-col justify-between z-10'>
                    <h2 className='text-center text-[28px] xsm:text-[32px] sm:text-[38px] md:text-[42px] lg:text-[48px] text-[#FFFFFF] font-[volkhov] font-bold leading-[110%] xsm:leading-[100%] xsm:font-semibold px-2'>
                        Subscribe and get exclusive deals & offer
                    </h2>
                    <div className="w-full flex justify-center items-center mt-4">
                        <div className="py-2 flex w-full  sm:w-[86%] lg:w-[82%] bg-white rounded-lg sm:flex-row flex-col shadow-md justify-between overflow-hidden">
                            <div className='relative flex p-[2px] justify-center items-center w-full min-w-0'>
                                <img src={element} alt="" className='absolute left-4 object-contain z-10' />
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full px-12 py-3 bg-transparent outline-none text-gray-700 text-sm sm:text-base placeholder:text-sm sm:placeholder:text-base"
                                />
                            </div>
                            <button className="bg-[#FA7436] text-white px-4 sm:px-6 py-3 font-normal hover:bg-[#e55b1d] rounded-lg m-1 text-sm sm:text-base whitespace-nowrap">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <FooterInfo />
        </div>
    )
}
export default Subscribe