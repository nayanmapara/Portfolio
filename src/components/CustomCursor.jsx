import React from 'react';
import AnimatedCursor from 'react-animated-cursor';

const CustomCursor = () => {
  return (
    <AnimatedCursor
      innerSize={10} // Adjust the inner circle size
      outerSize={50} // Adjust the outer circle size
      color='0, 100, 100' // Set the cursor color
      outerAlpha={0.8} // Set the transparency of the outer circle
      innerScale={0.7} // Set the inner circle scale
      outerScale={2} // Set the outer circle scale
      hasBlendMode={true} // Enable blending mode
      showSystemCursor={true} // Enable system cursor
      innerStyle={{
        backgroundColor: '#00FFFF', // Set the inner circle background color
        mixBlendMode: 'difference', // Set the blend mode for the inner circle
      }}
      outerStyle={{
        border: '2px solid #00FFFF', // Set the outer circle border
        mixBlendMode: 'difference', // Set the blend mode for the outer circle
      }}
      clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link',
        {
          target: '.custom',
          options: {
            innerSize: 10,
            outerSize: 50,
            color: '0, 100, 100',
            outerAlpha: 0.8,
            innerScale: 0.7,
            outerScale: 2,
          }
        }
      ]}
    />
  );
};

export default CustomCursor;
