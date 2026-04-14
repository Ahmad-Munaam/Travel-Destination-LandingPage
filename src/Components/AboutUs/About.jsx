import React, { useEffect, useState } from 'react'
import { FiArrowLeft } from "react-icons/fi";
import { FiArrowRight } from "react-icons/fi";
import aboutData from './Cards.json'
import '../../../src/styles/custom.css'

import element from '../../assets/images/aboutImages/Element.png'
import '../../../src/App.css'
import Card from './Card';
const About = () => {
    const [activeBtn, setActiveBtn] = useState(null);

    const [frontIndex, setFrontIndex] = useState(0)
    useEffect(() => {
        const card1 = document.querySelector('.card1')
        const aboutCallback = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // entry.target.classList.remove('about-animation')
                    // void card1.offsetWidth
                    entry.target.classList.add('about-animation')
                    console.log("done")
                }
            })
        }
        const aboutObserver = new IntersectionObserver(aboutCallback, {
            threshold: 0.2
        })
        aboutObserver.observe(card1)
        return () => aboutObserver.unobserve(card1)
    }, [])
    return (
        <>
            <div className='4xl:max-w-[1400px] 4xl:mx-auto  flex flex-col sm:gap-0 gap-4 sm:grid grid-cols-2 lg:grid-cols-[40%_50%_10%] relative'>
                <div className=' flex flex-col items-start'>
                    <div className=' w-[90%] flex flex-col gap-2'>
                        <h2 className='text-[#222222] text-[48px] font-bold leading-[54px] font-[volkhov]'>What people say <span className='text-[#FA7436]'>about us.</span></h2>
                        <p className='4xl:w-[80%] font-[roboto] text-[#666666] text-[16px] leading-[32px] font-normal '>Our Clients send us bunch of smilies with our services and we love them.</p>
                        <div className="hidden w-full sm:flex justify-start items-center gap-[32px] ">
                            <button
                                className={`w-[42px] h-[42px] rounded-3xl border-gray-300 flex justify-center items-center border-2 transition-colors duration-300 ${activeBtn === 'left' ? 'bg-[#FA7436]' : 'bg-transparent hover:bg-[#FA7436]'
                                    }`}
                                onClick={() => {
                                    if (frontIndex > 0) {
                                        setFrontIndex(frontIndex - 1);
                                        setActiveBtn('left');
                                        const addTransition = document.querySelector('.about-special-cards');
                                        addTransition.classList.remove('card-transition');
                                        void addTransition.offsetWidth;
                                        addTransition.classList.add('card-transition');
                                    }
                                }}
                            >
                                <FiArrowLeft className={`size-6 ${activeBtn === 'left' ? 'text-white' : 'text-gray-600 hover:text-white'}`} />
                            </button>

                            <button
                                className={`w-[42px] h-[42px] rounded-3xl border-gray-300 flex justify-center items-center border-2 transition-colors duration-300 ${activeBtn === 'right' ? 'bg-[#FA7436]' : 'bg-transparent hover:bg-[#FA7436]'
                                    }`}
                                onClick={() => {
                                    if (frontIndex < aboutData.length - 1) {
                                        setFrontIndex(frontIndex + 1);
                                        setActiveBtn('right');
                                        const addTransition = document.querySelector('.about-special-cards');
                                        addTransition.classList.remove('card-transition');
                                        void addTransition.offsetWidth;
                                        addTransition.classList.add('card-transition');
                                    }
                                }}
                            >
                                <FiArrowRight className={`size-6 ${activeBtn === 'right' ? 'text-white' : 'text-gray-600 hover:text-white'}`} />
                            </button>

                        </div>
                    </div>
                </div>
                <div className='about-special-cards w-full relative flex flex-col justify-start items-center p-2'>
                    <div className=' relative  w-full xsm:h-[300px] sm:h-[500px] md:h-full bg-inherit'>
                        {
                            aboutData.map((value, index) => {
                                return <div key={index} className={`${index === frontIndex ? `about-upper-card opacity-100 ` : `top-[25%] sm:top-[10%] md:top-[35%] about-lower-card lg:top-[40%]`
                                    }`}>
                                    <Card value={value} />
                                </div>
                            })
                        }
                    </div>
                    <div className="relative mt-6 sm:hidden w-full flex justify-center items-center gap-[32px]">

                        <button
                            className={`w-[42px] h-[42px] rounded-3xl border-gray-300 flex justify-center items-center border-2 transition-colors duration-300 ${activeBtn === 'left' ? 'bg-[#FA7436]' : 'bg-transparent hover:bg-[#FA7436]'
                                }`}
                            onClick={() => {
                                if (frontIndex > 0) {
                                    setFrontIndex(frontIndex - 1);
                                    setActiveBtn('left');
                                    const addTransition = document.querySelector('.about-special-cards');
                                    addTransition.classList.remove('card-transition');
                                    void addTransition.offsetWidth;
                                    addTransition.classList.add('card-transition');
                                }
                            }}
                        >
                            <FiArrowLeft className={`size-6 ${activeBtn === 'left' ? 'text-white' : 'text-gray-600 hover:text-white'}`} />
                        </button>

                        <button
                            className={`w-[42px] h-[42px] rounded-3xl border-gray-300 flex justify-center items-center border-2 transition-colors duration-300 ${activeBtn === 'right' ? 'bg-[#FA7436]' : 'bg-transparent hover:bg-[#FA7436]'
                                }`}
                            onClick={() => {
                                if (frontIndex < aboutData.length - 1) {
                                    setFrontIndex(frontIndex + 1);
                                    setActiveBtn('right');
                                    const addTransition = document.querySelector('.about-special-cards');
                                    addTransition.classList.remove('card-transition');
                                    void addTransition.offsetWidth;
                                    addTransition.classList.add('card-transition');
                                }
                            }}
                        >
                            <FiArrowRight className={`size-6 ${activeBtn === 'right' ? 'text-white' : 'text-gray-600 hover:text-white'}`} />
                        </button>

                    </div>
                </div>
                <div className='relative lg:block hidden'>
                </div>
                <img src={element} alt="image" className='lg:block hidden absolute right-0 top-[-15%] size-[148px]' />
            </div>

        </>
    )
}
export default About