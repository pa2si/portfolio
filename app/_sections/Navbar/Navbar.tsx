import Link from 'next/link';
import { socialLinks, email } from './data';

const Navbar = () => {
  return (
    <header>
      <nav>
        <div className="navbar bg-base-100 max-w-7xl mx-auto font-bebasNeue ">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
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
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 text-primary  info shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link className="text-xl" href="#about">
                    About
                  </Link>
                </li>
                <li>
                  <Link className="text-xl" href="#projects">
                    Projects
                  </Link>
                  <ul className="p-2">
                    <li>
                      <Link href="">Submenu 1</Link>
                    </li>
                    <li>
                      <Link href="">Submenu 2</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link className="text-xl" href="#contact">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <Link
              className="text-2xl text-primary text-nowrap font-bold tracking-[7px]"
              href="/"
            >
              Pascal <span className="text-secondary ">Is Coding</span>
            </Link>
          </div>
          {/* Desktop View */}
          <div className="navbar-center hidden lg:flex ">
            <ul className="menu menu-horizontal text-lg text-primary info px-1 tracking-[4px] transition-all divide-purple-200 ease-in-out ">
              <li>
                <Link href="#about">About</Link>
              </li>
              <li>
                <Link href="#informations">Informations</Link>
              </li>
              <li>
                <details>
                  <summary>Layouts</summary>
                  <ul className="p-2 ">
                    <li>
                      <Link className="whitespace-nowrap" href="#layouts">
                        all Layouts
                      </Link>
                    </li>
                    <li>
                      <Link className="whitespace-nowrap" href="">
                        Submenu 1
                      </Link>
                    </li>
                    <li>
                      <Link className="whitespace-nowrap" href="">
                        Submenu 2
                      </Link>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <Link href="#contact">Contact</Link>
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
            <ul className="flex-fap-2 text-primary ml-3">
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
          </div>
        </div>
      </nav>
    </header>
  );
};
export default Navbar;
