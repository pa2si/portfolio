'use client';

import { useState } from 'react';
import reasonsData from './reasonsData';
import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const CustomWebBenefits = () => {
  const [visibleReasonsCount, setVisibleReasonsCount] = useState(3);

  const showMoreReasons = () => {
    setVisibleReasonsCount((prevCount) => prevCount + 3);
  };

  const slideIn = {
    initial: {
      opacity: 0,
      x: -200,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
      },
    },
  };

  const staggeredAnimation = {
    initial: {
      opacity: 0,
      x: -100,
    },
    animate: (index: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.1 * index,
      },
    }),
  };

  return (
    <>
      <div className="max-w-3xl mx-auto">
        <div className="relative w-full h-1 mt-1">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary to-transparent "></div>
        </div>
      </div>
      <section className="max-w-7xl mx-auto ">
        <div className="  p-8">
          <h2 className="text-2xl font-semibold mb-4">
            Find here just a few reasons...
          </h2>
          <div className="space-y-6  ">
            {reasonsData.slice(0, visibleReasonsCount).map((reason, index) => (
              <motion.div
                key={index}
                className="card bordered shadow-sm shadow-primary bg "
                variants={index < 3 ? slideIn : staggeredAnimation}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                custom={index}
              >
                <div className="card-body p-2 ">
                  <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                      <AccordionTrigger>
                        <h3 className="card-title">{reason.title}</h3>
                      </AccordionTrigger>
                      <AccordionContent>
                        <p className="text-[1rem]">{reason.description}</p>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </motion.div>
            ))}
            <div className="flex justify-center  ">
              {visibleReasonsCount < reasonsData.length && (
                <button
                  onClick={showMoreReasons}
                  className="btn btn-primary mt-4"
                >
                  More reasons
                </button>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CustomWebBenefits;
