import HireAlumniImage from '@/assets/image/join-alumni.png';
import Woman from '@/assets/image/young-woman-study.png';
import { CircleDot } from 'lucide-react';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';

const HireAlumni = () => {
  return (
    <div
      className="py-12 px-12 w-full"
      //   data-aos="fade-up"
      //   data-aos-duration="1000"
    >
      <div className="w-full text-center">
        <h1 className="font-gilroyBold text-[28px] lg:text-[50px] lg:mt-3">
          Connect with experts
        </h1>
        <p className="text-grey lg:text-base text-sm lg:px-0">
          Hire experts and turn your dreams into reality
        </p>
      </div>

      <div className='grid grid-cols-4 mt-6 gap-4'>
        <div className='border border-[#818992] p-4 rounded-lg w-full'>
            <div className='h-[200px] w-full rounded-lg'> 
                <img src={Woman} alt="young girl expert" className='h-full w-full object-cover rounded-lg' />
            </div>
            <div className='mt-2 flex items-center space-x-2 justify-end'>
                <div className='bg-[#06F867] rounded-full w-2 h-2' />
                <p className='text-white text-[14px]'>Abuja, Nigeria</p>
            </div>
            <h2 className='font-gilroyHeavy text-[24px] mt-4'>Tunmise Alabi</h2>
            <p className='text-[#818992]'>Product Designer</p>

            <p className='text-white'>Product designer at Techskill </p>

            <Link to="#">
                <Button className="w-full mt-4">Connect with Tunmise</Button>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default HireAlumni;
