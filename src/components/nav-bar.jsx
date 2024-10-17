import { ChevronDown, Menu, X } from 'lucide-react';
import Logo from '../assets/icons/logo.png';
import navLinks from '../config/nav-links';
import { HOME_URL } from '../config/paths';
import { Button } from './ui/button';
import { Link, useLocation } from 'react-router-dom';
import { useContext, useState } from 'react';
import { CourseContext } from '@/contexts/course-context';
import { Helmet } from 'react-helmet';

const Navbar = () => {
  const { allCourses, isLoading } = useContext(CourseContext);

  const [show, setShow] = useState(false);
  const { pathname } = useLocation();

  return (
    <div className="bg-primary py-4 px-6 md:px-12 fixed w-full z-10">
      {/* <Helmet>
        <title>Techskill Accelerate</title>
        <meta name="description" content="Accelerate your career today with Digital Transformation" />
      </Helmet> */}
      <nav className="flex items-center justify-between">
        <Link to={HOME_URL}>
          <img src={Logo} alt="Techskill" className="w-[120px] md:w-[180px]" onClick={() => setShow(false)} />
        </Link>

        {!show && <Menu className="lg:hidden" onClick={() => setShow(true)} />}
        {show && <X className="lg:hidden" onClick={() => setShow(false)} />}

        <nav className="hidden lg:flex justify-between w-[50%] font-gilroyMd">
          {isLoading ? (
            ''
          ) : (
            <ul className="hidden lg:flex justify-between w-[100%] font-gilroyMd">
              {navLinks(allCourses).map((nav) => (
                <li key={nav.title} className={`${nav.hasDropdown && 'group'}`}>
                  <Link to={nav.href} key={nav.title}>
                    <div
                      className={`cursor-pointer hover:text-white font-semiBold trans text-sm space-x-1 flex items-center pb-3 ${
                        pathname.includes(nav.href) ? 'text-white font-gilroyBold' : 'text-[#818992]'
                      }`}
                    >
                      <p className={`${nav.hasDropdown ? '' : 'mt-[2px]'}`}>{nav.title}</p>
                      {nav.hasDropdown && <ChevronDown width={14} />}
                    </div>
                  </Link>

                  {nav.hasDropdown && nav.options}
                </li>
              ))}
            </ul>
          )}
        </nav>

        <div className="hidden font-gilroyMd text-sm lg:flex items-center">
          <Link to="/explore-courses/user-registration/new">
            <Button size="lg">Join a cohort</Button>
          </Link>
        </div>
      </nav>

      {/* Small screen nav */}

      {show && (
        <div className="lg:hidden h-[100vh] mt-4 font-gilroyMd bg-primary z-30">
          <nav className="justify-between">
            {isLoading ? (
              'Loading....'
            ) : (
              <ul className="w-full">
                {navLinks(allCourses).map((nav) => (
                  <li key={nav.title} className={`${nav.hasDropdown && 'group'}`}>
                    <Link to={nav.href} key={nav.title}>
                      <div className={`${nav.hasDropdown && 'group'}`}>
                        <div
                          className={`cursor-pointer hover:text-yellow font-gilroyMd trans text-sm space-x-1 flex items-center py-3 ml-4 ${
                            pathname.includes(nav.href) ? 'text-white' : 'text-[#818992]'
                          }`}
                          key={nav.title}
                        >
                          {nav.title}
                          {nav.hasDropdown && <ChevronDown width={14} />}
                        </div>
                      </div>
                    </Link>

                    <div onClick={() => setShow(false)}>{nav.hasDropdown && nav.options}</div>
                  </li>
                ))}
              </ul>
            )}
          </nav>

          <Link to="/explore-courses/user-registration/new">
            <Button className="font-gilroyMd text-sm w-full mt-4">Join a cohort</Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
