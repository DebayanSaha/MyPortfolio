import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef } from 'react'
import 'remixicon/fonts/remixicon.css'

const NavBar = ({onClose}) => {
  const navRef = useRef(null)
 
  useGSAP(function(){
    gsap.from(navRef.current,{
      x:"100%",
      duration:0.8,
      ease: 'power2.out'
    })
  })
  const handleOnClose=()=>{
    gsap.to(navRef.current,{
      x:"100%",
      duration:0.8,
      ease: 'power2.in',
      onComplete:onClose
    })
  }
  const handleNavClick=(sectionId)=>{
    const target=document.getElementById(sectionId)
    if(target){
      target.scrollIntoView({behavior:'smooth'})
    }
  }
  return (
    <div ref={navRef} className='fixed inset-0 flex justify-end z-20'>
        <div className='relative h-screen lg:w-1/2 w-[85%] bg-black lg:py-10 py-4 lg:px-15 px-5 '>
          <i onClick={handleOnClose} className="absolute ri-close-large-line text-5xl right-10 hover:rotate-90 transition-transform duration-400 cursor-pointer"></i>
          <div className='h-[75%] w-full lg:py-10 py-25'>
            <h1 onClick={()=>handleNavClick('home')} className='font-[G] lg:text-7xl text-5xl mt-2 uppercase cursor-pointer hover:text-[#F15039] transition-transform'>Home</h1>
            <h1 onClick={()=>handleNavClick('about')} className='font-[G] lg:text-7xl text-5xl mt-2 uppercase cursor-pointer hover:text-[#F15039] transition-transform'>About</h1>
            <h1 onClick={()=>handleNavClick('impact')} className='font-[G] lg:text-7xl text-5xl mt-2 uppercase cursor-pointer hover:text-[#F15039] transition-transform'>Impact</h1>
            <h1 onClick={()=>handleNavClick('work')} className='font-[G] lg:text-7xl text-5xl mt-2 uppercase cursor-pointer hover:text-[#F15039] transition-transform'>Work</h1>
            <h1 onClick={()=>handleNavClick('contact')} className='font-[G] lg:text-7xl text-5xl mt-2 uppercase cursor-pointer hover:text-[#F15039] transition-transform'>Contact</h1>
          </div>
          <div className='lg:h-50 w-full flex lg:justify-between lg:items-center lg:pr-10' >
            <div>
              <h2 className='font-[D]  lg:text-[1.3vw] text-[#afaeaedd] uppercase'>E-mail</h2>
              <h1 className='font-[D]  lg:text-[1.3vw] text-[#d3d3d3]'> debayansaha682@gmail.com </h1>
            </div>
            <div className='h-10 lg:w-[20%] lg:relative absolute lg:bottom-1 bottom-5 flex flex-row gap-8 '>
                <img onClick={()=>window.open('https://www.linkedin.com/in/debayansaha04/', '_blank')} className='hover:h-11 transition-transform duration-400 cursor-pointer' src="/logo/4.webp" alt="" />
                <img onClick={()=>window.open('https://github.com/DebayanSaha', '_blank')} className='hover:h-11 transition-transform duration-400 cursor-pointer' src="/logo/3.webp" alt="" />
                <img onClick={()=>window.open('https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=CllgCJqXPSJDGDfWpRvBvgVXfkNGPzDgMLcqRsfnVhcgPfWCGCsjppsdVpxrlzMnfkhrxbMNGxq', '_blank')} className='hover:h-11 transition-transform duration-400 cursor-pointer' src="/logo/2.webp" alt="" />
            </div> 
          </div>
        </div>
    </div>
  )
}

export default NavBar