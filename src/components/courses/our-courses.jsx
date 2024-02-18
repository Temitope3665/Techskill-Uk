import { cn } from '@/lib/utils';
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';

const OurCourses = ({ className, image, title, description, href }) => {
  return (
    <div>
      <div className={cn(className, 'border border-yellow bg-primary rounded-[14px] md:rounded-[18px] p-3 md:min-h-[260px]')}>
        <img src={image} alt={title} />
        <h3 className="text-[18px] font-gilroyBold md:text-[22px] pt-3 h-[50px]">
          {title}
        </h3>
        <p className="text-grey mt-2 text-sm md:text-base">
          {description}
        </p>
        <Link to={href}>
          <Button className="w-full mt-8">View course</Button>
        </Link>
      </div>
    </div>
  );
};

export default OurCourses;
