import React, { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import TiltText from '../components/intro-page/TiltText'

gsap.registerPlugin(ScrollTrigger)

const Page1 = () => {

  const tiltRef = useRef(null)
  const introRef = useRef(null)
  const bottomTextRef = useRef(null)
  const bannerRef = useRef(null)

  const [xVal, setXVal] = useState(0)
  const [yVal, setYVal] = useState(0)

  // Mouse tilt animation 
  useGSAP(() => {
    gsap.to(tiltRef.current, {
      transform: `rotateX(${yVal}deg) rotateY(${xVal}deg)`,
      duration: 2,
      ease: 'power4.out'
    })
  }, [xVal, yVal])

  // MASTER TIMELINE
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: introRef.current,
        start: "top 80%",
        end: "bottom 60%",
        scrub: false,
      }
    })

    //  Page fade-in
    tl.from(introRef.current, {
      opacity: 0,
      y: 150,
      scale: 0.95,
      duration: 1.3,
      ease: "power2.out",
    })

    // TiltText entry
    tl.from(tiltRef.current, {
      x: -120,
      opacity: 0,
      duration: 1.5,
      ease: "power3.out"
    }, "-=0.8")

    // Bottom text (h2 + h3)
    tl.from(bottomTextRef.current.children, {
      x: -100,
      opacity: 0,
      duration: 1.2,
      stagger: 0.2,
      ease: "power3.out"
    }, "-=1")

    // Banner rotation 
    gsap.to(bannerRef.current.querySelectorAll("img"), {
      rotate: 360,
      duration: 5,
      repeat: -1,
      ease: "linear"
    })
  })

  const mouseMoving = (e) => {
    const rect = tiltRef.current.getBoundingClientRect()
    setXVal((e.clientX - rect.x - rect.width / 2) / 70)
    setYVal((e.clientY - rect.y - rect.height / 2) / 10)
  }
  
  return (
    <div onMouseMove={mouseMoving} ref={introRef} className='h-screen lg:p-4 px-1.5 py-2 bg-white relative'>
      <div id='page1-in'
        className='shadow-xl shadow-zinc-500 relative py-10 lg:px-20 px-4 h-full w-full bg-cover lg:bg-[url(/background/bg1.webp)] bg-[url(/background/bg3.webp)] rounded-[30px]'>
        <TiltText abc={tiltRef} />

        <div className='absolute left-0 bottom-0 lg:py-15 p-4 lg:px-16 h-40 w-full flex items-end justify-between'>
          <div ref={bottomTextRef}>
            <h2 className='lg:text-[20px] font-[B]'>debayans682@gmail.com | 8617262208</h2>
            <h3 className='lg:text-[18px] font-[D] lg:text-gray-400 text-gray-200 uppercase'>
              Website Design & Development
            </h3>
          </div>

          <div ref={bannerRef} id='banner'>
            <img className='lg:h-25 mb-5' src="/logo/10+.webp" />
            <img className='lg:h-25' src="/logo/5+.webp" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page1
