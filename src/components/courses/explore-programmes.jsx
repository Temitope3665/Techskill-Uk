import OurCourses from './our-courses';
import Mentoring from '@/assets/image/online-mentoring.png';
import DemoDayImage from '@/assets/image/demo-day.png';
import InternshipImage from '@/assets/image/internship-image.jpg';
import { Button } from '../ui/button';
import { PopupButton, useCalendlyEventListener } from 'react-calendly';
import { Link } from 'react-router-dom';
import { REGISTRATION_URL } from '@/config/paths';

const Skills = (courses) => {
  useCalendlyEventListener({
    onEventScheduled: (e) => console.log(e.data.payload),
  });
  return (
    <div className="grid md:grid-cols-3 gap-5 md:gap-10 mt-7 md:mt-14">
      {courses?.map((course) => (
        <OurCourses
          title={course?.fields?.title}
          image={course?.fields?.image?.fields?.file?.url}
          key={course?.fields?.title}
          description={course?.fields?.shortDescription}
          href={`details/${course?.sys?.id}`}
        />
      ))}
    </div>
  );
};

export default Skills;

export const OnlineMentoring = ({ imageWidth, title, description }) => (
  <div className="flex mt-7 md:mt-14 items-center flex-col-reverse md:flex-row gap-8 justify-between">
    <div className="md:40%">
      <h1 className="text-[24px] md:text-[45px] font-gilroyBold">
        {title || ' One-on-One Mentoring'}
      </h1>
      <p className="text-grey md:text-base text-[13px] md:w-[80%]">
        {description || 'Accelerate your career through our tailored one-on-one career mentoring sessions.'}
      </p>

      {/* <div className='my-4 md:my-8 md:flex space-y-3 md:space-y-0 block items-center'>
          <p className='md:text-base text-[12px]'>Two mentorship sessions during the program: <br/>1 hour each in the first week and after the training program.</p>
      </div> */}
      <Button size="lg" className="lg:w-[50%] w-full mt-4">
        <PopupButton
          url={`${process.env.REACT_CALENDLY_URL}`}
          rootElement={document.getElementById('root')}
          text="Book a call"
          styles={{ width: '100%', height: '100%' }}
        />
      </Button>
    </div>
    <img
      src={Mentoring}
      alt="online mentoring"
      className={`${imageWidth || 'md:w-[45%]'}`}
    />
  </div>
);

export const DemoDay = () => {
  useCalendlyEventListener({
    onEventScheduled: (e) => console.log(e.data.payload),
  });
  return (
    <div className="flex mt-7 md:mt-14 items-center flex-col-reverse md:flex-row gap-8">
      <div className="md:40%">
        <h1 className="text-[24px] md:text-[55px] font-gilroyBold">
          Practical
        </h1>
        <p className="text-grey md:text-base text-[13px] md:w-[80%]">
          Gain hands-on experience during the practical session of the course,
          where students are organised into teams and provided with a project
          idea to develop during the training programme.
        </p>
        <Link to={REGISTRATION_URL}>
            <Button className="font-gilroyMd text-sm w-[60%] mt-4">
              Join a cohort
            </Button>
          </Link>
      </div>
      <img
        src={DemoDayImage}
        alt="professional lady working"
        className="md:w-[45%]"
      />
    </div>
  );
};

export const Internship = () => {
  useCalendlyEventListener({
    onEventScheduled: (e) => console.log(e.data.payload),
  });
  return (
    <div className="flex mt-7 md:mt-14 items-center flex-col-reverse md:flex-row-reverse gap-8 justify-between">
      <div className="md:w-[40%]">
        <h1 className="text-[24px] md:text-[55px] font-gilroyBold">
          Internship
        </h1>
        <p className="text-grey md:text-base text-[13px] md:w-[80%]">
          Commence a 3-month internship with VentureTabs, the strategic arm of
          Techskill UK, when you meet certain criteria. Participate in ongoing
          projects within the company and gain relevant experience.
        </p>
        <Link to={REGISTRATION_URL}>
          <Button className="font-gilroyMd text-sm w-[60%] mt-4">
            Join a cohort
          </Button>
        </Link>
      </div>
      <img
        src={InternshipImage}
        alt="interships"
        className="md:w-[50%] rounded-lg"
      />
    </div>
  );
};
