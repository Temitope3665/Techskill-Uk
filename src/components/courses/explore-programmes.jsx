import { courses } from '@/config/courses';
import OurCourses from './our-courses';
import Mentoring from '@/assets/image/online-mentoring.png';
import DemoDayImage from '@/assets/image/demo-day.png';
import { CalendarCheck } from 'lucide-react';
import { Button } from '../ui/button';

const Skills = () => (
  <div className="grid md:grid-cols-3 gap-5 md:gap-10 mt-7 md:mt-14">
    {courses.map((course) => (
      <OurCourses
        title={course.title}
        image={course.image}
        key={course.title}
        description={course.desc}
        id={course.id}
      />
    ))}
  </div>
);

export default Skills;

export const OnlineMentoring = () => (
  <div className="flex mt-7 md:mt-14 items-center flex-col-reverse md:flex-row gap-8">
    <div className='md:40%'>
      <h1 className='text-[24px] md:text-[55px] font-gilroyBold'>1-on-1 online mentoring</h1>
      <p className='text-grey md:text-base text-[13px] md:w-[80%]'>Accelerate your career triumph through our tailored one-on-one career coaching sessions.</p>

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

      <Button className="w-full md:w-[40%] md:my-0 my-4">Book a call</Button>
    </div>
    <img src={Mentoring} alt="online mentoring" className='md:w-[45%]' />
  </div>
);

export const DemoDay = () => (
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

      <Button className="w-full md:w-[40%] md:my-0 my-4">Join meeting</Button>
    </div>
    <img src={DemoDayImage} alt="professional lady working" className='md:w-[45%]' />
  </div>
);
