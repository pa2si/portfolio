'use client';

import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

interface AnimatedTextProps {
  text: string | string[];
  el?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
  className?: string;
  repeatDelay?: number;
  startDelay?: number;
  animation?: {
    hidden: object;
    visible: object;
  };
}

const defaultAnimations = {
  hidden: {
    opacity: 0,
    // y: 20,
  },
  visible: {
    opacity: 1,
    // y: 0,
    transition: {
      duration: 0.5, // Adjusted duration for better visibility
    },
  },
};

const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  el: Wrapper = 'p',
  className,
  repeatDelay,
  startDelay = 0,
  animation = defaultAnimations,
}) => {
  const controls = useAnimation();

  useEffect(() => {
    // Start the animation after the specified start delay
    const timeout = setTimeout(() => {
      controls.start('visible').then(() => {
        // If repeatDelay is set, continue with the repeating logic after the visible animation
        if (repeatDelay) {
          setTimeout(async () => {
            await controls.start('hidden');
            controls.start('visible');
          }, repeatDelay);
        }
      });
    }, startDelay * 1000); // Convert seconds to milliseconds

    // Cleanup function to clear the timeout if the component unmounts
    return () => clearTimeout(timeout);
  }, [controls, repeatDelay, startDelay]); // Dependencies array

  // Split the text into individual characters for animation
  const textArray = Array.isArray(text) ? text : [text];

  return (
    <Wrapper className={className}>
      <motion.span
        initial="hidden"
        animate={controls}
        variants={{
          visible: { transition: { staggerChildren: 0.07 } },
          hidden: {},
        }}
        aria-hidden="true"
      >
        {textArray.map((line, lineIndex) => (
          <span className="block" key={`${line}-${lineIndex}`}>
            {line.split(' ').map((word, wordIndex) => (
              <span className="inline-block" key={`${word}-${wordIndex}`}>
                {word.split('').map((char, charIndex) => (
                  <motion.span
                    key={`${char}-${charIndex}`}
                    className="inline-block"
                    variants={animation}
                  >
                    {char}
                  </motion.span>
                ))}
                <span className="inline-block">&nbsp;</span>
              </span>
            ))}
          </span>
        ))}
      </motion.span>
    </Wrapper>
  );
};

export default AnimatedText;
