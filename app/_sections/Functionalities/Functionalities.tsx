'use client';

import { useState } from 'react';
import Image from 'next/image';

import { motion } from 'framer-motion';
import functionalitiesData from './data';

type Functionality = {
  url: string;
  image: string;
  title: string;
  description: string;
};

type CardProps = {
  item: Functionality;
  index: number;
};

const Card: React.FC<CardProps> = ({ item, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  const hoverStyle: React.CSSProperties = {
    transform: isHovered ? 'scale(1.1)' : 'scale(1)',
    transition: 'transform 0.3s ease-in-out',
  };
  const isInitiallyVisible = index < 4;
  const delay = isInitiallyVisible ? 0 : (index - 3) * 0.1;
  return (
    <motion.div
      className="card shadow-xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: delay }}
      style={hoverStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
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
      {/* card */}
      <div className="card-body bg">
        <h2 className="card-title">{item.title}</h2>
        <p>{item.description}</p>
      </div>
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
};

const Functionalities: React.FC = () => {
  const [itemsToShow, setItemsToShow] = useState(4);

  const showMoreItems = () => {
    setItemsToShow((prevItemsToShow) => prevItemsToShow + 4);
  };

  let slideIn = {
    initial: {
      opacity: 0,
      rotate: 0,
    },
    animate: {
      opacity: 1,
      rotate: 0,

      transition: {
        duration: 1,
        delay: 0,
      },
    },
  };
  const isMobile = window.innerWidth < 768; //Add the width you want to check for here (now 768px)
  if (!isMobile) {
    slideIn = {
      initial: {
        opacity: 0,
        rotate: -40,
      },
      animate: {
        opacity: 1,
        rotate: 0,

        transition: {
          duration: 1,
          delay: 0.6,
        },
      },
    };
  }

  return (
    <>
      <motion.section
        className="max-w-7xl mx-auto p-4 bg-base-300 bg-opacity-10 rounded-lg shadow-lg shadow-primary my-8 border-t-2"
        variants={slideIn}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-1 gap-8 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {functionalitiesData.slice(0, itemsToShow).map((item, index) => (
            <Card key={index} item={item} index={index} />
          ))}
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
