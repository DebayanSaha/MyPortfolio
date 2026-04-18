import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React, { useRef } from 'react'

gsap.registerPlugin(ScrollTrigger)

const Page3 = () => {
    const page3Ref = useRef(null)
    const h1Ref = useRef(null)
    const h2Ref = useRef(null)
    const img1Ref = useRef(null)

    useGSAP(function(){
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: page3Ref.current,
                start: "top 80%",
                end: "bottom 60%",
                scrub: false,
            }
        })
        tl.from(page3Ref.current, {
            opacity: 0,
            y: 150,
            scale: 0.95,
            duration: 1.3,
            ease: "power2.out",
        })
        tl.fromTo(h1Ref.current,
            {x:-100, opacity: 0 },
            {x: 0, opacity: 1, duration: 0.8, ease: "power2.out"}
        )
        tl.fromTo(img1Ref.current,
            {x:100, opacity: 0 },
            {x: 0, opacity: 1, duration: 0.8, ease: "power2.out"},"-=1"
        )
        tl.fromTo(h2Ref.current.children, 
            {x:-100, opacity: 0 },
            {x: 0, opacity: 1, duration: 0.8, stagger:0.2, ease: "power2.out"},"-=1"
        )
    })
  return (
    <>
    <div ref={page3Ref} id='about' className='h-screen  w-full lg:p-4 p-2 bg-white lg:mt-10'>
            <div className='relative lg:h-[45vw] h-full overflow-hidden'>
                <video autoPlay loop muted className='absolute  w-full h-full object-cover rounded-[30px]' src="/vids/earthBG.mp4"></video>
                <div className='absolute lg:h-[45vw] right-0 bottom-0'>
                    {/* <img ref={img1Ref} className='h-full rounded-[30px]' src="/background/astro3.webp" alt="" /> */}
                    {/* <video autoPlay loop muted className='z-9999' src="vids/MOON.mov"></video> */}
                </div>
                <div className='relative h-full lg:w-1/2 lg:p-4 p-2 flex flex-col lg:justify-center justify-start lg:mt-0 mt-20'>
                    <h1 ref={h1Ref} className='text-center font-[A] lg:text-[15vw] text-[30vw] uppercase text-white lg:leading-[16vw] leading-[20vw]'>About me</h1>
                    <div ref={h2Ref} className='h-40 w-full text-center'>
                        <h2 className='font-[B] text-[22px] lg:leading-[1.5vw] mb-2 uppercase'>B.Tech in Computer Science and Engineering</h2> 
                        <h2 className='font-[B] text-[20px] uppercase'>21+ | Kolkata, West Bengal | India</h2>
                        <div className='h-30 lg:w-[80%] w-[90%] lg:mt-3 mt-5 mx-auto '>
                            <h3 className='font-[B] text-[20px] lg:text-[#9A9A9A] text-[#e0e0e0] leading-tight'>" I’m Debayan Saha — a full-stack architect from Kolkata located in West Bengal, India turning complexity into clarity. From backend logic to pixel-perfect UI, I craft scalable, human-centered systems that move fast, feel right, and endure. "</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Page3