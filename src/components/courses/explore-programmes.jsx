import { courses } from '@/config/courses';
import OurCourses from './our-courses';
import Mentoring from '@/assets/image/online-mentoring.png'
import { CalendarCheck } from 'lucide-react';
import { Button } from '../ui/button';

const Skills = () => (
  <div className="grid md:grid-cols-3 gap-10 mt-7 md:mt-14">
    {courses.map((course) => (
      <OurCourses
        title={course.title}
        image={course.image}
        key={course.title}
        description={course.desc}
      />
    ))}
  </div>
);

export default Skills;

export const OnlineMentoring = () => (
  <div className="md:flex mt-7 md:mt-14 items-center">
    <div className='40%'>
      <h1 className='text-[55px] font-gilroyBold'>1-on-1 online mentoring</h1>
      <p className='text-grey w-[80%]'>Accelerate your career triumph through our tailored one-on-one career coaching sessions.</p>

      <div className='my-12 flex items-center'>
        <div className='border border-grey flex items-center rounded-[24px] p-2'>
          <CalendarCheck size={20} className='pl-1' color='#818992' />
          <p className='px-2'>Weekdays 5- 9PM & Sat 10- 3PM (EST)</p>
        </div>
        <div className='w-[0.5px] bg-grey h-8 mx-3' />
        <div className='border border-grey flex items-center rounded-[24px] p-2'>
          <p className='px-2'>4 Days (1 hr each)</p>
        </div>
      </div>

      <Button className="w-[40%]">Book a call</Button>
    </div>
    <img src={Mentoring} alt="online mentoring" className='w-[45%]' />
  </div>
);
