import { ChevronDown } from 'lucide-react';
import Logo from '../assets/icons/logo.png';
import navLinks from '../config/nav-links';
import { HOME_URL } from '../config/paths';
import { Button } from './ui/button';
import { useLocation } from 'react-router-dom';

const Navbar = () => {
  const { pathname } = useLocation();

  return (
    <div className="bg-primary py-4 px-12 fixed w-full z-10">
      <nav className="flex items-center justify-between">
        <a href={HOME_URL}>
          <img src={Logo} alt="Techskill logo" width={180} className="" />
        </a>
        <nav className="flex justify-between w-[54%]">
          {navLinks.map((nav) => (
            <div
              className={`cursor-pointer hover:text-yellow font-semiBold trans text-sm space-x-1 flex items-center ${
                pathname.includes(nav.href) ? 'text-white' : 'text-[#818992]'
              }`}
              key={nav.title}
            >
              <a>{nav.title}</a>
              {nav.hasDropdown && (<ChevronDown width={14} />)}
            </div>
          ))}
        </nav>
        <div className="font-semibold text-sm flex items-center">
          <Button>Join a cohort</Button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
