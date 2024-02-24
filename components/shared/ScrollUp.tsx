'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { FaArrowCircleUp } from 'react-icons/fa'; // or any other icon from `react-icons`

const ScrollUp = () => {
  const [showArrow, setShowArrow] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY && currentScrollY > 100) {
        setShowArrow(true); // Show arrow when scrolling up and not at the top
      } else {
        setShowArrow(false); // Hide arrow otherwise
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    showArrow && (
      <Link
        href="#navbar"
        className="fixed bottom-10 right-10 z-50 cursor-pointer p-2 bg-gray-800 text-white rounded-full shadow-lg hover:bg-gray-700 transition duration-300 ease-in-out"
        aria-label="Scroll to top"
      >
        <FaArrowCircleUp size={30} />
      </Link>
    )
  );
};

export default ScrollUp;
