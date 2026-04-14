import React, { useRef, useEffect } from 'react'
import '../../../src/App.css'
import Card from './BlogCard/Card'
import blogsArray from './BlogCard/Data.json'
const Blogs = () => {
  const ref = useRef()
  const ref2 = useRef(null)
  const leftMove = (move) => {
    if (move === "left") {
      ref.current.scrollBy({
        left: 300, behavior: 'smooth'
      })
    }
    else {
      ref.current.scrollBy({
        left: -300, behavior: 'smooth'
      })
    }
  }
  useEffect(() => {
    const callback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('blogs-textanimation')
          console.log("cards done hain yr")
        }
      })
    }
    const observer = new IntersectionObserver(callback)
    observer.observe(ref2.current)
    return () => {
      if (ref2.current != null) {
        observer.unobserve(ref2.current)
      }
    }
  }, [])
  return (
    <div className='4xl:max-w-[1400px] 4xl:mx-auto w-full flex flex-col'>
      <div className='one w-full flex justify-center ' ref={ref2}>
        <h2 className=' text-[38px] md:text-[48px] font-[volkhov] font-bold text-[#000000]'>
          Get update with  <span className=' text-[#FA7436]'>latest blog
          </span>
        </h2>
      </div>
      <div className="two w-full flex overflow-x-auto gap-4 scroll-smooth" ref={ref}>
        {
          blogsArray.map((value, index) => {
            return (<Card key={index} value={value} />)
          })
        }
      </div>
      <div className="my-[18px] scrolling w-full flex justify-center gap-2">
        <span className=' w-[14px] h-[14px] hover:w-[16px] hover:h-[16px] rounded-2xl bg-[#E5E5E5] hover:bg-[#FA7436] cursor-pointer' onClick={() => { leftMove("Right") }}> </span>
        <span className=' w-[16px] h-[16px] rounded-2xl btn-color'>
        </span>
        <span className={` w-[14px] h-[14px] hover:w-[16px] hover:h-[16px] rounded-2xl bg-[#E5E5E5] hover:bg-[#FA7436] cursor-pointer`} onClick={() => { leftMove("left") }}> </span>
      </div>
    </div>
  )
}
export default Blogs