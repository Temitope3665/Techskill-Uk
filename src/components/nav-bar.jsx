import { ChevronDown, Menu, X } from 'lucide-react';
import Logo from '../assets/icons/logo.png';
import navLinks from '../config/nav-links';
import { HOME_URL } from '../config/paths';
import { Button } from './ui/button';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
  const [show, setShow] = useState(false);
  const { pathname } = useLocation();

  return (
    <div className="bg-primary py-4 px-6 md:px-12 fixed w-full z-10">
      <nav className="flex items-center justify-between">
        <a href={HOME_URL}>
          <img
            src={Logo}
            alt="Techskill logo"
            className="w-[120px] md:w-[180px]"
          />
        </a>

        {!show && <Menu className="md:hidden" onClick={() => setShow(true)} />}
        {show && <X className="md:hidden" onClick={() => setShow(false)} />}
        <nav className="hidden md:flex justify-between w-[54%] font-medium">
          {navLinks.map((nav) => (
            <div
              className={`cursor-pointer hover:text-yellow font-semiBold trans text-sm space-x-1 flex items-center ${
                pathname.includes(nav.href) ? 'text-white' : 'text-[#818992]'
              }`}
              key={nav.title}
            >
              <a>{nav.title}</a>
              {nav.hasDropdown && <ChevronDown width={14} />}
            </div>
          ))}
        </nav>
        <div className="hidden font-semibold text-sm md:flex items-center">
          <Button>Join a cohort</Button>
        </div>
      </nav>

      {/* Small screen nav */}

      {show && (
        <div className="md:hidden h-[100vh] mt-4 font-medium bg-primary z-30">
          <nav className="justify-between">
            {navLinks.map((nav) => (
              <div
                className={`cursor-pointer hover:text-yellow font-semiBold trans text-sm space-x-1 flex items-center py-3 ml-4 ${
                  pathname.includes(nav.href) ? 'text-white' : 'text-[#818992]'
                }`}
                key={nav.title}
              >
                <a>{nav.title}</a>
                {nav.hasDropdown && <ChevronDown width={14} />}
              </div>
            ))}
          </nav>

          <Button className="font-medium text-sm w-full mt-4">Join a cohort</Button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
