import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React, { useRef } from 'react'

gsap.registerPlugin(ScrollTrigger);

const Page2 = () => {
    
    const innerRef = useRef(null);
    
    useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {

        // run animation ONLY on large screens
        gsap.from('.rotateText', {
            rotateX: -80,
            opacity: 0,
            duration: 2,
            stagger: 4,
            scrollTrigger: {
                trigger: '.rotateText',
                start: 'top 60%',
                end: 'top -200%',
                scrub: 3
            }
        });
    });
    }, []);

    useGSAP(function(){

        const totalWidth = innerRef.current.scrollWidth / 2;

        gsap.to(innerRef.current,{
            x:-totalWidth,
            duration:12,
            ease:"none",
            repeat:-1
        })
    },[])

  return (
    <div id='section2' className=' bg-white text-black lg:p-5 lg:mt-0 mt-15 text-center overflow-hidden'>
        <h3 className='text-gray-500 font-[D] text-xl'>© DevSpace | Debayan Saha Portfolio 2025</h3>
        <div className='rotateText mt-10'>
            <h1 className='font-[A] lg:text-[42vw] text-[45vw] leading-[35vw]'>IMPACTFUL</h1>
        </div>
        <div className='rotateText'>
            <h1 className='font-[A] lg:text-[42vw] text-[45vw] leading-[35vw]'>DESIGN</h1>
        </div>
        <div className='rotateText'>
            <h1 className='font-[A] lg:text-[42vw] text-[45vw] leading-[35vw]'>IS THE</h1>
        </div>
        <div className='rotateText'>
            <h1 className='font-[A] lg:text-[42vw] text-[45vw] leading-[35vw]'>DESIGN</h1>
        </div>
        <div className='rotateText'>
            <h1 className='font-[A] lg:text-[42vw] text-[45vw] leading-[35vw]'>THAT</h1>
        </div>
        <div className='rotateText'>
            <h1 className='font-[A] lg:text-[42vw] text-[45vw] leading-[35vw]'>WORKS!</h1>
        </div>

        <div className='lg:mt-8 lg:h-45 h-30 w-full overflow-hidden'>
            <div ref={innerRef} className='h-full w-full flex flex-row no-wrap'>
                <img src="/logo/MERN.webp" alt="" />
                <img src="/logo/js.webp" alt="" />
                <img src="/logo/java.webp" alt="" />
                <img src="/logo/tailwind.webp" alt="" />
                <img src="/logo/framer.webp" alt="" />
                <img src="/logo/gsap.webp" alt="" />
                <img src="/logo/html.webp" alt="" />
                <img src="/logo/css.webp" alt="" />
                <img src="/logo/Figma.webp" alt="" />

                <img src="/logo/MERN.webp" alt="" />
                <img src="/logo/js.webp" alt="" />
                <img src="/logo/java.webp" alt="" />
                <img src="/logo/tailwind.webp" alt="" />
                <img src="/logo/framer.webp" alt="" />
                <img src="/logo/gsap.webp" alt="" />
                <img src="/logo/html.webp" alt="" />
                <img src="/logo/css.webp" alt="" />
                <img src="/logo/Figma.webp" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Page2