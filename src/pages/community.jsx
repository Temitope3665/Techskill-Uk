import Connect from '@/assets/image/connect-tech-leaders.png';
import Learning from '@/assets/image/learning.png';
import Twitter from '@/assets/image/twitter.png';
import Footer from '@/components/footer';
import ReactHelment from '@/components/helmet';
import JoinOurCommunity from '@/components/join-community';
import { Button } from '@/components/ui/button';
import { CalendarCheck, MoveRight, TimerIcon } from 'lucide-react';

const Community = () => {
  return (
    <div className="py-8">
      <ReactHelment title="Our Community" />
      <div className="lg:flex justify-between w-full items-center mt-4 lg:mt-16 px-6 lg:px-12">
        <div className="lg:w-[45%] text-center lg:text-left">
          <h1 className="text-[30px] lg:text-[60px] font-gilroyBold">
            Join the Techskill community
          </h1>
          <div className="h-1 w-[30%] bg-yellow -mt-3 hidden lg:flex" />
          <p className="lg:mt-6 lg:w-[80%] text-base text-grey">
            Ready to take a step in you tech career but unsure where to begin ?
            Book a call with our learning advisor today! Get personalised
            guidance, choose the perfect tech program and enrol confidently
          </p>
        </div>
        <div className="lg:w-[45%] mt-8 lg:mt-0 ml-6 lg:ml-0">
          <img src={Connect} alt="connect tech leaders" />
        </div>
      </div>

      <div className="bg-primary px-6 lg:px-12 lg:flex justify-between items-center py-6 lg:py-16">
        <div
          className="lg:w-[50%] text-center lg:text-left"
          data-aos="fade-right"
          data-aos-easing="linear"
          data-aos-duration="1000"
        >
          <h1 className="text-[30px] lg:text-[50px] font-gilroyBold leading-[48px] lg:-mt-8">
            Learn from a diverse group of peers
          </h1>
          <div className="lg:w-[90%] mt-2 lg:mt-8">
            <p className="text-[18px] text-grey">
              Ready to take a step in you tech career but unsure where to begin
              ? Book a call with our learning advisor today! Get personalised
              guidance, choose the perfect tech program and enrol confidently
            </p>
            <p className="text-grey mt-8">
              Ready to take a step in you tech career but unsure where to begin
              ? Book a call with our learning advisor today! Get personalised
              guidance, choose the perfect tech program and enrol confidently
            </p>
          </div>
        </div>

        <div className="lg:w-[40%] mt-8 lg:mt-0">
          <img
            src={Learning}
            alt="learning from diverse groups"
            className="pb-12"
            data-aos="fade-left"
            data-aos-easing="linear"
            data-aos-duration="1000"
          />
        </div>
      </div>

      <div className="lg:py-12 px-6 lg:px-12">
        <h1 className="text-[25px] lg:text-[50px] font-gilroyBold text-center lg:text-left">
          Upcoming Events
        </h1>
        <div className="h-1 w-[10%] bg-yellow -mt-1 hidden lg:flex" />

        <div className="lg:flex justify-between items-center py-12 lg:px-16">
          <div className="lg:w-[50%]">
            <img src={Twitter} alt="twitter space" className='h-[450px]' />
          </div>

          <div className="lg:w-[50%] mt-8 lg:mt-0">
            <h2 className="text-[24px] lg:text-[40px] text-grey font-gilroyBold">
              Join us on X Space{' '}
              <span className="text-yellow">@techskilluk</span>
            </h2>
            <div className="border border-grey rounded-xl lg:w-[90%] p-6 mt-2">
              <p>Topic:</p>
              <h2 className="text-[18px] lg:text-[30px] font-gilroyHeavy py-4 lg:py-0">
                Things You Should Know Before Becoming a Tech Bro/Sis
              </h2>

              <div className="md:my-6 md:flex space-y-3 md:space-y-0 block items-center">
                <div className="border border-grey flex items-center rounded-[24px] p-2">
                  <CalendarCheck size={20} className="pl-1" color="#818992" />
                  <p className="px-2 md:text-sm text-[12px]">
                    Tuesday, 21st March, 2024
                  </p>
                </div>
                <div className="w-[0.5px] bg-grey h-8 mx-3 hidden md:flex" />
                <div className="border border-grey flex items-center rounded-[24px] p-2">
                  <TimerIcon size={20} className="pl-1" color="#818992" />
                  <p className="px-2 md:text-sm text-[12px]">
                    5:00PM WAT | 10: 00 UTC
                  </p>
                </div>
              </div>

              <Button className="w-full md:my-2 mt-6 lg:mt-4 flex items-center">
                Join X Space
                <MoveRight className="ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>

        <div className='bg-primary pb-6'> 
      <JoinOurCommunity />
        </div>

      <Footer />
    </div>
  );
};

export default Community;
