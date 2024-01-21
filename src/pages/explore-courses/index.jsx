import Woman from '@/assets/image/happy-african-in-libary.png';
import CourseTab from '@/components/courses/course-tab';
import ReactHelment from '@/components/helmet';
import { tabData } from '@/config/dataa';
import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

const AllCourses = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const activeTab = searchParams.get('tab');
  useEffect(() => {
    if (!activeTab) {
      navigate('?tab=0');
    }
  }, []);
  return (
    <div className="px-6 lg:px-12 lg:py-6">
      <ReactHelment title="Explore Our Courses" />
      <div className="mt-5 relative w-full">
        <img
          src={Woman}
          alt="happy-african-in-libary"
          className="h-[200px] lg:h-full obj object-cover rounded-xl w-full"
        />
        <div className="absolute top-[25%] lg:top-[35%] lg:right-[25%] text-center lg:w-1/2">
          <h1 className="font-gilroyBold text-[25px] lg:text-[50px]">
            Our Programmes
          </h1>
          <p className="px-7 lg:px-14 text-[12px] lg:text-base">
            Our online courses offer flexible learning schedules, allowing you
            to balance your personal and professional commitments while
            acquiring new skills.
          </p>
        </div>
      </div>

      <div className="w-full lg:px-20">
        <h1 className="text-[#EFF5FB] text-[20px] lg:text-[35px] font-gilroyBold text-center py-8">
          Explore our courses
        </h1>

        <CourseTab tabs={tabData} />
      </div>
    </div>
  );
};

export default AllCourses;
