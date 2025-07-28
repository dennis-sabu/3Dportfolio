import {motion} from 'framer-motion';
import Spline from '@splinetool/react-spline';

const HeroSection = () => {
  return (
    <section className='h-screen bg-gradient-to-b from-violet-900 to-black flex xl:flex-row flex-col-reverse items-center justify-between lg:px-24 px-10 relative overflow-hidden'>

      {/* left */}
      <div className='z-40 xl:mb-0 mb-[20%] '>
        <motion.h1 
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 ,type:'spring',stiffness:40,damping:25,delay:1.3}}
        className='text-5xl md:text-7xl lg:text-8xl font-bold z-10 mb-6'>
          Building Fast <br/> Reliable Results
        </motion.h1>
        <motion.p 
         initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 ,type:'spring',stiffness:40,damping:25,delay:1.8}}
        
        className='text-xl md:text-1xl lg:text-2xl text-purple-200 max-w-2xl '>Hi, I'm Dennis Sabu — a self-taught designer, developer, and tech enthusiast.
I'm an engineering student at SJCET Pala with a passion for web development, AI, and creative design. I also enjoy playing chess and creating content that blends logic and creativity.

</motion.p>
      </div>
    {/* spline element is here */}
      <Spline className='absolute xl:right-[-28%] right-0 top-[-20%] lg:top-0' scene="https://prod.spline.design/3g0bp9n42lFzIueP/scene.splinecode" />

    </section>
  )
}

export default HeroSection
