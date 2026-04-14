import React, { useEffect, useRef } from 'react'
import { useState } from 'react';
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import headerLogo from '../../assets/images/Logo.png'
import '../../../src/App.css'
const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const ref=useRef()
    useEffect(()=>{

        const headerCallBack=(entries)=>{
            entries.forEach(entry=>{
                if(entry.isIntersecting){
                    entry.target.classList.add('header-animation')
                }
            })
        }
        const observer=new IntersectionObserver(headerCallBack)
        observer.observe(ref.current)
        return ()=>{
            if(ref.current){
                observer.unobserve(ref.current)
            }
        }
    },[])
    

    return (
        <div className="mainHeader relative z-[9999]" ref={ref}>
            <header className="w-full h-[114px] flex justify-center items-center">
                <nav className="4xl:max-w-[1400px] w-[80%] lg:w-[90%] lg:mx-[10%] xl:mx-[15%]  flex justify-between items-center">
                    <div>
                        <img src={headerLogo} alt="Logo" className="object-contain w-[120px]" />
                    </div>
                    <div className="hidden lg:flex font-[primary-poppins] font-normal items-center gap-x-[32px] text-[16px]">
                        <span className="cursor-pointer hover:text-[#FA7436]">Home</span>
                        <span className="cursor-pointer hover:text-[#FA7436]">About</span>
                        <span className="cursor-pointer hover:text-[#FA7436]">Destination</span>
                        <span className="cursor-pointer hover:text-[#FA7436]">Tour</span>
                        <span className="cursor-pointer hover:text-[#FA7436]">Blog</span>
                    </div>
                    <div className="hidden lg:flex text-[16px] font-[primary-poppins] font-semibold gap-x-[56px]">
                        <button className="text-[#FD8D3A] hover:text-orange-600">Login</button>
                        <button className="py-[8px] btn-color text-white rounded-md px-[28px] hover:bg-orange-600 transition shadow-lg shadow-orange-200 text-[16px] font-semibold">
                            Sign Up
                        </button>
                    </div>
                    <div className="lg:hidden">
                        {isMenuOpen ? (
                            <HiX
                                size={28}
                                className="cursor-pointer text-[#FA7436]"
                                onClick={() => setIsMenuOpen(false)} />
                        ) : (
                            <HiOutlineMenuAlt3
                                size={28}
                                className="cursor-pointer text-[#FA7436]"
                                onClick={() => setIsMenuOpen(true)}
                            />
                        )}
                    </div>
                </nav>
                {isMenuOpen && (
                    <div className="absolute top-[114px] left-0 w-full bg-white shadow-md flex flex-col items-center gap-4 py-6 z-[9999] lg:hidden">
                        <span className="cursor-pointer hover:text-[#FA7436]">Home</span>
                        <span className="cursor-pointer hover:text-[#FA7436]" >About</span>
                        <span className="cursor-pointer hover:text-[#FA7436]">Destination</span>
                        <span className="cursor-pointer hover:text-[#FA7436]" >Tour</span>
                        <span className="cursor-pointer hover:text-[#FA7436]" >Blog</span>
                        <div className="flex flex-col gap-3 mt-4">
                            <button className="text-[#FD8D3A] hover:text-orange-600">Login</button>
                            <button className="py-[8px] bg-[#FA7436] text-white rounded-md px-[28px] hover:bg-orange-600 transition">
                                Sign Up
                            </button>
                        </div>
                    </div>
                )}
            </header>
        </div>
    )
}

export default Header