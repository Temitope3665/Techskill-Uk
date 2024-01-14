import { ChevronDown } from 'lucide-react';
import Logo from '../assets/icons/logo.png';
import navLinks from '../config/nav-links';
import { HOME_URL } from '../config/paths';
import { Button } from './ui/button';

const Navbar = () => {
    return (
        <div className='bg-primary py-4 px-12'>
            <nav className='flex items-center justify-between'>
                <a href={HOME_URL}>
                    <img src={Logo} alt="Techskill logo" width={180} className='' />
                </a>
                <nav className='flex justify-between w-[50%]'>
                    {navLinks.map((nav) => (                    
                        <div className='cursor-pointer hover:text-yellow font-medium trans text-sm text-[#818992] space-x-1 flex items-center' key={nav.title}>
                            <a>{nav.title}</a>
                            <ChevronDown width={16} />
                        </div>
                    ))}
                </nav>
                <div className='font-semibold text-sm flex items-center'>
                    <p className='mr-4 font-medium text-white'>Ready to accelerate ?</p>
                    <Button>Join a cohort</Button>
                </div>
            </nav>
        </div>
    )
};

export default Navbar;