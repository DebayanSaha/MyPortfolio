import { useGSAP } from '@gsap/react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React, { useRef, useState } from 'react'
import 'remixicon/fonts/remixicon.css'

gsap.registerPlugin(ScrollTrigger)

const Page4 = () => {
    const [index, setIndex] = useState(0);
    const handleNext=()=>{
        setIndex((prev)=>(prev+1) % project.length)
    }
    const handlePrev=()=>{
        setIndex((prev)=>prev===0?project.length-1:prev-1)
    }

    const project=[
        {
            path:"/vids/reviIntro.mp4",
            name:"REVI AI",
            link:"https://reviai0.netlify.app/",
        },
        {
            path:"/vids/intern4.mp4",
            name:"Kickload",
            link:"https://github.com/DebayanSaha/ViteKickloadProduction",
        }, 
        {
            path:"/vids/k72vid.mp4",
            name:"K72 Clone",
            link:"https://k72-5oux.onrender.com",
        },
        {
            path:"/vids/MagmaVid.mp4",
            name:"MAGMA",
            link:"https://magma-lake.vercel.app/",
        },  
        {
            path:"/vids/netflix.mp4",
            name:"Fletmirror",
            link:"https://github.com/DebayanSaha/ViteKickloadProduction",
        }
    ]
    const page4Ref = useRef(null)
    const titleRef = useRef(null)
    
    useGSAP(function(){
        const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: page4Ref.current,
                    start: "top 100%",
                    end: "bottom 60%",
                    scrub: false,
                }
        })
        tl.from(page4Ref.current, {
            opacity: 0,
            y: 150,
            scale: 0.95,
            duration: 1.3,
            ease: "power2.out",
        })
        tl.fromTo(titleRef.current,
            {y:100, opacity: 0 },
            {y: 0, opacity: 1, duration: 0.8, ease: "power2.out"}
        )
    })
  return (
    <>
        <div ref={page4Ref} id='work' className='h-screen*2 w-full lg:p-4 p-2 bg-black lg:mt-10 mt-5'>
            <div className='relative lg:h-[40vw] h-[55vw] rounded-4xl bg-white lg:p-3.5 p-2'>
                <div className='relative h-full w-full rounded-[20px] overflow-hidden'>
                    <video autoPlay loop muted className=' absolute object-cover' src="/vids/work.mp4"></video>
                    <div ref={titleRef} className='relative lg:mt-[12vw] mt-15 '>
                        <h1 className='text-center font-[A] lg:text-[20vw] text-[30vw] uppercase text-white leading-2.5 '>My</h1>
                        <h1 className='text-center font-[A] lg:text-[20vw] text-[30vw] uppercase text-white'>Works</h1>
                    </div>
                </div>               
            </div>
            <div className='relative lg:h-[45vw] h-[75vw] p-3.5 mt-5 rounded-[20px] flex items-center justify-center overflow-hidden'>
                <i onClick={handleNext} className="absolute z-12 right-0 lg:text-3xl text-2xl ri-arrow-right-s-line cursor-pointer"></i>
                <i onClick={handlePrev} className="absolute z-12 left-0 lg:text-3xl text-2xl ri-arrow-left-s-line cursor-pointer"></i>
                <div className='absolute lg:top-40 top-5 lg:right-40 right-5 lg:h-50 h-20 w-20 lg:w-50 border-2 border-[#9a9a9a38] shadow-2xl shadow-[#9a9a9a38] lg:rounded-4xl rounded-2xl z-11 flex items-center justify-center'>
                    <i onClick={()=>window.open(project[index].link,"_blank")} className="cursor-pointer lg:text-[30vh] text-[10vh] ri-arrow-right-up-line"></i>
                </div>  
                <AnimatePresence mode='wait'>
                    <motion.div key={index}
                    initial={{ opacity: 0 , x:100 , scale: 0.9 }} animate={{ opacity: 1 , x: 0, scale: 1 }} exit={{ opacity: 0 , x:-100, scale: 0.9 }}
                    transition={{ duration: 1, ease: "easeInOut" }} className='relative h-full w-full flex items-center justify-center'>
                        <img className='absolute lg:h-[93vh] z-10' src="/background/astroSmall.webp" alt="" />
                        <h1 className='absolute font-[E] lg:bottom-25 bottom-10 leading-0 lg:text-[14vw] text-[15vw] uppercase z-11'>{project[index].name}</h1>
                        <div className='absolute lg:top-17 top-8 lg:h-[27vw] h-[39vw] w-[37vw] lg:w-[27vw] rounded-full overflow-hidden'>
                            <video className='h-full w-full object-cover' autoPlay muted loop src={project[index].path}></video>
                        </div> 
                    </motion.div>
                </AnimatePresence>               
            </div>
        </div>
    </>     
  )
}

export default Page4