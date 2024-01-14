import Logo from '../assets/icons/logo.png';

const Navbar = () => {
    return (
        <div className='bg-primary p-4'>
            <img src={Logo} alt="Techskill logo" width={180} />
        </div>
    )
};

export default Navbar;