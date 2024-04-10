'use client';

import Link from 'next/link';
import { useEffect, useState, useRef } from 'react';
import { socialLinks, email, menuLinks } from './data';
import ThemeToggle from '@/components/shared/ThemeToggle';
import { usePathname } from 'next/navigation';
import ShareButton from '@/components/shared/ShareButton';

const Navbar = () => {
  const pathname = usePathname();

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
    devModeProjects,
    devModeProjectsId,
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
        <div className="mr-5p xl:mr-15p">
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
                    href={pathname === '/' ? `${aboutId}` : `/${aboutId}`}
                    onClick={handleLinkClick}
                  >
                    {about}
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-xl"
                    href={
                      pathname === '/'
                        ? `${customWebBenefitsId}`
                        : `/${customWebBenefitsId}`
                    }
                    onClick={handleLinkClick}
                  >
                    {customWebBenefits}
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-xl"
                    href={pathname === '/' ? `${layoutsId}` : `/${layoutsId}`}
                    onClick={handleLinkClick}
                  >
                    {examples}
                  </Link>
                  <ul className="p-2">
                    <li>
                      <Link
                        href={
                          pathname === '/' ? `${layoutsId}` : `/${layoutsId}`
                        }
                        onClick={handleLinkClick}
                      >
                        {layouts}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={
                          pathname === '/'
                            ? `${multiLanguageId}`
                            : `/${multiLanguageId}`
                        }
                        onClick={handleLinkClick}
                      >
                        {multiLanguage}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={
                          pathname === '/'
                            ? `${functionalitiesId}`
                            : `/${functionalitiesId}`
                        }
                        onClick={handleLinkClick}
                      >
                        {functionalities}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={
                          pathname === '/'
                            ? `${devModeProjectsId}`
                            : `/${devModeProjectsId}`
                        }
                        onClick={handleLinkClick}
                      >
                        {devModeProjects}
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link
                    className="text-xl"
                    href={pathname === '/' ? `${contactId}` : `/${contactId}`}
                  >
                    {contact}
                  </Link>
                </li>
                {/* social icons */}
                <div className=" flex justify-end mt-2">
                  <ul className=" gap-3 text-primary ">
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
                  <ul className="flex text-primary mr-4 ">
                    {email.map((item) => {
                      const { email, icon } = item;
                      return (
                        <li key={email}>
                          <a
                            href={`mailto:${email}`}
                            className="text-xl hover:text-primary-content  transition-all duration-200 ease-in-out"
                          >
                            {icon}
                          </a>
                        </li>
                      );
                    })}
                    <ShareButton
                      className="text-primary"
                      hoverClassName="hover:text-primary-content"
                    />
                  </ul>
                  <ThemeToggle />
                </div>
              </ul>
            )}
          </div>
          <Link
            className="text-2xl flex gap-3 text-primary text-nowrap font-bold tracking-[7px] ml-2"
            href="/"
          >
            Pascal <span className="text-secondary text-nowrap">Is Coding</span>
          </Link>
        </div>
        {/* Desktop View */}
        <div className="navbar-center hidden lg:flex ">
          <ul className="menu menu-horizontal text-lg text-primary info px-1 tracking-[4px] transition-all divide-purple-200 ease-in-out ">
            <li>
              <Link href={pathname === '/' ? `${aboutId}` : `/${aboutId}`}>
                {about}
              </Link>
            </li>
            <li>
              <Link
                href={
                  pathname === '/'
                    ? `${customWebBenefitsId}`
                    : `/${customWebBenefitsId}`
                }
              >
                {customWebBenefits}
              </Link>
            </li>
            <li>
              <details ref={detailsRef}>
                <summary>{examples}</summary>
                <ul className="p-2 ">
                  <li>
                    <Link
                      className="whitespace-nowrap"
                      href={pathname === '/' ? `${layoutsId}` : `/${layoutsId}`}
                      onClick={handleLinkClick}
                    >
                      {layouts}
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="whitespace-nowrap"
                      href={
                        pathname === '/'
                          ? `${multiLanguageId}`
                          : `/${multiLanguageId}`
                      }
                      onClick={handleLinkClick}
                    >
                      {multiLanguage}
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="whitespace-nowrap"
                      href={
                        pathname === '/'
                          ? `${functionalitiesId}`
                          : `/${functionalitiesId}`
                      }
                      onClick={handleLinkClick}
                    >
                      {functionalities}
                    </Link>
                    <Link
                      className="whitespace-nowrap"
                      href={
                        pathname === '/'
                          ? `${devModeProjectsId}`
                          : `/${devModeProjectsId}`
                      }
                      onClick={handleLinkClick}
                    >
                      {devModeProjects}
                    </Link>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <Link href={pathname === '/' ? `${contactId}` : `/${contactId}`}>
                {' '}
                {contact}{' '}
              </Link>
            </li>
          </ul>
        </div>
        {/* social icons */}
        <div className="navbar-end mr-4 xl:mr-0 hidden lg:flex">
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
          <ul className="flex gap-3 text-primary ml-3 pr-8">
            {email.map((item) => {
              const { email, icon } = item;
              return (
                <li key={email}>
                  <a
                    href={`mailto:${email}`}
                    className="text-2xl hover:text-primary-content  transition-all duration-200 ease-in-out"
                  >
                    {icon}
                  </a>
                </li>
              );
            })}
            <ShareButton
              className="text-primary"
              hoverClassName="hover:text-primary-content"
            />
          </ul>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
};
export default Navbar;
