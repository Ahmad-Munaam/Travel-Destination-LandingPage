import React, { useEffect, useRef } from 'react'
import FooterCards from './FooterCards'
const Footer = () => {
    const footerRef=useRef()
   useEffect(() => {
    if (!footerRef.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('footer-animate');
          }
        });
      },
      { threshold: 1 }
    );

    observer.observe(footerRef.current);
    return () => observer.disconnect();
  }, []);
    return (
        <div className="footerAnimateClass mt-[10%] w-full flex justify-center items-center lg:mt-[48px] " ref={footerRef}>
            <div className='py-6 w-[90%] lg:w-[72%] grid grid-cols-2 md:flex md:justify-between md:items-center p-4 px-[2%] rounded-lg shadow-lg lg:gap-0 gap-2'>
                <FooterCards title="Location" body=" where are you going" />
                <FooterCards title="Date" body=" When you will go" />
                <FooterCards title="Guest" body="Number of guest" />
                <button className='hover:bg-orange-500 flex justify-center items-center btn-color p-2 md:p-3 px-[32px] font-[primary-poppins] font-medium text-[#FFFFFF] rounded-md sm:w-[124px]'>Explore</button>
            </div>
        </div>
    )
}
export default Footer