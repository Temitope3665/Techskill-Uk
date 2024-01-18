import OurOfferings from '@/assets/image/offerings.png';
import { Button } from '@/components/ui/button';
import { useRef, useState } from 'react';
import Star2 from '@/assets/image/stars-2.png';
import GlobalTalent from '@/assets/image/global-talent.png';
import { ChevronLeftCircle, ChevronRightCircle } from 'lucide-react';
import OurCourses from '@/components/courses/our-courses';
import { courses } from '@/config/courses';
import Footer from '@/components/footer';

const Offerings = () => {
  const scrollContainerRef = useRef(null);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleScroll = () => {
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleScrollLeft = () => {
    scrollContainerRef.current.scrollLeft -= 100; // Adjust the scroll amount as needed
  };

  const handleScrollRight = () => {
    scrollContainerRef.current.scrollLeft += 100; // Adjust the scroll amount as needed
  };
  const disableLeftScroll =
    scrollContainerRef.current &&
    scrollLeft ===
      scrollContainerRef.current.scrollWidth -
        scrollContainerRef.current.clientWidth;
  return (
    <div className="">
      <div className="px-6 lg:px-12 relative">
        <div className="lg:flex justify-between items-center lg:px-24">
          <div className="lg:w-[45%]">
            <h1 className="text-[24px] lg:text-[40px] font-gilroyBold text-center lg:text-left">Offerings</h1>
            <p className="text-grey lg:text-base text-sm text-center lg:text-left">
              Ready to take a step in you tech career but unsure where to begin
              ? Book a call with our learning advisor today! Get personalised
              guidance, choose the perfect tech program and enrol confidently
            </p>
            <Button size="lg" className="lg:w-[80%] mt-6 w-full">
              Book a call
            </Button>
          </div>
          <div className="lg:w-[35%] mt-8 lg:mt-0">
            <img src={OurOfferings} alt="humans learning on their laptop" />
          </div>
          <img
            src={Star2}
            alt="star"
            className="absolute bottom-0 w-[100px] lg:w-[400px] right-0"
          />
        </div>
      </div>

      <div className="bg-primary py-8 my-12 px-6 lg:px-12 ">
        <h1 className="text-[24px] lg:text-[40px] font-gilroyBold text-center">
          Explore our training programmes
        </h1>
        <p className="text-grey text-center">
          Explore our courses, speak with a learning advisor and transition into
          tech
        </p>

        <div className="lg:flex justify-between mt-16 px-1 w-full items-center pb-8">
          <ChevronLeftCircle
            className={`text-yellow lg:flex hidden ${
              scrollLeft === 0
                ? 'cursor-not-allowed opacity-40'
                : 'cursor-pointer'
            }`}
            size={50}
            strokeWidth={1}
            onClick={handleScrollLeft}
            disabled={scrollLeft === 0}
          />

          <div
            className="lg:flex lg:gap-12 w-full lg:w-[75vw] lg:overflow-auto"
            ref={scrollContainerRef}
            onScroll={handleScroll}
          >
            {courses.map((course) => (
              <OurCourses
                title={course.title}
                image={course.image}
                key={course.title}
                description={course.desc}
                className="lg:w-[300px] my-6 lg:my-0"
              />
            ))}
          </div>
          <ChevronRightCircle
            className={`text-yellow lg:flex hidden ${
              disableLeftScroll
                ? 'cursor-not-allowed opacity-40'
                : 'cursor-pointer'
            }`}
            size={50}
            strokeWidth={1}
            onClick={handleScrollRight}
            disabled={disableLeftScroll}
          />
        </div>
      </div>

      <div className="lg:flex justify-between items-center px-6 lg:px-24 py-12">
        <div className="lg:w-[50%]">
          <h1 className="text-[24px] lg:text-[40px] font-gilroyBold text-center lg:text-left">Global Talent Visa</h1>
          <p className="text-grey lg:text-base text-sm text-center lg:text-left">
            Ready to take a step in you tech career but unsure where to begin ?
            Book a call with our learning advisor today! Get personalised
            guidance, choose the perfect tech program and enrol confidently
          </p>
          <Button size="lg" className="lg:w-[80%] w-full mt-6">
            Book consultation
          </Button>
        </div>
        <div className="lg:w-[35%] hidden lg:block">
          <img src={GlobalTalent} alt="global talent" />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Offerings;
