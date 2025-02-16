import React from 'react';
import { motion } from 'framer-motion';

import { socialLinks } from '../constants';
import { styles } from '../styles';
import { textVariant } from '../utils/motion';

import { SectionWrapper } from '../hoc';

const AddedContacts = () => {
  return (
    <div className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}>
      <div className="flex flex-col md:flex-row mt-8 gap-4">

        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Connect With Me</p>
          <h2 className={styles.sectionHeadText}>Connect.</h2>
        </motion.div>
        </div>

        <div className="flex flex-col md:flex-row justify-center mt-8 gap-4">

        {/* Socials Box */}
        <motion.div className="bg-primary p-8 rounded-xl w-full md:w-1/3">
          <h2 className="text-white tracking-wider font-black text-4xl mb-4">Socials</h2>
          <div className="mt-5">
            <ul className="list-none flex items-start flex-row gap-3">
              {socialLinks.map((socialLink, index) => (
                <React.Fragment key={socialLink.name}>
                  <li className="flex items-center">
                    <a href={socialLink.url} className="text-white hover:text-secondary">
                      <img src={socialLink.icon} alt={socialLink.name} className="w-6 h-6" />
                    </a>
                  </li>
                  {index < socialLinks.length - 1 && <li className="text-white">|</li>}
                </React.Fragment>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Emails Box */}
        <motion.div className="bg-primary p-8 rounded-xl w-full md:w-1/3 mt-4 md:mt-0">
          <h2 className="text-white tracking-wider font-black text-4xl mb-4">Email</h2>
          <div>
            <p><a href='mailto:hello@nayanm.me' className='text-secondary'>hello@nayanm.me</a></p>
          </div>
        </motion.div>

        {/* Address Box */}
        <motion.div className="bg-primary p-8 rounded-xl w-full md:w-1/3 mt-4 md:mt-0">
          <h2 className="text-white tracking-wider font-black text-4xl mb-4">Address</h2>
          <p>Oakville, Ontario, Canada</p>
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(AddedContacts, "contact");