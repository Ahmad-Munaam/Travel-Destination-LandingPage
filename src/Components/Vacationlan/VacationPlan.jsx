import React, { useRef, useState } from 'react'

import element from '../../assets/images/vacationImages/Element.png'
import { FiArrowRight } from "react-icons/fi";
import { FiArrowLeft } from "react-icons/fi";
import Vcard from './vCards/Vcard';
import image1 from '../../assets/images/vacationImages/8-eurail-getty.jpg'
import image2 from '../../assets/images/vacationImages/1694161256545.png'
import image3 from '../../assets/images/vacationImages/A-Guide-to-Hiking-Lauterbrunnens-Waterfalls-4-1024x683.jpg'
import image4 from '../../assets/images/vacationImages/iguazu-falls-argentina-brazil-2-MOSTBEAUTIFUL0921-aec01087d3e74265958dee0b09061661.jpg'
import image5 from '../../assets/images/vacationImages/images.jpeg'
import image6 from '../../assets/images/vacationImages/Kirkjufell-volcano.jpg'
import image7 from '../../assets/images/vacationImages/scenic-sunrise-above-bagan-in-myanmar-royalty-free-image-1658261755.jpg'
import image8 from '../../assets/images/vacationImages/zhangye-danxia-geopark-china.webp'

const VacationPlan = () => {
    const [activeBtn, setActiveBtn] = useState(null);
    const ref = useRef()
    const leftMove = () => {
        ref.current.scrollBy({
            left: 300,
            behavior: 'smooth'
        })
    }
    const rightMove = () => {
        ref.current.scrollBy({
            left: -300,
            behavior: 'smooth'
        })
    }
    return (
        <div className='4xl:max-w-[1400px] 4xl:mx-auto w-full flex flex-col lg:items-center my-[12px]'>
            <div className=' lg:w-[70%] flex justify-center relative'>
                <div className='w-full md:w-[70%] xl:w-[73%] 4xl:w-[60%] flex flex-col justify-center items-start md:items-center gap-5'>
                    <img src={element} alt="" className='md:block hidden absolute right-0 4xl:right-[10%] top-0' />
                    <h2 className=' font-[volkov] text-[38px] leading-[32px] sm:text-[48px] font-bold'>
                        Best <span className='text-[#FA7436]'>vacation plan</span>
                    </h2>
                    <p className='py-[14px] md:w-[88%] lg:w-full  xl:w-[93%]  4xl:w-[88%] text-[#666666] font-[primary-poppins] sm:text-start md:text-center font-normal leading-[24px]'>Plan your perfect vacation with our travel agency. Choose among hundreds of all-inclusive offers!</p>
                </div>
            </div>
            <div className=' w-full flex justify-end gap-3'>
                <button className={`w-[42px] h-[42px] hover:bg-[#FA7436] rounded-3xl border-gray-300 flex justify-center items-center border-2 ${activeBtn === 'left' ? 'bg-[#FA7436]' : 'bg-transparent hover:bg-[#FA7436]'
                    }`} onClick={() => {
                        rightMove()
                        setActiveBtn('left')

                    }}>
                    <FiArrowLeft className={` size-6 hover:text-white text-gray-600 ${activeBtn === 'left' ? 'text-white' : 'text-gray-600 hover:text-white'}`} />
                </button>
                <button className={` w-[42px] h-[42px] hover:bg-[#FA7436] rounded-3xl border-gray-300 flex justify-center items-center border-2 ${activeBtn === 'right' ? 'bg-[#FA7436]' : 'bg-transparent hover:bg-[#FA7436]'
                    }`} onClick={() => {
                        leftMove()
                        setActiveBtn('right')

                    }}>
                    <FiArrowRight className={` size-6 hover:text-white text-gray-600 ${activeBtn === 'right' ? 'text-white' : 'text-gray-600 hover:text-white'} `} />
                </button>
            </div>
            <div className="flex w-full overflow-x-auto flex-shrink-0 my-2 gap-6" ref={ref}>
                <Vcard
                    image={image1}
                    vName='Rome, Italty'
                    price='$5,42k'
                    trip='10 Days Trip'
                    rating='4.8'
                />
                <Vcard
                    image={image2}
                    vName='London,UK'
                    price='$2,42k'
                    trip='7 Days Trip'
                    rating='4.7'
                />
                <Vcard
                    image={image3}
                    vName='OSAKA,JAPAN'
                    price='$5,42k'
                    trip='10 Days Trip'
                    rating='4.8'
                />
                <Vcard
                    image={image4}
                    vName='Lahore, PK'
                    price='$5,42k'
                    trip='10 Days Trip'
                    rating='4.8'
                />
                <Vcard
                    image={image5}
                    vName='Rome, Italty'
                    price='$5,42k'
                    trip='10 Days Trip'
                    rating='4.8'
                />
                <Vcard
                    image={image6}
                    vName='Rome, Italty'
                    price='$5,42k'
                    trip='10 Days Trip'
                    rating='4.8'
                />
                <Vcard
                    image={image7}
                    vName='Rome, Italty'
                    price='$5,42k'
                    trip='10 Days Trip'
                    rating='4.8'
                />
                <Vcard
                    image={image8}
                    vName='Rome, Italty'
                    price='$5,42k'
                    trip='10 Days Trip'
                    rating='4.8'
                />
                <Vcard
                    image={image2}
                    vName='Rome, Italty'
                    price='$5,42k'
                    trip='10 Days Trip'
                    rating='4.8'
                />
            </div>
        </div>
    )
}
export default VacationPlan