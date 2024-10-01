import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';

import { styles } from '../styles';
import { WorkshopCanvas } from './canvas';

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      {/* Main content */}
      <div className={`${styles.paddingX} absolute inset-0 top-1/4  mx-auto flex flex-row items-start gap-5`}>

        <div className="absolute top-0 left-0 w-full h-full">
            <WorkshopCanvas />
        </div>

        <div className="relative flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#0feffd]"/>
          <div className="w-1 sm:h-80 h-40 teal-gradient"/>
        </div>
        <div>
          <div className='absolute flex flex-col items-start'>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}> Welcome to my portfolio!</p>
            <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm &nbsp;<br className="sm:block hidden" />
              <span className="text-[#0feffd]">
                <Typewriter
                  options={{
                    strings: ['Nayan Mapara', 'a Full-Stack Developer', 'a Freelancer', 'a Tech Enthusiast'],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 50,
                    delay: 150,
                  }}
                />
              </span>
            </h1>

            
          </div>

                

        </div>

        

      </div>

      <div className="absolute xs:bottom-10 bottom-10 w-full flex justify-center items-center">
        <a href="#about">
          {/* <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div> */}
          
        <div className="relative w-[80px] h-[80px] flex justify-center items-center cursor-pointer">
          <motion.div
            animate={{ y: [0, -15, 0, -10, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute w-[30px] h-[10px] bg-teal-400 rounded-full"
          />
          
          <motion.div
            animate={{ y: [0, -10, 0, -15, 0] }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute w-[25px] h-[10px] bg-orange-400 rounded-full top-4"
          />

          <motion.div
            animate={{ y: [0, -5, 0, -20, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute w-[20px] h-[10px] bg-pink-400 rounded-full top-8"
          />
        </div>

        </a>
      </div>
    </section>
  );
}

export default Hero;
