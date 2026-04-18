import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React, { useRef } from 'react'

const Page6 = () => {
  return (
    <>
        <div  id='contact' className='h-screen lg:bg-white bg-black lg:p-4 p-2'>
            <div  className='relative h-full rounded-[30px] overflow-hidden flex items-center justify-center'>
                <video autoPlay loop muted className='absolute top-0 left-0 object-center object-cover' src="/vids/moon.mp4"></video>
                <h1  className='absolute font-[A] lg:text-[18vw] text-[20vw] top-[35%] lg:top-1/2 -translate-y-1/2 leading-0 uppercase'>START A CONVERSATION.</h1>
                <div  className='absolute lg:h-10 lg:w-[45%] w-[85%] lg:translate-y-32 translate-y-0'>
                    <h2 className='text-center font-[D] lg:text-[1.3vw] text-[#cfcecef0] leading-tight'>"I design and develop modern and impactful full stack websites that seamlessly bridge your goals with needs."</h2>
                </div>
                
                <div className='absolute lg:left-10 left-2 lg:bottom-10 bottom-5 h-20 w-[60%] '>
                    <h1 className='font-[E] lg:text-[1.3vw] text-[#d3d3d3]'> debayansaha682@gmail.com</h1>
                    <h2 className='font-[C] lg:text-[1.1vw] text-[#8d8d8d] leading-3.5'> +91 8617262208 </h2>
                    <h1 className='font-[B] lg:text-[1vw] leading-8 text-[#d3d3d3]'> Kolkata, West Bengal, India</h1>
                </div>
                <div className='head absolute lg:right-10 right-2 lg:bottom-40 bottom-35 lg:h-10 h-8 w-[20%] flex flex-row gap-6 '>
                    <img onClick={()=>window.open('https://www.linkedin.com/in/debayansaha04/', '_blank')} className='hover:h-11 transition-transform duration-400 cursor-pointer' src="/logo/4.webp" alt="" />
                    <img onClick={()=>window.open('https://github.com/DebayanSaha', '_blank')} className='hover:h-11 transition-transform duration-400 cursor-pointer' src="/logo/3.webp" alt="" />
                    <img onClick={()=>window.open('https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=CllgCJqXPSJDGDfWpRvBvgVXfkNGPzDgMLcqRsfnVhcgPfWCGCsjppsdVpxrlzMnfkhrxbMNGxq', '_blank')} className='hover:h-11 transition-transform duration-400 cursor-pointer' src="/logo/2.webp" alt="" />
                </div>
            </div>
        </div>
    </>
  )
}

export default Page6