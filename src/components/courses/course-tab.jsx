import { useNavigate, useSearchParams } from 'react-router-dom';

const CourseTab = ({ tabs }) => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const activeTab = searchParams.get('tab');

  return (
    <div className='mb-8'>
      <div className="grid grid-cols-3 gap-4 md:flex items-center justify-between md:my-8">
        {tabs.map((tab) => (
          <div
            className={`rounded-lg py-2 md:py-3 md:w-[30%] text-[12px] md:text-base text-center min-h-[50px] items-center flex justify-center cursor-pointer font-gilroyMd trans ${
              tab.id === activeTab
                ? 'bg-yellow border-none text-primary'
                : 'border border-grey text-grey'
            }`}
            key={tab.title}
            onClick={() => navigate(`?tab=${tab.id}`)}
          >
            {tab.title}
          </div>
        ))}
      </div>
      <div className='md:min-h-[200px]'>
        {tabs[Number(activeTab)].content}
      </div>
    </div>
  );
};

export default CourseTab;
