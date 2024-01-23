import { CalendarCheck, Timer } from 'lucide-react';
import BeginnerIcon from '@/assets/icons/beginner-icon.png';
import ProjectIcon from '@/assets/icons/project-icon.png';
import CompletionIcon from '@/assets/icons/completion-icon.png';

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

export const Perks = () => (
  <div className="space-y-4 lg:space-y-0 block lg:flex w-full justify-between mt-16 text-sm items-center">
    <div className="flex text-yellow rounded-full border border-yellow py-2 px-4 items-center">
      <img src={BeginnerIcon} alt="beginner icon" className="mr-2" width={20} />
      Beginner
    </div>
    <div className="flex text-yellow rounded-full border border-yellow py-2 px-4 items-center">
      <Timer size={20} className="mr-2" />
      5-Weeks
    </div>
    <div className="flex text-yellow rounded-full border border-yellow py-2 px-4 items-center">
      <img src={ProjectIcon} alt="beginner icon" className="mr-2" width={20} />
      Real -world project
    </div>
    <div className="flex text-yellow rounded-full border border-yellow py-2 px-4 items-center">
      <img src={CompletionIcon} alt="beginner icon" className="mr-2" width={20} />
      Completion Certification
    </div>
  </div>
);
