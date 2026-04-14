import React, { useEffect, useRef, useState } from 'react'
import DealCard from './DealCards/DealCard'
import image1 from '../../assets/images/dealsImages/Image1.png'
import image3 from '../../assets/images/dealsImages/Image3.png'
import image4 from '../../assets/images/dealsImages/Image4.png'
import image5 from '../../assets/images/dealsImages/46-niagara-getty.jpg'
import image6 from '../../assets/images/dealsImages/190417162012-10-earth-beautiful-places.jpg'
import image7 from '../../assets/images/dealsImages/15-worlds-best-places-to-visit-18.jpg'
import { FiArrowLeft } from "react-icons/fi";
import { FiArrowRight } from "react-icons/fi";
const Deals = () => {
    const [activeBtn, setActiveBtn] = useState(null);
    const ref = useRef()
    const rightScroll = () => {
        // console.log(ref.current)

        ref.current.scrollBy({
            left: 300, Behavior: 'smooth'
        })
    }
    const leftScroll = () => {
        ref.current.scrollBy({
            left: -300, behavior: 'smooth'
        })
    }
    useEffect(() => {
        const cardSliding = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('dealcard-sliding')
                }
            })
        }
        const observer = new IntersectionObserver(cardSliding)
        observer.observe(ref.current)
        return () => {
            if (ref.current) {
                observer.unobserve(ref.current)
            }
        }
    })
    return (
        <div className='4xl:max-w-[1400px] 4xl:mx-auto w-full flex items-start lg:items-center flex-col' >
            <div className=' w-[90%] lg:w-[80%] xl:w-[72%] flex flex-col lg:items-center gap-6 py-4 4xl:w-[55%]'>
                <h2 className='leading-[54px] xsm:leading-[38px] text-[38px] md:text-[48px] font-[volkhov] font-bold'>Exclusive <span className='text-[#FA7436]'> deals & discounts </span>
                </h2>
                <p className='lg:w-[65%] md:w-full text-[#666666] text-start lg:text-center font-normal text-[18px] font-[primary-poppins] leading-[26px]'>Discover our fantastic early booking discounts & start planning your journey.
                </p>
            </div>
            <div className="flex CardSection w-full my-[16px] overflow-x-auto scroll-smooth gap-0 sm:gap-[18px]" ref={ref}>
                <DealCard image={image1} cName="Madrid" cRating="4.8" cLocation="spain" cCutPrice="$950" cPrice="$850" />
                <DealCard image={image3} cName="Paris" cRating="4.4" cLocation="France" cCutPrice="$699" cPrice="$599" />
                <DealCard image={image4} cName="London" cRating="4.8" cLocation="UK" cCutPrice="$850" cPrice="$850" />
                <DealCard image={image5} cName="spain" cRating="4.8" cLocation="UK" cCutPrice="$850" cPrice="$850" />
                <DealCard image={image6} cName="Turkey" cRating="4.8" cLocation="UK" cCutPrice="$850" cPrice="$850" />
                <DealCard image={image7} cName="Kashmir" cRating="4.8" cLocation="UK" cCutPrice="$850" cPrice="$850" />
                <DealCard image={image4} cName="London" cRating="4.8" cLocation="UK" cCutPrice="$850" cPrice="$850" />
                <DealCard image={image3} cName="Paris" cRating="4.4" cLocation="France" cCutPrice="$699" cPrice="$599" />
                <DealCard image={image3} cName="Paris" cRating="4.4" cLocation="France" cCutPrice="$699" cPrice="$599" />
            </div>
            <div className="w-full flex justify-center items-center gap-2 ">
                <button className={` hover:bg-[#FA7436] w-[42px] h-[42px] rounded-3xl border-gray-300 flex justify-center items-center border-2 *:
                ${activeBtn === 'left' ? 'bg-[#FA7436]' : 'bg-transparent hover:bg-[#FA7436]'
                    }
                `} onClick={() => {
                        leftScroll()
                        setActiveBtn('left')
                    }} >
                    <FiArrowLeft className={`size-6 hover:text-white text-gray-600 ${activeBtn === 'left' ? 'text-white' : 'text-gray-600 hover:text-white'}`} />
                </button>
                <button className={` w-[42px] h-[42px] hover:bg-[#FA7436] rounded-3xl border-gray-300 flex justify-center items-center border-2 
                
                ${activeBtn === 'right' ? 'bg-[#FA7436]' : 'bg-transparent hover:bg-[#FA7436]'

                    }`} onClick={() => {
                        rightScroll()
                        setActiveBtn('right')
                    }}>
                    <FiArrowRight className={` size-6 hover:text-white text-gray-600 ${activeBtn === 'right' ? 'text-white' : 'text-gray-600 hover:text-white'}`} />
                </button>
            </div>
        </div>
    )
}

export default Deals