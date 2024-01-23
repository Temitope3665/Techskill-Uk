import ProductMagement from '@/assets/image/product-management-2.png';
import CoursePeriod, { Perks } from '@/components/courses/course-perks';
import { Button } from '@/components/ui/button';
import {
    benefits,
  objectives,
  outlines,
  schedules,
  weekSchedules,
} from '@/config/courses';
import { REGISTRATION_URL } from '@/config/paths';
import { Check, ChevronDown, Circle, MoveRight, Star } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import BenefitsArch from '@/assets/icons/benefit-arch.png';

const CourseDetails = () => {
  const { slug } = useParams();

  console.log(slug, '-?');
  return (
    <div className="bg-primary -mt-4">
      <div className="lg:flex justify-between items-center px-6 lg:px-12 pt-12">
        <div className="lg:w-[55%] text-center lg:text-left">
          <h1 className="font-gilroyBold text-[24px] lg:text-[45px]">
            Product Management
          </h1>
          <h3 className="mt-2 lg:w-[70%]">
            Learn how to blend creativity and innovation to create user-
            friendly solutions from product ideation, examining marketing
            research and effective development strategies.
          </h3>

          <CoursePeriod
            duration="Weekdays 5- 9PM & Sat 10- 3PM (EST)"
            time="4 Days (1 hr each)"
          />

          <Link to={REGISTRATION_URL}>
            <Button size="lg" className="lg:w-[40%] w-full mt-4">
              Enroll now <MoveRight className="ml-3" />{' '}
            </Button>
          </Link>

          <Perks />
        </div>
        <div className="lg:w-[40%] mt-6 lg:mt-0">
          <img src={ProductMagement} alt="product management course image" />
        </div>
      </div>

      <div className="grid lg:grid-cols-2 bg-secondary mt-6 lg:mt-24 px-6 lg:px-24 py-12 lg:py-16 relative"         data-aos="fade-up"
        data-aos-duration="1000">
        <div className="border border-yellow rounded-lg lg:w-[55%]">
          <h3 className="border-b-[0.5px] border-yellow py-4 font-gilroyMd text-yellow text-center">
            Project Management
          </h3>
          <div className="py-4 px-8">
            {outlines.map((outline) => (
              <li key={outline} className="flex items-center py-4">
                <Circle
                  fill={outline === 'About the course' ? '#fff' : '#818992'}
                  color={outline === 'About the course' ? '#fff' : '#818992'}
                  size={9}
                  className="mr-2"
                />{' '}
                <p
                  className={`${
                    outline === 'About the course'
                      ? 'text-white font-gilroyBold'
                      : 'text-grey font-gilroyMd'
                  }`}
                >
                  {outline}
                </p>
              </li>
            ))}
            <ul></ul>
          </div>
        </div>
        <div className="text-center lg:text-left">
          <h1 className="font-gilroyBold text-[24px] mt-8 lg:mt-0 lg:text-[35px]">
            About this course
          </h1>
          <p className="py-4">
            Learn how to blend creativity and innovation to create user-
            friendly solutions from product ideation, examining marketing
            research and effective development strategies.
          </p>
          <p className="py-4">
            Learn how to blend creativity and innovation to create user-
            friendly solutions from product ideation, examining marketing
            research and effective development strategies.
          </p>

          <Link to={`/explore-courses/user-registration/${slug}`}>
            <Button size="lg" className="lg:w-[40%] w-full mt-2 lg:mt-8">
              Enroll now <MoveRight className="ml-3" />{' '}
            </Button>
          </Link>

          <div className="flex mt-20 justify-between lg:w-[85%]">
            <div className="text-center">
              <p className="text-yellow text-[30px]">95%</p>
              <p className="text-grey text-sm font-gilroyMd">Completion rate</p>
            </div>
            <div className="text-center">
              <Star color="#FFD832" size={30} className="mx-auto" />
              <p className="text-grey text-sm font-gilroyMd py-3">
                10/10 Student review
              </p>
            </div>
            <div className="text-center">
              <p className="text-yellow text-[30px]">10</p>
              <p className="text-grey text-sm font-gilroyMd">
                No. of students per class
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 bg-primary mt-6 lg:mt-16 px-6 lg:px-24 relative"         data-aos="fade-up"
        data-aos-duration="1000">
        <div className="border border-yellow rounded-lg lg:w-[55%]">
          <h3 className="border-b-[0.5px] border-yellow py-4 font-gilroyMd text-yellow text-center">
            Project Management
          </h3>
          <div className="py-4 px-8">
            {outlines.map((outline) => (
              <li key={outline} className="flex items-center py-4">
                <Circle
                  fill={outline === 'Learning objectives' ? '#fff' : '#818992'}
                  color={outline === 'Learning objectives' ? '#fff' : '#818992'}
                  size={9}
                  className="mr-2"
                />{' '}
                <p
                  className={`${
                    outline === 'Learning objectives'
                      ? 'text-white font-gilroyBold'
                      : 'text-grey font-gilroyMd'
                  }`}
                >
                  {outline}
                </p>
              </li>
            ))}
            <ul></ul>
          </div>
        </div>
        <div className="text-center lg:text-left">
          <h1 className="font-gilroyBold text-[24px] mt-8 lg:mt-0 lg:text-[35px]">
            Learning objectives
          </h1>
          <p className="py-2">
            Upon the completion of the course you will learn to:
          </p>

          {objectives.map((obj) => (
            <div className="flex py-4 items-center text-yellow" key={obj}>
              <Check size={16} />
              <p className="ml-4">{obj}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="grid lg:grid-cols-2 bg-secondary mt-6 lg:mt-16 px-6 lg:px-24 py-12 items-start"         data-aos="fade-up"
        data-aos-duration="1000">
        <div className="border border-yellow rounded-lg lg:w-[55%]">
          <h3 className="border-b-[0.5px] border-yellow py-4 font-gilroyMd text-yellow text-center">
            Project Management
          </h3>
          <div className="py-4 px-8">
            {outlines.map((outline) => (
              <li key={outline} className="flex items-center py-4">
                <Circle
                  fill={outline === 'Courses schedules' ? '#fff' : '#818992'}
                  color={outline === 'Courses schedules' ? '#fff' : '#818992'}
                  size={9}
                  className="mr-2"
                />{' '}
                <p
                  className={`${
                    outline === 'Courses schedules'
                      ? 'text-white font-gilroyBold'
                      : 'text-grey font-gilroyMd'
                  }`}
                >
                  {outline}
                </p>
              </li>
            ))}
            <ul></ul>
          </div>
        </div>
        <div className="text-center lg:text-left">
          <h1 className="font-gilroyBold text-[24px] mt-8 lg:mt-0 lg:text-[35px]">
            Course schedules
          </h1>

          {schedules.map((schedule) => (
            <div key={schedule.week} className="mb-4 mt-4 text-sm">
              <p className="mb-2">{schedule.week}</p>
              <div className="px-4 py-3 flex justify-between rounded-lg border-[0.1px] border-yellow cursor-pointer">
                <p>{schedule.title}</p>
                <ChevronDown size={16} />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="pt-4 pb-12 bg-secondary w-full px-6 lg:px-24">
        <h1 className="font-gilroyBold text-[24px] my-8 lg:mt-0 lg:text-[35px]">
          Weekly Schedules
        </h1>
        <div className="grid grid-cols-5 gap-8">
          {weekSchedules.map((schedule) => (
            <div
              key={schedule.time}
              className="text-sm bg-[#2F3441] rounded-lg py-4 px-2 w-[200px] text-center"
            >
              <p className="text-yellow font-gilroyMd">{schedule.time}</p>
              <p className="my-10">{schedule.schedule}</p>
              <p>{schedule.detail}</p>
            </div>
          ))}
        </div>
      </div>


      <div className="grid lg:grid-cols-2 bg-primary mt-6 lg:mt-16 px-6 lg:px-24 py-8 items-start"         data-aos="fade-up"
        data-aos-duration="1000">
        <div className="border border-yellow rounded-lg lg:w-[70%]">
          <h3 className="border-b-[0.5px] border-yellow py-4 font-gilroyMd text-yellow text-center">
            Project Management
          </h3>
          <div className="py-4 px-8">
            {outlines.map((outline) => (
              <li key={outline} className="flex items-center py-4">
                <Circle
                  fill={outline === 'Benefits' ? '#fff' : '#818992'}
                  color={outline === 'Benefits' ? '#fff' : '#818992'}
                  size={9}
                  className="mr-2"
                />{' '}
                <p
                  className={`${
                    outline === 'Benefits'
                      ? 'text-white font-gilroyBold'
                      : 'text-grey font-gilroyMd'
                  }`}
                >
                  {outline}
                </p>
              </li>
            ))}
            <ul></ul>
          </div>
        </div>
        <div className="text-center lg:text-left">
          <h1 className="font-gilroyBold text-[24px] mt-8 lg:mt-0 lg:text-[35px]">
          Benefits
          </h1>
<p className='font-gilroyMd'>Our 4 benefits will give you the confidence to ace a real one</p>
<div className='grid grid-cols-2 gap-10 mt-10'>
          {benefits.map((benefit) => (
            <div key={benefit.title} className="text-sm border-white border-[0.5px] rounded-lg p-4">
                <img src={BenefitsArch} alt="benefits point" width={20} />

                <div className='mt-24'>
                    <p className='font-gilroyBold text-[18px]'>{benefit.title}</p>
                    <p className='text-[12px] mt-1'>{benefit.desc}</p>
                </div>
            </div>
          ))}
</div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
