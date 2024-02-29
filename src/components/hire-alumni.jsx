import { Link } from 'react-router-dom';
import { alumni } from '@/config/dataa';
import ReactHelment from './helmet';

const HireAlumni = () => {
  return (
    <div
      className="py-12 px-12 w-full"
        data-aos="fade-up"
        data-aos-duration="1000"
    >
      <ReactHelment title="Techskill Uk - Hire Alumni" />
      <div className="w-full text-center">
        <h1 className="font-gilroyBold text-[28px] lg:text-[50px] lg:mt-3">
          Connect with experts
        </h1>
        <p className="text-grey lg:text-base text-sm lg:px-0">
          Hire experts and turn your dreams into reality
        </p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 mt-6 gap-4">
        {alumni.map((alumnus) => (
          <div className="rounded-lg w-full text-center mt-8" key={alumnus.name}>
            <div className="lg:h-[170px] lg:w-[170px] h-[100px] w-[100px] rounded-full mx-auto">
              <img
                src={alumnus.image}
                alt="young girl expert"
                className="h-full w-full object-cover rounded-full"
              />
            </div>
            <h2 className="font-gilroyMd lg:text-[20px] text-sm mt-2">
              {alumnus.name}
            </h2>
            <div className=" items-center space-y-2 justify-center">
              <p className="text-[#818992] lg:text-sm text-[12px] mb-1">{alumnus.title}</p>
              <Link to={alumnus.linkedin} target='_blank' className='text-yellow text-sm border px-2 py-1 rounded-md border-yellow lg:text-sm text-[12px]'>
                Connect
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HireAlumni;
