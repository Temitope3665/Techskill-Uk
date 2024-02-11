import CoursePeriod, { Perks, Pricing } from '@/components/courses/course-perks';
import { Button } from '@/components/ui/button';
import { REGISTRATION_URL } from '@/config/paths';
import { Check, ChevronDown, Circle, MoveRight, Star } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import BenefitsArch from '@/assets/icons/benefit-arch.png';
import { createClient } from 'contentful'
import Loading from "@/assets/animation/loading.svg"
import { useEffect, useState } from 'react';
import { OnlineMentoring } from '@/components/courses/explore-programmes';
import Footer from '@/components/footer';

const CourseDetails = () => {
  const { slug } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [course, setCourse] = useState();

  const client = createClient({
    space: process.env.VITE_REACT_APP_SPACE_ID,
    accessToken: process.env.VITE_REACT_APP_ACCESS_TOKEN,
  });

  useEffect(() => {
    setIsLoading(true);
    const getCourseById = async () => {
      try {
        const currentCourse = await client.getEntry(slug);
        setCourse(currentCourse?.fields);
        setIsLoading(false)
      } catch (error) {
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: "There was a problem fetching the server.",
          action: <ToastAction altText="Try again">Try again</ToastAction>,
        })
        setIsLoading(false)
      }
    };
    getCourseById();
  }, []);

  return (
    <>
    {isLoading ? <div className='w-full flex justify-center'><img src={Loading} alt="loading" /></div>  : (
      <div className="bg-primary -mt-4">
        <div className="lg:flex justify-between items-center px-6 lg:px-12 pt-12">
          <div className="lg:w-[55%] text-center lg:text-left">
            <h1 className="font-gilroyBold text-[24px] lg:text-[45px]">
              {course?.title}
            </h1>
            <h3 className="mt-2 lg:w-[70%]">
              {course?.description}
            </h3>

            <CoursePeriod
              duration={course?.studyPeriod}
              time={course?.daysPerWeek}
            />

            <Link to={REGISTRATION_URL}>
              <Button size="lg" className="lg:w-[40%] w-full mt-4">
                Enroll now <MoveRight className="ml-3" />{' '}
              </Button>
            </Link>

            <Perks perks={course?.perks?.perk} />
          </div>
          <div className="lg:w-[40%] mt-6 lg:mt-0">
            <img src={course?.image?.fields?.file?.url} alt="product management course image" />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 bg-secondary mt-6 lg:mt-24 px-6 lg:px-24 py-12 lg:py-16 relative"         data-aos="fade-up"
          data-aos-duration="1000">
          <div className="border border-yellow rounded-lg lg:w-[55%]">
            <h3 className="border-b-[0.5px] border-yellow py-4 font-gilroyMd text-yellow text-center">
              {course?.title}
            </h3>
            <div className="py-4 px-8">
              {course?.courseSection?.section?.map((outline) => (
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
              {course?.aboutCourse}
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
              {course?.title}
            </h3>
            <div className="py-4 px-8">
              {course?.courseSection?.section?.map((outline) => (
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

            {course?.courseObjectives?.objectives?.map((obj) => (
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
              {course?.title}
            </h3>
            <div className="py-4 px-8">
              {course?.courseSection?.section?.map((outline) => (
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

            {course?.courseSchedules?.scheduled?.map((schedule) => (
              <div key={`week-${schedule.week}`} className="mb-4 mt-4 text-sm">
                <p className="mb-2">Week {schedule?.week}</p>
                <div className="px-4 py-3 flex justify-between rounded-lg border-[0.1px] border-yellow cursor-pointer">
                  <p>{schedule?.topic}</p>
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
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-8">
            {course?.courseTimetable?.timetable?.map((schedule) => (
              <div
                key={schedule?.type}
                className="text-sm bg-[#2F3441] rounded-lg py-4 px-2 w-[150px] lg:w-[200px] text-center"
              >
                <p className="text-yellow font-gilroyMd">{schedule?.day}</p>
                <p className="my-10">{schedule?.duration}</p>
                <p>{schedule?.type}</p>
              </div>
            ))}
          </div>
        </div>


        <div className="grid lg:grid-cols-1 bg-primary mt-6 lg:mt-16 px-6 lg:px-24 py-8 items-start"         data-aos="fade-up"
          data-aos-duration="1000">
          <div className="text-center lg:text-left">
            <h1 className="font-gilroyBold text-[24px] mt-2 lg:mt-0 lg:text-[35px]">
            Benefits
            </h1>
  <p className='font-gilroyMd'>Our {course?.benefits?.objectives?.length} benefits will give you the confidence to ace a real one</p>
  <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10'>
            {course?.benefits?.objectives?.map((benefit) => (
              <div key={benefit.title} className="text-sm border-white border-[0.5px] rounded-lg p-4">
                  <img src={BenefitsArch} alt="benefits point" width={20} />

                  <div className='mt-24'>
                      <p className='font-gilroyBold text-[18px]'>{benefit.title}</p>
                      <p className='text-[12px] mt-1'>{benefit.description}</p>
                  </div>
              </div>
            ))}
  </div>
          </div>
        </div>

        <div className="lg:flex justify-between bg-secondary mt-6 lg:mt-16 px-6 lg:px-20 py-8 items-start"         data-aos="fade-up"
          data-aos-duration="1000">
          <div className="w-[100%]">
            <h1 className="font-gilroyBold text-[24px] mt-8 lg:mt-0 lg:text-[35px]">
            Pricing
            </h1>
          <p className='font-gilroyMd lg:w-[50%] text-sm lg:text-base'>With our flexible pricing plans, we’ve made it easier for you to pay for the course. You have the option of paying now for a discount or paying in installments</p>
          <div className='grid lg:grid-cols-2 gap-8 mt-10'>
            <Pricing description="Get the best deal by 
          paying upfront" description2="save 80% by paying instalmentally" title="Upfront" price="250" href="https://buy.stripe.com/test_00g9DJ6374jPbzG9AA" />
            <Pricing description="Get the best deal by 
          paying upfront" description2="save 80% by paying instalmentally" title="Pay full" price="600" href="https://buy.stripe.com/test_00g9DJ6374jPbzG9AA" />

          </div>
          </div>
        </div>


        <div className=" bg-primary mt-6 lg:mt-10 px-6 lg:px-20 py-3 items-start"         data-aos="fade-up"
          data-aos-duration="1000">
            <h1 className="font-gilroyBold text-[24px] mt-8 lg:mt-0 lg:text-[35px]">
            Tools you’ll learn from
            </h1>
          <div className={`grid grid-cols-${course?.linkToToolsToLearn?.links?.length} gap-8 mt-10`}>
            {course?.linkToToolsToLearn?.links?.map((link) => (
              <div className='bg-secondary px-3 py-8 rounded-lg flex justify-center items-center'>
                <img src={link} alt={link} width={200} />
              </div>
              ))}
              </div>
        </div>

        <div className='bg-secondary mt-6 lg:mt-10 px-6 lg:px-36 py-8'>
          <OnlineMentoring imageWidth="lg:w-[30%]" />
        </div>

        <Footer />
      </div>
    )}
    </>
  );
};

export default CourseDetails;
