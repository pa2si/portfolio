import Link from 'next/link';
import { socialLinks, email, menuLinks } from '../Navbar/data';

const Footer = () => {
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
      <nav className="grid md:grid-cols-5 gap-3">
        <Link className="link link-hover" href={aboutId}>
          {about}
        </Link>
        <Link className="link link-hover" href={customWebBenefitsId}>
          {customWebBenefits}
        </Link>
        <Link className="link link-hover" href={layoutsId}>
          {layouts}
        </Link>
        <Link className="link link-hover" href={devModeProjectsId}>
          {devModeProjects}
        </Link>
        <Link className="link link-hover " href={contactId}>
          {contact}
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
