
import OurCourses from './our-courses';
import Mentoring from '@/assets/image/online-mentoring.png';
import DemoDayImage from '@/assets/image/demo-day.png';
import { CalendarCheck } from 'lucide-react';
import { Button } from '../ui/button';
import { PopupButton, useCalendlyEventListener } from 'react-calendly';

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

export const OnlineMentoring = ({ imageWidth }) => (
  <div className="flex mt-7 md:mt-14 items-center flex-col-reverse md:flex-row gap-8 justify-between">
    <div className='md:40%'>
      <h1 className='text-[24px] md:text-[45px] font-gilroyBold'>One-on-One <br/>Online Mentoring</h1>
      <p className='text-grey md:text-base text-[13px] md:w-[80%]'>Accelerate your career through our tailored one-on-one career mentoring sessions.</p>

      <div className='my-4 md:my-8 md:flex space-y-3 md:space-y-0 block items-center'>
          <p className='md:text-base text-[12px]'>Two mentorship sessions during the program: <br/>1 hour each in the first week and after the training program.</p>
      </div>
      <Button size="lg" className="lg:w-[50%] w-full">
              <PopupButton
                url={`${process.env.REACT_CALENDLY_URL}`}
                rootElement={document.getElementById('root')}
                text="Book a call"
                styles={{ width: '100%', height: '100%' }}
              />
            </Button>
    </div>
    <img src={Mentoring} alt="online mentoring" className={`${imageWidth || 'md:w-[45%]'}`} />
  </div>
);

export const DemoDay = () => {
  useCalendlyEventListener({
    onEventScheduled: (e) => console.log(e.data.payload),
  });
return (
  <div className="flex mt-7 md:mt-14 items-center flex-col-reverse md:flex-row gap-8">
    <div className='md:40%'>
      <h1 className='text-[24px] md:text-[55px] font-gilroyBold'>Demo day</h1>
      <p className='text-grey md:text-base text-[13px] md:w-[80%]'>We guide individuals on a personalized path to professional success through insightful and individualized coaching sessions.</p>

      <div className='my-4 md:my-12 md:flex space-y-3 md:space-y-0 block items-center'>
        <div className='border border-grey flex items-center rounded-[24px] p-2'>
          <CalendarCheck size={20} className='pl-1' color='#818992' />
          <p className='px-2 md:text-base text-[12px]'>Weekdays 5- 9PM & Sat 10- 3PM (EST)</p>
        </div>
        <div className='w-[0.5px] bg-grey h-8 mx-3 hidden md:flex' />
        <div className='border border-grey flex items-center rounded-[24px] p-2'>
          <p className='px-2 md:text-base text-[12px]'>4 Days (1 hr each)</p>
        </div>
      </div>

      <Button size="lg" className="lg:w-[50%] w-full mt-6">
              <PopupButton
                url={`${process.env.REACT_CALENDLY_URL}`}
                rootElement={document.getElementById('root')}
                text="Join meeting"
                styles={{ width: '100%', height: '100%' }}
              />
            </Button>
    </div>
    <img src={DemoDayImage} alt="professional lady working" className='md:w-[45%]' />
  </div>
);
};
