import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const AboutSection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const introRef = useRef(null);
  const starRef = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Title animation
    gsap.fromTo(
      titleRef.current,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        
        duration: 0.8,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 40%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    // ✅ Intro animation
    gsap.fromTo(
      introRef.current,
      { y: 100, opacity: 0, filter: 'blur(10px)' },
      {
        y: 0,
        opacity: 1,
        filter: 'blur(0px)',
        duration: 1.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 40%',
          toggleActions: 'play none none reverse',
          
        },
      }
    );

    // Stars animation
    starRef.current.forEach((star, index) => {
      const direction = index % 2 === 0 ? 1 : -1;
      const speed = 0.5 + Math.random() * 0.5;

      gsap.to(star, {
        x: `${direction * (100 + index * 10)}`,
        y: `+=${direction * -50 - index * 5}`,
        rotation: direction * 360,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: speed,
        },
      });
    });

    // Cleanup ScrollTriggers on unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        trigger.kill();
      });
    };
  }, []);

  // Store each star reference
  const addToStars = (el) => {
    if (el && !starRef.current.includes(el)) {
      starRef.current.push(el);
    }
  };

  return (
    <section
      ref={sectionRef}
      className="min-h-screen relative overflow-hidden bg-gradient-to-b from-black to-[#9a74cf50] flex flex-col justify-center items-center px-5 lg:px-24 py-16"
    >
      {/* Stars */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {[...Array(50)].map((_, i) => (
          <div
            ref={addToStars}
            key={`star${i}`}
            className="absolute rounded-full"
            style={{
              width: `${10 + i * 0.5}px`,
              height: `${10 + i * 0.5}px`,
              backgroundColor: 'white',
              opacity: 0.2 + Math.random() * 0.4,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Title */}
      <h1
        ref={titleRef}
        className="text-4xl md:text-6xl font-bold text-center text-white opacity-0 z-10"
      >
        About Me
      </h1>

      {/* Intro Section */}
      <div
        ref={introRef}
        className="mt-12 flex md:flex-row flex-col justify-between items-center gap-10 opacity-0 z-10"
      >
        <h3 className="text-base md:text-2xl font-bold text-purple-200 max-w-3xl text-center md:text-left z-999">
          I'm Dennis Sabu — a self-taught designer, developer, and tech enthusiast currently
          pursuing Engineering in Electronics and Computer Science at SJCET Pala. I’m passionate
          about building modern, user-friendly web experiences, exploring AI, and crafting creative
          designs. Beyond tech, I'm a chess player and content creator who loves combining logic
          with creativity.
        </h3>
        <img
          src="src/assets/1753889655006_85oyqq_2_1-removebg-preview.png"
          alt="Dennis Sabu"
          className="lg:h-[40rem] md:h-[25rem] h-[20rem] mix-blend-lighten z-999"
        />
      </div>
    </section>
  );
};

export default AboutSection;
