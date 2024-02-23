import TransformDigitally from '@/assets/image/landing-banner.png';
import { Button } from '@/components/ui/button';
import { ArrowRightCircle, CornerDownRight } from 'lucide-react';
import Accelerate from '@/assets/image/accelerate.png';
import OurCourses from '@/components/courses/our-courses';
import { why } from '@/config/courses';
import SemiCircle from '@/assets/icons/semi-circle.png';
import TalkToExpert from '@/components/talk-to-expert';
import Testimonial from '@/components/testimonial';
import { testimonials } from '@/config/dataa';
import { Input } from '@/components/ui/input';
import Footer from '@/components/footer';
import ReactHelment from '@/components/helmet';
import { Link } from 'react-router-dom';
import { ABOUT_US_URL, EXPLORE_COURSES_URL } from '@/config/paths';
import { createClient } from 'contentful';
import { useContext, useEffect, useState } from 'react';
import Loading from '@/assets/animation/loading.svg';
import { CourseContext } from '@/contexts/course-context';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import axios from 'axios';
import { headers_, registerUserApi } from '@/config/api';
import { toast } from '@/components/ui/use-toast';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { paymentPlans } from '@/lib/utils';

const Home = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [showError, setShowError] = useState(false);
  const [open, setOpen] = useState(false);
  const [paymentPlan, setPaymentPlan] = useState('');
  const { allCourses, isLoading } = useContext(CourseContext);
  const [banner, setBanner] = useState({ image: '', title: '', desc: '' });
  const client = createClient({
    space: process.env.VITE_REACT_APP_SPACE_ID,
    accessToken: process.env.VITE_REACT_APP_ACCESS_TOKEN,
  });

  const handleChange = (value) => {
    setEmail(value);
    // Reset error message when the user types
    setShowError(false);
    // Validate email format
    const isValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value);
    setIsValidEmail(isValid);
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValidEmail) {
      setShowError(true);
      return;
    }

      setIsSubmitting(true);
      axios
        .post(
          registerUserApi,
          {
            "fields": {
              'Email': email,
              'Faqs': 'I want to join the community'
            },
          },
          { headers: headers_ }
        )
        .then(() => {
          setEmail('')
          toast({
            description: "You've successfully joined our waiting list",
          });
        }
        )
        .catch(() =>
          toast({
            variant: 'destructive',
            title: 'Uh oh! Something went wrong.',
            description: 'There was a problem with your request.',
          })
        )
        .finally(() => setIsSubmitting(false));
  };

  useEffect(() => {
    const getAllAssets = async () => {
      try {
        const assets = await client.getAssets();
        const total = assets.total;
        const asset = assets?.items[total - 1];
        setBanner({
          image: asset.fields.url,
          title: asset.fields.title,
          desc: asset.fields.description,
        });
      } catch (error) {
        console.log(error);
      }
    };
    getAllAssets();
  }, []);
  return (
    <div>
      <ReactHelment title="Accelerate your career today" />
      <main className="grid items-center justify-between md:grid-cols-2 px-6 md:px-12 md:py-6">
        <div className="md:pl-8 mt-8 text-center md:text-left capitalize">
          <h1 className="font-gilroyBold text-[35px] leading-[1.3] md:text-[55px]">
            <span className="text-yellow">
              {banner.title.split(' ')[0] || 'Accelerate'}
            </span>{' '}
            your career today with Digital Transformation
          </h1>

          <p className="px-4 md:px-0 md:w-[80%] my-4 normal-case">
            {banner.desc ||
              'TechSkill empowers tech enthusiasts through training, mentorship, in other to transition into their desired career.'}
          </p>

          <div className="md:flex md:space-x-8 mt-4 space-x-2 md:mt-8 space-y-3 md:space-y-0">
            <Link to={`${EXPLORE_COURSES_URL}?tab=0`}>
              <Button size="lg" className="">
                Explore courses <ArrowRightCircle className="ml-2" size={14} />
              </Button>
            </Link>

              <Button size="lg" variant="outline" onClick={() => setOpen(true)}>
                Pay for a service
              </Button>

          </div>
        </div>
        <img
          src={banner.image || TransformDigitally}
          alt="transforming digitally"
          className="md:h-[80vh] -ml-6 md:ml-0"
        />
      </main>
      <section className="py-16 md:py-24 bg-primary mt-6 md:mt-12 px-6 md:px-40">
        <div
          className="text-center w-full"
          ddata-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="1000"
        >
          <h1 className="text-[#EFF5FB] text-[35px] md:text-[60px] font-gilroyBold">
            What defines us
          </h1>
          <p className="text-base text-grey font-gilroyMd -mt-2 px-12 md:px-0">
            See who we are and unlock your new potential with us
          </p>
        </div>

        <div className="border-[0.5px] border-[#818992] px-6 py-6 md:py-12 rounded-[22px] md:rounded-[32px] bg-secondary mt-12 md:mt-40 flex justify-between relative">
          <div
            className="px-2 md:px-12 md:w-1/2"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
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
                <Link to={ABOUT_US_URL} className="ml-1">Learn more</Link>
              </div>
            </div>
          </div>
          <div>
            <img
              src={Accelerate}
              alt="Acceletate"
              className="w-[100px] md:w-[500px] absolute right-0 bottom-0"
              data-aos="fade-up-right"
              data-aos-duration="1000"
            />
          </div>
        </div>
      </section>

      <section
        className="py-8 md:py-24 px-6 md:px-40 w-full"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
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
          {isLoading ? (
            <div className="w-full flex justify-center">
              <img src={Loading} alt="loading" />
            </div>
          ) : (
            <>
              {allCourses?.slice(2, 5).map((course) => (
                <OurCourses
                  title={course?.fields?.title}
                  image={course?.fields?.image?.fields?.file?.url}
                  key={course?.fields?.title}
                  description={course?.fields?.shortDescription}
                  href={`explore-courses/details/${course?.sys?.id}`}
                />
              ))}
            </>
          )}
        </div>
        <div className="w-full flex justify-center">
          <Link to={`${EXPLORE_COURSES_URL}?tab=0`}>
            <Button size="lg" variant="outline" className="mt-10">
              Explore more courses
            </Button>
          </Link>
        </div>
      </section>

      <section
        className="w-full bg-primary relative"
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="1000"
      >
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
              <h3 className="font-gilroyBold text-[18px] md:text-[24px] mt-10">
                {wh.title}
              </h3>
              <div className="h-[8px] bg-yellow w-[15%]" />
              <p className="text-sm mt-4 md:mt-8 leading-7">{wh.description}</p>
            </div>
          ))}
        </div>

        <TalkToExpert />
      </section>

      <section
        className="bg-secondary px-6 md:px-12 py-8 w-full mb-9"
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="1000"
      >
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
              key={testimonial.name}
            />
          ))}
        </div>

        <div className="border border-grey p-8 rounded-xl md:w-[45vw] mx-auto mt-8">
          <h1 className="text-[#EFF5FB] text-[18px] md:text-[30px] font-gilroyBold text-center">
            Ready to join a cohort?
          </h1>
            <form onSubmit={handleSubmit}>
          <div className="flex items-center gap-x-4 mt-4">
              <Input
                className="bg-secondary"
                type="email"
                placeholder="Enter your email"
                value={email}
                defaultValue=''
                onChange={({ target }) => handleChange(target.value)}
              />
              <Button size="lg" loading={isSubmitting} loadingText="Joining...">Join</Button>
          </div>
            </form>
            {showError && !isValidEmail && <div className='text-[#c34141] text-sm mt-1'>Please enter a valid email address.</div>}
        </div>
      </section>

      <Dialog onOpenChange={setOpen} open={open}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-black font-gilroyBold">
              Choose Payment Plan
            </DialogTitle>
            <DialogDescription>
            Use the options below to pay for any of our services.
            </DialogDescription>
          </DialogHeader>
          <div>
            <Select
              onValueChange={(value) => setPaymentPlan(value)}
              defaultValue={paymentPlans[0].paymentLink}
            >
              <SelectTrigger className="w-full text-primary font-gilroyMd">
                <SelectValue placeholder="Select a plan" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                {paymentPlans.map((plan) => (
                  <SelectItem value={plan.paymentLink}>{plan.title}</SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <Link to={paymentPlan}>
            <Button type="submit" size="sm" className="w-full">
              Make payment
            </Button>
          </Link>
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default Home;
