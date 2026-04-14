import React, { useRef, useEffect } from 'react'
import ThingsCard from './Cards/ThingsCard'
import image1 from '../../assets/images/ThingSectionImages/Group.png'
import image2 from '../../assets/images/ThingSectionImages/Group (1).png'
import image3 from '../../assets/images/ThingSectionImages/Group (2).png'
import Element from '../../assets/images/ThingSectionImages/Element.png'
import '../../../src/App.css'
const ThingsYouNeed = () => {
    const cardRef = useRef(null)
    useEffect(() => {
        const cardCallback = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // entry.target.classList.remove('things-animate')
                    // void entry.target.offsetWidth
                    console.log(entries)
                    entry.target.classList.add('things-animate')
                    observer.unobserve(entry.target)
                }
            })
        }
        const observer = new IntersectionObserver(cardCallback, {
            threshold: 0.2
        })
        observer.observe(cardRef.current)
        return () => {
            if (cardRef.current) observer.unobserve(cardRef.current)
        }
    }, [])
    return (
        <div className='4xl:max-w-[1400px] 4xl:mx-auto  w-full flex flex-col items-start lg:items-center relative'>
            <div className='w-full  lg:w-[65%] xl:w-[60%] mt-[98px] 4xl:w-[50%] sm:mt-[126px] flex flex-col lg:items-center'>
                <img src={Element} alt="" className='hidden md:block absolute md:right-[3%] lg:right-[1%] xl:right-[3%] 4xl:right-[14%]' />
                <div className='flex flex-col w-full lg:items-center gap-3 '>
                    <h2 className='text-[38px] md:text-[42px] lg:text-[48px] lg:text-center font-[volkhov] font-bold leading-[54px] tracking-[0%]'>
                        Things you need <span className=' text-[#FA7436]'>to do</span>
                    </h2>
                    <p className='md:w-[75%] lg:w-[90%] xl:w-[80%] sm:w-[85%] w-full 4xl:w-[77%] leading-[32px] text-[18px] text-[#666666] font-[primary-poppins] font-normal text-start lg:text-center'>We ensure that you'll embark on a perfectly planned, safe vacation at a price you can afford.</p>
                </div>
            </div>
            <div className=' mt-[64px] md:w-[90%] lg:w-full grid-cols-1 sm:grid-cols-2 grid  items-center 4xl:gap-0 3xl:gap-4 lg:grid-cols-3 gap-3 4xl:flex 4xl:justify-evenly ' ref={cardRef}>

                <ThingsCard
                    img={image1}
                    head="Sign Up"
                    content="Completes all the work associated with planning and processing"
                    className='vector1'
                />
                <ThingsCard
                    img={image2}
                    head="Worth of Money"
                    content="After successful access then book from exclusive deals & pricing"
                    className='vector2'
                />
                <ThingsCard
                    img={image3}
                    head="Exciting Travel"
                    content="Start and explore a wide range of exciting travel experience."
                    className='vector3'
                />
            </div>
        </div>
    )
}
export default ThingsYouNeed