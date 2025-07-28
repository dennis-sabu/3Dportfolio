import {useRef, useEffect} from 'react'; 
import { gsap } from 'gsap';

const CustomCursor = () => {
  //create reference for the cursor
  const cursorRef = useRef(null);
  const cursorBorderRef = useRef(null);
  //hide the default cursor
  const isMobile = typeof window !== "undefined" && window.matchMedia("(max-width: 768px)").matches;

  if (isMobile){
    return null;
  }

  useEffect(()=>{
    //get the cursor element
    const cursor = cursorRef.current;
    const cursorBorder = cursorBorderRef.current;

    //initial position of the cursor
    gsap.set([cursor, cursorBorder], {
      x: -50,
      y: -50
    })
    //mouse move event
    const xTo = gsap.quickTo(cursor, "x", {
      duration: 0.2,
      ease: "power3.out"
    })
    const yTo = gsap.quickTo(cursor, "y", {
      duration: 0.2,
      ease: "power3.out"
    })
    const xToBorder = gsap.quickTo(cursorBorder, "x", {
      duration: 0.5,
      ease: "power.out"
    })
    const yToBorder = gsap.quickTo(cursorBorder, "y", {
      duration: 0.5,
      ease: "power3.out"
    })

    //add event listener for mouse move
    const handleMouseMove = (e) => {
      xTo(e.clientX)
      yTo(e.clientY)
      xToBorder(e.clientX)
      yToBorder(e.clientY)
    }
//add event listener for mouse enter and leave
window.addEventListener('mousemove', handleMouseMove);

document.addEventListener("mousedown", ()=> 
  gsap.to([cursor, cursorBorder], {
    scale:0.6,
    duration:0.2,
    ease:"power3.out"
  }))
  document.addEventListener("mouseup", ()=> 
  gsap.to([cursor, cursorBorder], {
    scale:1,
    duration:0.2,
    ease:"power3.out"
  }))
  }, []);

  return (
    <>
    {/* Custom cursor element */}
    <div ref={cursorRef} className='fixed top-0 left-0 w-[20px] h-[20px] bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference'></div>
    <div ref={cursorBorderRef} className='fixed top-0 left-0 w-[40px] h-[40px] border border-white rounded-full pointer-events-none z-[9998] mix-blend-difference opacity-50'></div>
    </>
  )
}

export default CustomCursor