import OurOfferings from '@/assets/image/offerings.png';
import { useContext, useEffect, useRef, useState } from 'react';
import Star2 from '@/assets/image/stars-2.png';
import JobSupport from '@/assets/image/job-supporting.png';
import GlobalTalent from '@/assets/image/global-talent.png';
import { ChevronLeftCircle, ChevronRightCircle } from 'lucide-react';
import OurCourses from '@/components/courses/our-courses';
import { courses } from '@/config/courses';
import Footer from '@/components/footer';
import { useLocation } from 'react-router-dom';
import { PopupButton, useCalendlyEventListener } from 'react-calendly';
import { Button } from '@/components/ui/button';
import { CourseContext } from '@/contexts/course-context';
import { OnlineMentoring } from '@/components/courses/explore-programmes';

const Offerings = () => {
  const { allCourses, isLoading } = useContext(CourseContext);
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

  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const location = useLocation();

  useCalendlyEventListener({
    onEventScheduled: (e) => console.log(e.data.payload),
  });

  useEffect(() => {
    // Check if there is a hash in the URL
    if (location.hash) {
      const targetElement = document.querySelector(location.hash);
      if (targetElement) {
        targetElement.scrollIntoView({
          block: 'start',
          inline: 'nearest',
          behavior: 'instant',
        });
      }
    }
  }, [location.hash]);
  return (
    <div className="mt-12">
      <div className="px-6 lg:px-12 relative">
        <div className="lg:flex justify-between items-center lg:px-24">
          <div className="lg:w-[45%]">
            <h1 className="text-[24px] lg:text-[40px] font-gilroyBold text-center lg:text-left">
              Offerings
            </h1>
            <p className="text-grey lg:text-base text-sm text-center lg:text-left">
              TechSkill empowers tech enthusiasts through comprehensive
              training, personalised mentorship, and dedicated career support.
              Our holistic approach equips individuals with the skills and
              guidance needed to seamlessly transition into their desired
              careers in the tech industry.
            </p>
            <Button size="lg" className="lg:w-[50%] w-full mt-6">
              <PopupButton
                url={`${process.env.REACT_CALENDLY_URL}`}
                rootElement={document.getElementById('root')}
                text="Book a call"
                styles={{ width: '100%', height: '100%' }}
              />
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

      <div
        className="bg-primary py-8 my-12 px-6 lg:px-12"
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="1000"
      >
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
            <>
              {isLoading ? (
                ''
              ) : (
                <>
                  {allCourses?.map((course) => (
                    <OurCourses
                      title={course?.fields?.title}
                      image={course?.fields?.image?.fields?.file?.url}
                      key={course?.fields?.title}
                      description={course?.fields?.shortDescription}
                      href={`details/${course?.sys?.id}`}
                      className="lg:w-[350px] my-6 lg:my-0"
                    />
                  ))}
                </>
              )}
            </>
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

      <section>
        <div
          className="lg:flex justify-between items-center px-6 lg:px-24 py-4 lg:py-12"
          id="globalTalent"
          ref={section1Ref}
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="1000"
        >
          <div className="lg:w-[50%]">
            <h1 className="text-[24px] lg:text-[40px] font-gilroyBold text-center lg:text-left">
              Global Talent Visa
            </h1>
            <p className="text-grey lg:text-base text-sm text-center lg:text-left">
              Streamline your visa application process with our specialised
              service designed to cater to tech professionals seeking global
              opportunities. Benefit from our expertise and guidance as we
              assist you through the intricate visa application procedures,
              ensuring a smooth and efficient process.
            </p>

            <Button size="lg" className="lg:w-[50%] w-full mt-6">
              <PopupButton
                url={`${process.env.REACT_CALENDLY_URL}`}
                rootElement={document.getElementById('root')}
                text="Book consultation"
                styles={{ width: '100%', height: '100%' }}
              />
            </Button>
          </div>
          <div className="lg:w-[35%] hidden lg:block h-[500px]">
            <img src={GlobalTalent} alt="global talent" className="h-full" />
          </div>
        </div>
      </section>

      <div
        className="lg:flex justify-between items-center px-6 lg:px-24 py-4 lg:py-12 bg-primary"
        id="jobSupport"
        ref={section2Ref}
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="1000"
      >
        <div className="lg:w-[35%] hidden lg:block h-[500px]">
          <img
            src={JobSupport}
            alt="groups supporting job"
            className="h-full"
          />
        </div>
        <div className="lg:w-[50%]">
          <h1 className="text-[24px] lg:text-[40px] font-gilroyBold text-center lg:text-left">
            Career Support
          </h1>
          <p className="text-grey lg:text-base text-sm text-center lg:text-left">
            Elevate your job search with our comprehensive career support
            offerings tailored to tech professionals. Our expert team assists
            you in crafting compelling CVs that highlight your skills and
            experiences effectively. Receive personalised guidance on job
            applications, including strategies for targeting key opportunities
            in the tech industry. Prepare confidently for interviews with our
            tailored coaching sessions, equipping you with the skills and
            confidence needed to land your dream job in the tech field.
          </p>

          <Button size="lg" className="lg:w-[50%] w-full mt-6">
            <PopupButton
              url={`${process.env.REACT_CALENDLY_URL}`}
              rootElement={document.getElementById('root')}
              text="Book a call"
              styles={{ width: '100%', height: '100%' }}
            />
          </Button>
        </div>
      </div>

      <section className='px-6 lg:px-20 pb-8' id="mentorship-call">
        <OnlineMentoring imageWidth="w-[45%]" title="Book Mentorship and Consultation" />
      </section>

      <Footer />
    </div>
  );
};

export default Offerings;
