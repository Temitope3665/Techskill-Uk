import AboutUsImage from '@/assets/image/about-us-image.png';
import AccelerateCareer from '@/assets/image/team-work.png';
import Star2 from '@/assets/image/stars-2.png';
import Star3 from '@/assets/icons/stars-3.png';
import { experts, us } from '@/config/dataa';
import Accelerate from '@/assets/image/accelerate-2.png';
import HumanStanding from '@/assets/image/humans-standing.png';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Footer from '@/components/footer';
import JoinOurCommunity from '@/components/join-community';

const AboutUs = () => {
  return (
    <div className="">
      <div className="px-6 lg:px-12 pb-12">
        <div className="lg:flex justify-between w-full items-center mt-4 lg:mt-16">
          <div className="lg:w-[45%] text-center lg:text-left">
            <h1 className="text-[30px] lg:text-[60px] font-gilroyBold">
              Your Tech Career Accelerator
            </h1>
            <div className="h-1 w-[30%] bg-yellow -mt-3 hidden lg:flex" />
            <p className="lg:mt-6 lg:w-[80%] text-base">
              TechSkill empowers tech enthusiasts through training, mentorship,
              in other to transition into their desired career.
            </p>
          </div>
          <div className="lg:w-[45%] mt-8 lg:mt-0">
            <img src={AboutUsImage} alt="about us" />
          </div>
        </div>
      </div>

      <div className="bg-primary px-6 lg:px-12 lg:flex justify-between items-center pt-16">
        <div className="lg:w-[50%]">
          <img
            src={AccelerateCareer}
            alt="team work dream career"
            className="lg:h-[650px] pb-12"
            data-aos="fade-right"
            data-aos-easing="linear"
            data-aos-duration="1000"
          />
        </div>
        <div
          className="lg:w-[50%] lg:px-12 relative lg:h-[650px] lg:pt-14"
          data-aos="fade-left"
          data-aos-easing="linear"
          data-aos-duration="1000"
        >
          <h1 className="text-[24px] lg:text-[50px] font-gilroyBold  lg:leading-[48px] text-center lg:text-left">
            Let’s accelerate you to your dream career
          </h1>
          <div className="lg:w-[90%] mt-3 lg:mt-8 text-center lg:text-left">
            <p className="text-[14px] lg:text-[18px]">
              We are a Global Training Institute. Techskill provides
              instructor-led, expert training to help motivated professionals
              attain dream careers.
            </p>
            <p className="mt-4 text-[14px] lg:text-[18px]">
              Our immersive, hands-on courses teach cutting-edge, high in
              demand, technical, and strategic skills that create resilient
              careers.
            </p>
            <p className="mt-4 text-[14px] lg:text-[18px]">
              Leverage our expert instructors’ decades of global experience to
              accelerate your career. Pivot, transition and grow, with a mentor
              by your side.
            </p>
          </div>
          <img
            src={Star2}
            alt="star"
            className="absolute bottom-0 w-[100px] lg:w-[400px] right-0"
          />
        </div>
      </div>

      <div
        className="bg-secondary pt-12 lg:pt-24 pb-32 lg:pb-48 relative"
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="1000"
      >
        <div className="grid lg:grid-cols-3 px-4 lg:px-12 lg:gap-y-0 gap-x-12 gap-y-8">
          {us.map((wh) => (
            <div
              className="border-grey border border-[0.5] rounded-[16px] p-4"
              key={wh.title}
            >
              <img
                src={wh.icon}
                alt="skill training icon"
                className="w-[40px] mt-7"
              />
              <h3 className="font-gilroyBold text-[18px] lg:text-[24px] mt-14">
                {wh.title}
              </h3>
              <div className="h-[8px] bg-yellow w-[15%]" />
              <p className="text-sm mt-4 lg:mt-8 leading-7">{wh.description}</p>
            </div>
          ))}
          <img
            src={Accelerate}
            alt="accelerate"
            className="w-[200px] lg:w-[400px] absolute right-0 bottom-0"
          />
        </div>
      </div>

      <div className="bg-primary px-6 lg:px-12 lg:flex justify-between items-center py-6 lg:py-16 relative">
        <div
          className="lg:w-[50%] lg:px-12 relative pt-14 text-center lg:text-left"
          data-aos="fade-right"
          data-aos-easing="linear"
          data-aos-duration="1000"
        >
          <h1 className="text-[30px] lg:text-[50px] font-gilroyBold leading-[48px]">
            What we stand for
          </h1>
          <div className="lg:w-[90%] mt-2 lg:mt-8">
            <p className="text-[18px]">
              TechSkill Accelerate serves as the gateway connecting tech
              enthusiasts to the tech industry. Our fervour lies in empowering
              individuals with easily attainable, no-coding tech skills,
              catering to those eager to swiftly transition into the tech field.
            </p>
            <p className="text-grey mt-8">
              Our hands-on courses are meticulously crafted for immediate
              application in the tech sphere.
            </p>
          </div>
        </div>

        <div className="lg:w-[40%] mt-8 lg:mt-0">
          <img
            src={HumanStanding}
            alt="human achieving common goal"
            className="pb-12"
            data-aos="fade-left"
            data-aos-easing="linear"
            data-aos-duration="1000"
          />
        </div>
        <img
          src={Star3}
          alt="star"
          className="absolute right-1 w-[100px] bottom-0"
        />
      </div>

      <JoinOurCommunity />

      <div
        className="py-10 lg:py-20 bg-primary w-full px-6 lg:px-12"
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="1000"
      >
        <h1 className="font-gilroyBold text-[30px] lg:text-[50px] lg:mt-3 text-center">
          Meet Our Experts
        </h1>

        <div className="w-full grid grid-cols-2 lg:grid-cols-5 gap-4 mt-2 justify-items-center text-center">
          {experts.map((expert) => (
            <div className="text-center mt-8" key={expert.name}>
              <div className="rounded-full w-[120px] h-[120px] mx-auto">
                <img src={expert.image} alt={expert.name} />
              </div>
              <p className="text-sm font-gilroylg mt-2">{expert.name}</p>
              <p className="text-grey text-xs">{expert.position}</p>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AboutUs;
