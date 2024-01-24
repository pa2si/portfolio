'use client';

import React, { useState } from 'react';
import Image from 'next/image';

import { motion } from 'framer-motion';
import functionalitiesData from './data';

const Functionalities = () => {
  const [itemsToShow, setItemsToShow] = useState(4);

  const showMoreItems = () => {
    setItemsToShow((prevItemsToShow) => prevItemsToShow + 4);
  };

  const slideIn = {
    initial: {
      opacity: 0,
      rotate: -40,
    },
    animate: {
      opacity: 1,
      rotate: 0,

      transition: {
        duration: 1,
        delay: 0.4,
      },
    },
  };

  // Child animation variants
  const staggeredAnimation = {
    initial: {
      opacity: 0,
      x: -300,
      rotate: 0,
    },
    animate: (index: number) => ({
      opacity: 1,
      x: 0,
      rotate: 0,
      transition: {
        delay: 0.06 * index,
      },
    }),
  };
  const noAnimation = {
    initial: {},
    animate: {},
  };
  return (
    <>
      <motion.section
        className="max-w-7xl mx-auto p-4 bg-base-200 bg-opacity-10 rounded-lg shadow-lg shadow-primary my-8 border-t-2"
        variants={slideIn}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-1 gap-8 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {functionalitiesData.slice(0, itemsToShow).map((item, index) => {
            const isInitiallyVisible = index < 4;
            return (
              <motion.div
                key={index}
                className="card bg-base-100 shadow-xl md:hover:scale-105"
                variants={isInitiallyVisible ? noAnimation : staggeredAnimation}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                custom={index}
              >
                <figure className="w-full h-[auto] relative border-b-2 shadow-sm">
                  <a href={item.url} target="_blank" rel="noopener noreferrer">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={500}
                      height={300}
                      priority
                      className="rounded-t-lg object-cover w-full h-full"
                    />
                  </a>
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{item.title}</h2>
                  <p>{item.description}</p>
                </div>
                {/* Mobile View Website button */}
                <div className="card-actions justify-center mt-4 md:hidden mb-6">
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sm btn-primary"
                  >
                    View Website
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
        {/* More button */}
        {itemsToShow < functionalitiesData.length && (
          <div className="flex justify-center my-6">
            <button onClick={showMoreItems} className="btn btn-primary">
              More examples
            </button>
          </div>
        )}
      </motion.section>
    </>
  );
};

export default Functionalities;
