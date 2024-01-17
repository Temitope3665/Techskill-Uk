import Woman from '@/assets/image/happy-african-in-libary.png';
import CourseTab from '@/components/courses/course-tab';
import { tabData } from '@/config/dataa';

const AllCourses = () => {
  return (
    <div className="px-6 md:px-12 md:py-6">
      <div className="mt-5 relative w-full">
        <img src={Woman} alt="happy-african-in-libary" className='h-[200px] md:h-full obj object-cover rounded-xl' />
        <div className="absolute top-[25%] md:top-[35%] md:right-[25%] text-center md:w-1/2">
          <h1 className="font-gilroyBold text-[25px] md:text-[50px]">
            Our Programmes
          </h1>
          <p className="px-7 md:px-14 text-[12px] md:text-base">
            Our online courses offer flexible learning schedules, allowing you
            to balance your personal and professional commitments while
            acquiring new skills.
          </p>
        </div>
      </div>

      <div className="w-full md:px-20">
        <h1 className="text-[#EFF5FB] text-[20px] md:text-[35px] font-gilroyBold text-center py-8">
          Explore our courses
        </h1>

        <div>
          <CourseTab tabs={tabData} />
        </div>
      </div>
    </div>
  );
};

export default AllCourses;
