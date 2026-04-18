import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef } from 'react'

const Page0 = () => {
    const textRef = useRef(null);
    const paraRef =useRef(null);
    const semiTextRef =useRef(null);

    useGSAP(function(){
        const tl = gsap.timeline();

        tl.fromTo(textRef.current,
            {opacity:0}, {opacity:1, delay:2.8, duration:2, ease:"power3.out"}
        )
        .fromTo(semiTextRef.current,
            {x:-100, opacity:0},
            {x:0, opacity:1, duration:1.5, ease:"power3.out",},"-=1"
        )
        .fromTo(paraRef.current,
            {x:100, opacity:0},
            {x:0, opacity:1, duration:1.5, ease:"power3.out"},"-=1"
        )
    })
  return (
    <div id='home'>
        <div className='bg-[#DCDCDC] relative h-screen w-full flex items-center justify-center lg:p-10'>
            <h1 ref={textRef} className='font-[E] text-black text-center absolute text-[20vw] bottom-32 z-11 lg:top-1/2 lg:-translate-y-1/2 lg:bottom-auto'>DEV <span className='text-stroke-white'>SP</span>ACE</h1>
            <div className='absolute left-1/2 -translate-x-1/2 lg:top-13 top-5 w-[90vw] lg:max-w-[29.2vw] z-10'>
                <img className='h-full object-contain object-center' src="/landingPage/DEBAYAN SAHA.webp" alt="" />
            </div>
            <div ref={paraRef} className='absolute lg:h-60 h-27 lg:w-[35vw] z-12 lg:right-0 lg:top-[32vw] bottom-0 w-[] lg:p-8 p-2'>
                <p className='font-[B] text-[#505050] lg:text-[18px] text-[13px] '>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" Welcome to <span className='text-[#F15039] font-[E]'>Dev Space</span>, a portfolio built for tomorrow.  An idea featuring space and future.
                    <span className='text-[#F15039] '>Every element here reflects my obsession with design, motion, and futuristic storytelling.</span>"
                </p>
            </div>
            <h1 ref={semiTextRef} className='absolute font-[C] text-[#767676] lg:text-[1.8vw] lg:left-10 left-2 lg:top-[33vw] bottom-32'>@By Debayan Saha</h1>
        </div>
    </div>
  )
}

export default Page0