import { PhoneIncoming } from 'lucide-react';
import { Button } from './ui/button';
import Stars from '@/assets/icons/stars.png';
import { PopupButton } from 'react-calendly';

const TalkToExpert = () => {
  return (
    <div
      className="w-full pb-12 md:pb-16 md:py-14 relative"
      data-aos="fade-up"
      data-aos-easing="linear"
      data-aos-duration="1000"
    >
      <img
        src={Stars}
        alt="stars"
        className="absolute w-[300px] right-0 -top-48 md:-top-20"
      />
      <div className="mx-auto text-center md:w-[40%]">
        <h2 className="font-gilroyMd text-[30px] md:text-[55px]">
          Talk to an Expert ?
        </h2>
        <p className="text-grey md:text-base text-sm px-8 md:px-0">
          Talk to an expert: Ready to take a step in your tech career but unsure
          where to begin? Book a call with our learning advisors today! Get
          personalised guidance, choose the perfect tech program and enrol
          confidently.
        </p>

        <Button className="font-bold text-[20px] h-[50px] md:w-[25vw] hover:bg-white mt-8 bg-white">
          <PopupButton
            url={`${process.env.REACT_CALENDLY_URL}`}
            rootElement={document.getElementById('root')}
            text={
              <div className="flex items-center justify-center">
                Book a free call <PhoneIncoming className="ml-4" size={16} />
              </div>
            }
            styles={{ width: '100%', height: '100%' }}
          />
        </Button>
      </div>
    </div>
  );
};

export default TalkToExpert;
