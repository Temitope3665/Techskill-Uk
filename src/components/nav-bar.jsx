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
        <nav className="hidden md:flex justify-between w-[50%] font-gilroyMd">
          {navLinks.map((nav) => (
            <a href={nav.href}>
              <div
                className={`cursor-pointer hover:text-yellow font-semiBold trans text-sm space-x-1 flex items-center ${
                  pathname.includes(nav.href) ? 'text-white' : 'text-[#818992]'
                }`}
                key={nav.title}
              >
                <p className={`${nav.hasDropdown ? '' : 'mt-[2px]'}`}>{nav.title}</p>
                {nav.hasDropdown && <ChevronDown width={14} />}
              </div>
            </a>
          ))}
        </nav>
        <div className="hidden font-gilroyMd text-sm md:flex items-center">
          <Button size="lg">Join a cohort</Button>
        </div>
      </nav>

      {/* Small screen nav */}

      {show && (
        <div className="md:hidden h-[100vh] mt-4 font-gilroyMd bg-primary z-30">
          <nav className="justify-between">
            {navLinks.map((nav) => (
              <a href={nav.href}>
                <div
                  className={`cursor-pointer hover:text-yellow font-gilroyMd trans text-sm space-x-1 flex items-center py-3 ml-4 ${
                    pathname.includes(nav.href)
                      ? 'text-white'
                      : 'text-[#818992]'
                  }`}
                  key={nav.title}
                >
                  {nav.title}
                  {nav.hasDropdown && <ChevronDown width={14} />}
                </div>
              </a>
            ))}
          </nav>

          <Button className="font-gilroyMd text-sm w-full mt-4">
            Join a cohort
          </Button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
