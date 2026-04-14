import React, { useEffect, useRef } from 'react'
import manImage from '../../assets/images/HeroImages/manImage.png'
import element from '../../assets/images/HeroImages/Element.png'
import map from '../../assets/images/HeroImages/google-maps1.png'
import star from '../../assets/images/HeroImages/star1.png'
import LeftCard from './HeroCards/LeftCard'
import RightCard from './HeroCards/RightCard'
import Footer from './HeroCards/Footer/Footer'
import LeftBottomCard from './HeroCards/LeftBottomCard'
const Hero = () => {
    const ref = useRef()
    const ref2 = useRef()
    useEffect(() => {
        const heroCallback = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('hero-men-animation')
                }
            })
        }
        const observer = new IntersectionObserver(heroCallback, {
            threshold: 0.2
        })
        observer.observe(ref.current)
        return () => {
            if (ref.current) {
                observer.unobserve(ref.current)
            }
        }
    }, [])
    useEffect(() => {
        const heroCallback = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('hero-content-animation')
                }
            })
        }
        const observer = new IntersectionObserver(heroCallback, {
            threshold: 0.2
        })
        observer.observe(ref2.current)
        return () => {
            if (ref2.current) {
                observer.unobserve(ref2.current)
            }
        }
    }, [])
    return (
        <div className=' 4xl:max-w-[1400px] 4xl:mx-auto  relative'>
            <div className="z-30 grid grid-cols-1  lg:w-full xl:grid lg:grid-cols-[52%_1%_47%] xl:grid-cols-2 xl:justify-cente relativer gap-3 4xl:gap-0">
             <img src={element} alt="image" className="lg:block hidden 4xl:w-[70%] 3xl:right-[-10%] top-[-8%] absolute z-[100%] object-contain 3xl:w-[63%] w-[53%] lg:w-[60%]  right-[-3%]" />

                <div className="xl:order-1 w-[85%] lg:mt-0 mt-[64px] order-2 lg:order-1 lg:w-[95%] xl:w-full one flex flex-col items-start xl:justify-center lg:justify-between gap-y-[10px] xl:gap-y-[32px] py-8" ref={ref2}>

                    <h1 className='4xl:w-[90%] text-[36px] md:text-[48px] lg:text-[42px] 3xl:text-[64px] xl:text-[48px] text-[#222222] font-[volkhov] font-bold leading-[42px] md:leading-[58px] lg:leading-[58px] lg:w-[89%] xl:w-[87%] 3xl:w-full 3xl:leading-[70px] xl:tracking-[0%]'>

                        Get started your exciting <span className=' text-[#FA7436]'>
                            journey </span>with us. </h1>

                    <p className='lg:w-[80%] xl:w-[80%] text-[#666666] lg:text-[16px] xl:text-[20px] font-[primary-poppins] leading-[24px] md:leading-[32px] lg:leading-[32px] xl:leading-[32px] 3xl:leading-[40px] font-normal tracking-[0%] mb-8'>
                        A Team of experienced tourism professionals will provide you with the best advice and tips for your desire place. </p>


                    <div className='font-[primary-poppins] font-medium text-[18px] border-[#FA7436] border-2 flex justify-center items-center p-3 xl:h-[60px] px-6 text-[#FA7436] rounded-md'>

                        Discover Now
                    </div>
                </div>
                <div className='relative hidden lg:block lg:order-2 xl:hidden w-full h-full'>
                </div>
                <div className="xl:order-2 lg:order-3 order-1 two w-[100%] 4xl:w-[100%] relative box-border h-full" ref={ref}>
                    <img src={manImage} alt="" className=' object-contain z-10 w-full h-full 4xl:w-[90%] ml-auto' />
                    <LeftCard />
                    <RightCard
                        img={map}
                        content="Every cornar of the world with us"
                        heading="Explore"
                        customClass='right-0 top-[46%] '
                    />
                    <LeftBottomCard img={star}
                        heading="27K"
                        content="Customer Reviewd"
                        customClass='4xl:left-[5%] 3xl:left-[-3%] xl:left-[-5%] lg:left-[-7%] bottom-[25%]'
                    />
                </div>

            </div>
            <Footer />
        </div>

    )
}
export default Hero