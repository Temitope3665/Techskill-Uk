import { useNavigate, useSearchParams } from 'react-router-dom';

const CourseTab = ({ tabs }) => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const activeTab = searchParams.get('tab');

  return (
    <div>
      <div className="flex items-center justify-between my-8">
        {tabs.map((tab) => (
          <div
            className={`rounded-lg py-3 w-[30%] text-center cursor-pointer font-gilroyMd trans ${
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
      {tabs[Number(activeTab)].content}
    </div>
  );
};

export default CourseTab;
