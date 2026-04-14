import React, { useEffect, useRef, useState } from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import logo from '../../../assets/images/Logo.png'
import '../../../../src/App.css'
const FooterInfo = () => {
  const [activeBtn, setActiveBtn] = useState(null);
  const ref = useRef()
  // console.log(ref.current)
  useEffect(() => {
    const child = ref.current.querySelectorAll(':scope > *')
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // console.log(ref.current.querySelectorAll(':scope >*'))
          // entry.target.classList.remove('footer-animation')
          // void entry.target.offsetWidth
          entry.target.classList.add('footer-animation')
          console.log("footer animation done")
        }
      })
    }, {
      threshold: 0.4
    })
    child.forEach(childElement => {
      observer.observe(childElement)
    })
    return () => {
      child.forEach(childElement => {
        observer.unobserve(childElement)
      })
    }
  }, [])
  return (
    <footer className=" pt-16 relative ">
      <div className=" py-[12px] container  grid grid-cols-1 md:grid-cols-[50%_50%] lg:grid-cols-[50%_50%]  lg:gap-10">
        <div className="order-2 md:order-1 md:mt-0 mt-[16px] flex flex-col items-center md:items-start text-center md:text-left gap-6" ref={ref}>
          <img src={logo} alt="image" className=" object-contain" />
          <div className=" flex flex-col items-center md:items-start">
            <p className="leading-[32px] text-sm mb-3 w-full sm:w-[70%] font-[primary-poppins] text-[16px] font-medium text-[#666666]">
              Book your trip in minutes, get full control for much longer.
            </p>
            <div className="flex items-center gap-3">
              {/* Facebook */}
              <a
                href="#"
                onClick={() => setActiveBtn('facebook')}
                className={`w-9 h-9 flex items-center justify-center rounded-full border border-gray-300 transition duration-300 ${activeBtn === 'facebook'
                    ? 'bg-[#FA7436] text-white'
                    : 'bg-transparent text-gray-600 hover:bg-[#FA7436] hover:text-white'
                  }`}
              >
                <FaFacebookF />
              </a>

              {/* Instagram */}
              <a
                href="#"
                onClick={() => setActiveBtn('instagram')}
                className={`w-9 h-9 flex items-center justify-center rounded-full border border-gray-300 transition duration-300 ${activeBtn === 'instagram'
                    ? 'bg-[#FA7436] text-white'
                    : 'bg-transparent text-gray-600 hover:bg-[#FA7436] hover:text-white'
                  }`}
              >
                <FaInstagram />
              </a>

              {/* Twitter */}
              <a
                href="#"
                onClick={() => setActiveBtn('twitter')}
                className={`w-9 h-9 flex items-center justify-center rounded-full border border-gray-300 transition duration-300 ${activeBtn === 'twitter'
                    ? 'bg-[#FA7436] text-white'
                    : 'bg-transparent text-gray-600 hover:bg-[#FA7436] hover:text-white'
                  }`}
              >
                <FaTwitter />
              </a>
            </div>

          </div>
        </div>

        <div className="order-1 md:order-2 grid sm:grid-cols-3 sm:text-center md:text-start">
          <div className=" md:mt-0 mt-[12px]">
            <h3 className="font-semibold text-gray-800 mb-4 font-[primary-poppins]">Company</h3>
            <ul className="space-y-4 text-[14px] text-[#666666] font-[primary-poppins]">
              <li><a href="#">About</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Logistic</a></li>
              <li><a href="#">Privacy & Policy</a></li>
            </ul>
          </div>

          <div className=" md:mt-0 mt-[12px]">
            <h3 className="font-semibold text-gray-800 mb-4 font-[primary-poppins]">Contact</h3>
            <ul className="space-y-4 text-[14px] text-[#666666] font-[primary-poppins]">
              <li><a href="#">Help/FAQ</a></li>
              <li><a href="#">Press</a></li>
              <li><a href="#">Affiliates</a></li>
            </ul>
          </div>


          <div className=" md:mt-0 mt-[12px]">
            <h3 className="font-semibold text-gray-800 mb-4 font-[primary-poppins]">More</h3>
            <ul className="space-y-4 text-[14px] text-[#666666] font-[primary-poppins]">
              <li><a href="#">Press Centre</a></li>
              <li><a href="#">Our Blog</a></li>
              <li><a href="#">Low fare tips</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full h-[2px] rounded-md my-[24px] bg-[#9999998F]"></div>
      <div className="   py-[18px] flex sm:flex-row flex-col sm:gap-0 gap-3 p-[4px] justify-between items-center">
        <div className="text-center text-[#666666] text-[14px] font-[primary-poppins] font-normal">
          Copyright, 2025 Trabook. All rights reserved.
        </div>
        <div className=" text-[#666666] font-[primary-poppins] text-[14px]">
          Terms & Conditions
        </div>
      </div>
    </footer>
  );
};
export default FooterInfo;
