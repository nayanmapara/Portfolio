import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';

import { styles } from '../styles';
import { WorkshopCanvas } from './canvas';

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      {/* Main content */}
      <div className={`${styles.paddingX} absolute inset-0 top-[120px]  mx-auto flex flex-row items-start gap-5`}>

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

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
}

export default Hero;
