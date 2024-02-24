'use client';

import Link from 'next/link';
import { useEffect, useState, useRef } from 'react';
import { socialLinks, email, menuLinks } from './data';
import ThemeToggle from '@/components/shared/ThemeToggle';

const Navbar = () => {
  const {
    about,
    aboutId,
    customWebBenefits,
    customWebBenefitsId,
    examples,
    layouts,
    layoutsId,
    functionalities,
    functionalitiesId,
    multiLanguage,
    multiLanguageId,
    contact,
    contactId,
  } = menuLinks;

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const detailsRef = useRef<HTMLDetailsElement>(null); // Ref for the <details> element

  const handleLinkClick = () => {
    // Close mobile menu
    setIsMobileMenuOpen(false);
    // Close details dropdown
    if (detailsRef.current) {
      detailsRef.current.open = false;
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Function to handle outside click
  const handleClickOutside = (event: MouseEvent) => {
    // Check if the click is outside the detailsRef element
    if (
      detailsRef.current &&
      !detailsRef.current.contains(event.target as Node)
    ) {
      detailsRef.current.open = false;
    }
  };

  useEffect(() => {
    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header id="navbar">
      <nav className="navbar bg-base-100 max-w-7xl mx-auto font-bebasNeue">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden"
              onClick={toggleMobileMenu}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            {/* Mobile View */}
            {isMobileMenuOpen && (
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 text-primary  info shadow bg-base-100 rounded-box w-52 fixed"
              >
                <li>
                  <Link
                    className="text-xl"
                    href={aboutId}
                    onClick={handleLinkClick}
                  >
                    {about}
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-xl"
                    href={customWebBenefitsId}
                    onClick={handleLinkClick}
                  >
                    {customWebBenefits}
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-xl"
                    href={layoutsId}
                    onClick={handleLinkClick}
                  >
                    {examples}
                  </Link>
                  <ul className="p-2">
                    <li>
                      <Link href={layoutsId} onClick={handleLinkClick}>
                        {layouts}
                      </Link>
                    </li>
                    <li>
                      <Link href={functionalitiesId} onClick={handleLinkClick}>
                        {functionalities}
                      </Link>
                    </li>
                    <li>
                      <Link href={multiLanguageId} onClick={handleLinkClick}>
                        {multiLanguage}
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link className="text-xl" href={contactId}>
                    {contact}
                  </Link>
                </li>
              </ul>
            )}
          </div>
          <Link
            className="text-2xl text-primary sm:text-nowrap font-bold tracking-[7px] ml-2"
            href="/"
          >
            Pascal <span className="text-secondary text-nowrap">Is Coding</span>
          </Link>
        </div>
        {/* Desktop View */}
        <div className="navbar-center hidden lg:flex ">
          <ul className="menu menu-horizontal text-lg text-primary info px-1 tracking-[4px] transition-all divide-purple-200 ease-in-out ">
            <li>
              <Link href={aboutId}>{about}</Link>
            </li>
            <li>
              <Link href={customWebBenefitsId}>{customWebBenefits}</Link>
            </li>
            <li>
              <details ref={detailsRef}>
                <summary>{examples}</summary>
                <ul className="p-2 ">
                  <li>
                    <Link
                      className="whitespace-nowrap"
                      href={layoutsId}
                      onClick={handleLinkClick}
                    >
                      {layouts}
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="whitespace-nowrap"
                      href={functionalitiesId}
                      onClick={handleLinkClick}
                    >
                      {functionalities}
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="whitespace-nowrap"
                      href={multiLanguageId}
                      onClick={handleLinkClick}
                    >
                      {multiLanguage}
                    </Link>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <Link href={contactId}>{contact}</Link>
            </li>
          </ul>
        </div>
        {/* social icons */}
        <div className="navbar-end mr-4 xl:mr-0">
          <ul className="flex gap-3 text-primary ">
            {socialLinks.map((link, index) => {
              const { url, icon } = link;
              return (
                <li key={index}>
                  <a
                    href={url}
                    className="text-xl hover:text-primary-content hover:scale-125 transition-all duration-200 ease-in-out"
                  >
                    {icon}
                  </a>
                </li>
              );
            })}
          </ul>
          <ul className="flex-fap-2 text-primary ml-3 pr-8">
            {email.map((item) => {
              const { email, icon } = item;
              return (
                <li key={email}>
                  <a
                    href={`mailto:${email}`}
                    className="text-xl hover:text-primary-content hover:scale-120 transition-all duration-200 ease-in-out"
                  >
                    {icon}
                  </a>
                </li>
              );
            })}
          </ul>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
};
export default Navbar;
