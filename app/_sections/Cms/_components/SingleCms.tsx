'use client';

import Image from 'next/image';
import { useRef } from 'react';
import cmsData from '../data';
import { motion, useScroll, useTransform } from 'framer-motion';

type SingleCmsProps = (typeof cmsData)[number];

const SingleCms = ({ title, image, alt, url, description }: SingleCmsProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '1.33 1'],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 0.9], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.4, 1]);
  return (
    <motion.div
      ref={ref}
      style={{ scale: scaleProgress, opacity: opacityProgress }}
    >
      <div className="card bordered bg md:hover:scale-105 transform transition duration-300 ease-in-out shadow-lg">
        <a href={url} target="_blank" rel="noopener noreferrer">
          <figure>
            <Image
              src={image}
              alt={alt}
              width={500}
              height={300}
              priority
              className="rounded-t-md border-b-2 shadow-sm"
            />
          </figure>
        </a>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
          <div className="card-actions justify-center mt-6 md:hidden">
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-sm btn-primary"
            >
              View Website
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
export default SingleCms;
