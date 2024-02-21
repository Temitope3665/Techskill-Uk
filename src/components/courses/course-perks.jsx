import { CalendarCheck, ChevronRight, Timer } from 'lucide-react';
import BeginnerIcon from '@/assets/icons/beginner-icon.png';
import ProjectIcon from '@/assets/icons/project-icon.png';
import CompletionIcon from '@/assets/icons/completion-icon.png';
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';

const CoursePeriod = ({ duration, time }) => (
  <div className="my-4 md:my-6 md:flex space-y-3 md:space-y-0 block items-center text-center">
    <div className="border border-grey flex items-center rounded-[24px] p-2">
      <CalendarCheck size={20} className="pl-1" color="#818992" />
      <p className="px-2 md:text-sm text-[12px]">{duration}</p>
    </div>
    <div className="w-[0.5px] bg-grey h-8 mx-3 hidden md:flex" />
    <div className="border border-grey flex items-center rounded-[24px] p-2">
      <p className="px-2 md:text-sm text-[12px]">{time}</p>
    </div>
  </div>
);

export default CoursePeriod;

export const Perks = ({ perks }) => (
  <div className="space-y-4 lg:space-y-0 block lg:flex w-full justify-between mt-16 text-sm items-center">
    <div className="flex text-yellow rounded-full border border-yellow py-2 px-4 items-center">
      <img src={BeginnerIcon} alt="beginner icon" className="mr-2" width={20} />
      {perks && perks[0]}
    </div>
    <div className="flex text-yellow rounded-full border border-yellow py-2 px-4 items-center">
      <Timer size={20} className="mr-2" />
      {perks && perks[1]}
    </div>
    <div className="flex text-yellow rounded-full border border-yellow py-2 px-4 items-center">
      <img src={ProjectIcon} alt="beginner icon" className="mr-2" width={20} />
      {perks && perks[2]}
    </div>
    <div className="flex text-yellow rounded-full border border-yellow py-2 px-4 items-center">
      <img
        src={CompletionIcon}
        alt="beginner icon"
        className="mr-2"
        width={20}
      />
      {perks && perks[3]}
    </div>
  </div>
);

export const Pricing = ({ title, description, description2, price, href }) => {
  return (
    <div className="border-[0.5px] border-yellow rounded-lg grid grid-cols-3 p-4 gap-4 lg:items-center relative lg:w-[85%]">
      <h2 className="text-[18px] lg:text-[24px] font-gilroyMd">{title}</h2>
      <p className="text-[12px] w-[60%]">{description}</p>
      <div className='-ml-4'>
        <h3 className="text-[18px] lg:text-[26px] font-gilroyBold">£{price}</h3>
        <p className="text-[12px]">{description2}</p>
        <Link to={href}>
          <Button className="lg:absolute lg:top-[30%] lg:-right-20 mt-2 lg:mt-0 text-[12px] lg:text-sm" size="sm">
            Pay now <ChevronRight className="ml-2" size={16} />{' '}
          </Button>
        </Link>
      </div>
    </div>
  );
};
