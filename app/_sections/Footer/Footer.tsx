'use client';

import Link from 'next/link';
import { socialLinks, email, menuLinks } from '../Navbar/data';
import { usePathname } from 'next/navigation';

const Footer = () => {
  const pathname = usePathname();

  const currentYear = new Date().getFullYear();
  const {
    about,
    aboutId,
    customWebBenefits,
    customWebBenefitsId,
    examples,
    layouts,
    layoutsId,
    contact,
    contactId,
    devModeProjects,
    devModeProjectsId,
  } = menuLinks;
  return (
    <footer className="footer footer-center p-10 bg-primary bg-opacity-90 text-primary-content rounded">
      <nav className="grid md:grid-cols-7 gap-3">
        <Link
          className="link link-hover"
          href={pathname === '/' ? `${aboutId}` : `/${aboutId}`}
        >
          {about}
        </Link>
        <Link
          className="link link-hover"
          href={
            pathname === '/'
              ? `${customWebBenefitsId}`
              : `/${customWebBenefitsId}`
          }
        >
          {customWebBenefits}
        </Link>
        <Link
          className="link link-hover"
          href={pathname === '/' ? `${layoutsId}` : `/${layoutsId}`}
        >
          {layouts}
        </Link>
        <Link
          className="link link-hover"
          href={
            pathname === '/' ? `${devModeProjectsId}` : `/${devModeProjectsId}`
          }
        >
          {devModeProjects}
        </Link>
        <Link
          className="link link-hover "
          href={pathname === '/' ? `${contactId}` : `/${contactId}`}
        >
          {contact}
        </Link>
        <Link className="link link-hover " href={'/imprint'}>
          Imprint
        </Link>
        <Link className="link link-hover " href={'/privacy'}>
          Privacy Policy
        </Link>
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <ul className="flex gap-3 text-primary ">
            {email.map((item) => {
              const { email, icon } = item;
              return (
                <li key={email}>
                  <a
                    href={`mailto:${email}`}
                    className="text-2xl text-primary-content hover:text-secondary transition-all duration-200 ease-in-out"
                  >
                    {icon}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
      <aside>
        <p>Copyright © {currentYear} - All rights reserved</p>
      </aside>
    </footer>
  );
};
export default Footer;
