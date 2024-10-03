import { EXPLORE_COURSES_URL } from '@/config/paths';
import { Link } from 'react-router-dom';

const navDropdown = (lists, w) => {
  return (
    <div
      className={`rounded-lg bg-secondary border-grey border-[0.5px] p-4 cursor-pointer absolute hidden group-hover:block z-10 ${
        w || 'lg:w-[25vw] w-[85vw]'
      } pt-4 max-h-[60vh] overflow-auto`}
    >
      {lists.map((list) => (
        <Link to={list.href} key={list.title}>
          <div className="flex items-center my-4 hover:after:secondary hover:bg-primary rounded-lg px-2 py-3">
            <img src={list.icon} alt={list.title} width={18} />
            <div className="ml-4">
              <p className="font-gilroyBold text-sm">{list.title}</p>
              <p className="text-[12px] text-grey">{list.desc}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default navDropdown;

export const coursesNavDropdown = (lists, w) => {
  return (
    <div
      className={`rounded-lg bg-secondary border-grey border-[0.5px] p-2 cursor-pointer absolute hidden group-hover:block z-10 ${
        w || 'lg:w-[25vw] w-[85vw]'
      } pt-4 max-h-[60vh] overflow-auto`}
    >
      {lists?.map((list) => (
        <div
          key={list?.fields?.title}
          className="flex items-center my-4 hover:after:secondary hover:bg-primary rounded-lg px-2 py-3"
          onClick={() =>
            (window.location.href = `/explore-courses/details/${list?.sys?.id}?course=learn-${list?.fields?.title?.toLowerCase()?.replace(/ /g, '-')}`)
          }
        >
          <div className="rounded-full p-2 bg-primary">
            <img src={list?.fields?.icon?.fields?.file?.url} alt={list?.fields?.title} width={24} />
          </div>
          <div className="ml-4">
            <p className="font-gilroyBold text-sm">{list?.fields?.title || '-'}</p>
            <p className="text-[12px] text-grey">{list?.fields?.shortDescription || '-'}</p>
          </div>
        </div>
      ))}
      <Link to={`${EXPLORE_COURSES_URL}?tab=0`}>
        <p className="px-2 py-1 text-sm cursor-pointer text-center italic text-yellow hover:text-white trans">View all</p>
      </Link>
    </div>
  );
};
