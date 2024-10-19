import React from "react";
import { Accordion, AccordionSummary, AccordionDetails, Button } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { SectionWrapper } from "../hoc";
import { backendTech, frontendTech, otherTech } from "../constants";

import { motion } from "framer-motion";
import { textVariant, fadeIn } from "../utils/motion";
import { styles } from "../styles";

const Tech = () => {
  const renderTechButtons = (techArray) => {
    return techArray.map((technology) => (
      <motion.div variants={fadeIn("top", "spring", 0.25, 1.25)}>
      <Button 
      disabled
      key={technology.name} 
      variant="outlined" 
      style=
      {{
        color: '#D7F4FF',
        borderColor: '#ffffff',
      }}
      className="flex flex-col items-center p-4">
        <p className="flex items-center space-x-2">
          <img src={technology.icon} alt={technology.name} className="w-7 h-7" />
          <span>{technology.name}</span>
        </p>
      </Button>
      </motion.div>
    ));
  };

  const accordionStyle = {
    backgroundColor: '#0c1b2c',
    color: '#D7F4FF',
    fontWeight: 'bold',
    border: '2px solid #D7F4FF',
    width: '90%',
    margin: '0 auto',
  };

  return (
    <div>
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText}`}>Learnings on the Path</p>
          <h2 className={styles.sectionHeadText}>My Tech Arsenal.</h2>
        </motion.div>
      <div className="mt-10">
        <div className="flex flex-row flex-wrap justify-center gap-2">
          <Accordion defaultExpanded sx={ accordionStyle }>
            <AccordionSummary expandIcon={<ExpandMoreIcon sx={ accordionStyle } />} aria-controls="backend-content" id="backend-header">
              Backend Technologies
            </AccordionSummary>
            <AccordionDetails>
              <div className="flex flex-row flex-wrap justify-center gap-2">
                {renderTechButtons(backendTech)}
              </div>
            </AccordionDetails>
          </Accordion>

          <Accordion sx={ accordionStyle }>
            <AccordionSummary expandIcon={<ExpandMoreIcon sx={ accordionStyle } />} aria-controls="frontend-content" id="frontend-header">
              Frontend Technologies
            </AccordionSummary>
            <AccordionDetails>
              <div className="flex flex-row flex-wrap justify-center gap-2">
                {renderTechButtons(frontendTech)}
              </div>
            </AccordionDetails>
          </Accordion>
 
          <Accordion sx={ accordionStyle }>
            <AccordionSummary expandIcon={<ExpandMoreIcon sx={ accordionStyle } />} aria-controls="other-content" id="other-header">
              Other Technologies
            </AccordionSummary>
            <AccordionDetails>
              <div className="flex flex-row flex-wrap justify-center gap-2">
                {renderTechButtons(otherTech)}
              </div>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </div>
  );
}

export default SectionWrapper(Tech, "");