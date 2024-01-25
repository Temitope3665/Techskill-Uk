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
  console.log(lists)
  return (
    <div
      className={`rounded-lg bg-secondary border-grey border-[0.5px] p-2 cursor-pointer absolute hidden group-hover:block z-10 ${
        w || 'lg:w-[25vw] w-[85vw]'
      } pt-4 max-h-[60vh] overflow-auto`}
    >
      {lists?.map((list) => (
        <Link to={`explore-courses/details/${list?.sys?.id}`} key={list?.fields?.title}>
          <div className="flex items-center my-4 hover:after:secondary hover:bg-primary rounded-lg px-2 py-3">
            <div className='rounded-full p-2 bg-primary'>
              <img src={list?.fields?.icon?.fields?.file?.url} alt={list?.fields?.title} width={24} />
            </div>
            <div className="ml-4">
              <p className="font-gilroyBold text-sm">{list?.fields?.title}</p>
              <p className="text-[12px] text-grey">{list?.fields?.shortDescription}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};
