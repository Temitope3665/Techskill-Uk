import TransformDigitally from '@/assets/image/landing-banner.png';
import { Button } from '@/components/ui/button';
import { ArrowRightCircle, CornerDownRight } from 'lucide-react';
import Accelerate from '@/assets/image/accelerate.png';
import OurCourses from '@/components/our-courses';
import { courses, why } from '@/config/courses';
import SemiCircle from '@/assets/icons/semi-circle.png';
import TalkToExpert from '@/components/talk-to-expert';
import Testimonial from '@/components/testimonial';
import { testimonials } from '@/config/data';
import { Input } from '@/components/ui/input';
import Footer from '@/components/footer';
import ReactHelment from '@/components/helmet';

const Home = () => {
  return (
    <div>
      <ReactHelment title="Accelerate your career today" />
      <main className="grid items-center justify-between md:grid-cols-2 px-6 md:px-12 md:py-6">
        <div className="md:pl-8 mt-8 text-center md:text-left">
          <h1 className="font-gilroyBold text-[35px] md:text-[55px] leading-tight">
            <span className="text-yellow">Accelerate</span> your career today
            with Digital Transformation
          </h1>
          <p className="md:w-[80%] mt-2 text-base">
            TechSkill empowers tech enthusiasts through training, mentorship, in
            other to transition into their desired career.
          </p>

          <div className="md:flex md:space-x-8 mt-4 space-x-2 md:mt-8 space-y-3 md:space-y-0">
            <Button size="lg" className="">
              Explore courses <ArrowRightCircle className="ml-2" size={14} />
            </Button>
            <Button size="lg" variant="outline">
              Pay for a cohort
            </Button>
          </div>
        </div>
        <img
          src={TransformDigitally}
          alt="transforming digitally"
          className="md:h-[80vh] -ml-6 md:ml-0"
        />
      </main>
      <section className="py-16 md:py-24 bg-primary mt-6 md:mt-12 px-6 md:px-40">
        <div className="text-center w-full" ddata-aos="fade-up" data-aos-easing="linear" data-aos-duration="1000">
          <h1 className="text-[#EFF5FB] text-[35px] md:text-[60px] font-gilroyBold">
            What define us
          </h1>
          <p className="text-base text-grey font-gilroyMd -mt-2 px-12 md:px-0">
            See who we are and unlock your new potential with us
          </p>
        </div>

        <div className="border-[0.5px] border-[#818992] px-6 py-6 md:py-12 rounded-[22px] md:rounded-[32px] bg-secondary mt-12 md:mt-40 flex justify-between relative">
          <div className="px-2 md:px-12 md:w-1/2" data-aos="fade-left" data-aos-duration="1000">
            <h2 className="text-yellow font-gilroyBold text-[18] md:text-[28px]">
              Get transformed
            </h2>
            <div className="text-base">
              <p className="">
                TechSkill Accelerate serves as the gateway connecting tech
                enthusiasts to the tech industry. Our fervour lies in empowering
                individuals with easily attainable, no-coding tech skills,
                catering to those eager to swiftly transition into the tech
                field.
              </p>
              <p className="text-grey mt-8">
                Our hands-on courses are meticulously crafted for immediate
                application in the tech sphere.
              </p>
              <div className="flex text-yellow cursor-pointer mt-12 text-sm md:text-base">
                <CornerDownRight strokeWidth={1} />
                <p className="ml-1">Learn more</p>
              </div>
            </div>
          </div>
          <div>
            <img
              src={Accelerate}
              alt="Acceletate"
              className="w-[100px] md:w-[500px] absolute right-0 bottom-0"
              data-aos="fade-up-right" data-aos-duration="1000"
            />
          </div>
        </div>
      </section>

      <section className="py-8 md:py-24 px-6 md:px-40 w-full" data-aos="fade-up" data-aos-duration="1000">
        <div className="text-center w-full">
          <h1 className="text-[#EFF5FB] text-[30px] md:text-[60px] font-gilroyBold">
            Explore our courses
          </h1>
          <p className="text-sm md:text-base text-grey font-gilroyMd md:-mt-2">
            Explore our courses, speak with a learning advisor and transition
            into tech
          </p>
        </div>
        <div className="mt-8 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12">
          {courses.slice(0, 3).map((course) => (
            <OurCourses
              title={course.title}
              image={course.image}
              key={course.title}
              description={course.desc}
            />
          ))}
        </div>
        <div className="w-full flex justify-center">
          <Button size="lg" variant="outline" className="mt-10">
            Explore more courses
          </Button>
        </div>
      </section>

      <section className="w-full bg-primary relative" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1000">
        <img
          src={SemiCircle}
          alt="semi circle"
          className="absolute w-[250px] md:w-[400px]"
        />
        <div className="text-center w-full py-10 md:py-20">
          <h1 className="text-[#EFF5FB] text-[30px] md:text-[60px] font-gilroyBold">
            How we help...
          </h1>
          <p className="md:text-base text-grey font-gilroyMd text-sm md:-mt-2">
            Find out how we help
          </p>
        </div>
        <div className="grid md:grid-cols-4 px-4 md:px-12 pb-12 md:gap-y-0 gap-y-4 gap-x-8">
          {why.map((wh) => (
            <div
              className="border-grey border border-[0.5] rounded-[16px] p-4"
              key={wh.title}
            >
              <img
                src={wh.icon}
                alt="skill training icon"
                className="w-[40px] mt-7"
              />
              <h3 className="font-gilroyBold text-[18px] md:text-[24px] mt-10">{wh.title}</h3>
              <div className="h-[8px] bg-yellow w-[15%]" />
              <p className="text-sm mt-4 md:mt-8 leading-7">{wh.description}</p>
            </div>
          ))}
        </div>

        <TalkToExpert />
      </section>

      <section className="bg-secondary px-6 md:px-12 py-8 w-full mb-9" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1000">
        <h4 className="font-medium text-sm">WHY TECHSKILL UK</h4>
        <h2 className="font-regularItalic text-[24px] md:text-[35px] text-grey">
          See what people say about us...
        </h2>

        <div className="grid md:grid-cols-3 py-8 gap-x-6 gap-y-4">
          {testimonials.map((testimonial) => (
            <Testimonial
              image={testimonial.image}
              name={testimonial.name}
              review={testimonial.review}
              position={testimonial.position}
            />
          ))}
        </div>

        <div className="border border-grey p-8 rounded-xl md:w-[45vw] mx-auto mt-8">
          <h1 className="text-[#EFF5FB] text-[18px] md:text-[30px] font-gilroyBold text-center">
            Ready to join a cohort?
          </h1>
          <div className='flex items-center gap-x-4 mt-4'>
            <Input className="bg-secondary" type='email' placeholder='Enter your email' />
            <Button size="lg">Join</Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
