import LadyImage from '@/assets/image/african-lady.jpg';
import ManImage from '@/assets/image/african-man.jpg';
import { Button } from '@/components/ui/button';
import { BadgePoundSterling, Bird, Briefcase, Dot, MapPin } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from '@/components/ui/use-toast';
import { Skeleton } from '@/components/ui/skeleton';
import { createClient } from 'contentful';

const JobPortal = () => {
  const [allJobs, setAllJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const client = createClient({
    space: process.env.VITE_REACT_APP_SPACE_ID,
    accessToken: process.env.VITE_REACT_APP_ACCESS_TOKEN,
  });

  useEffect(() => {
    setIsLoading(true);
    const getAllJobs = async () => {
      try {
        const jobs = await client.getEntries({
          content_type: 'jobListing',
        });
        setAllJobs(jobs.items);
        setIsLoading(false);
      } catch (error) {
        toast({
          variant: 'destructive',
          title: 'Uh oh! Something went wrong.',
          description: 'There was a problem fetching the server.',
          action: <ToastAction altText="Try again">Try again</ToastAction>,
        });
        setIsLoading(false);
      }
    };
    getAllJobs();
  }, []);

  return (
    <div className="my-10 lg:my-20 w-full space-y-12 px-4">
      <main className="text-center lg:w-[40%] mx-auto space-y-2">
        <div className="-space-y-3">
          <h1 className="text-[28px] lg:text-[45px] font-gilroyBold">
            The <span className="text-yellow">Most Complete</span> Job
          </h1>
          <h1 className="text-[28px] lg:text-[45px] font-gilroyBold">
            Listings In The World
          </h1>
        </div>
        <div className="space-y lg:text-base text-sm">
          <p>
            We care about your knowledge, experience and your goofy self!. Start
            your hunt for the best life-changing career opportunities from here.
          </p>
        </div>
      </main>
      <div className="flex justify-center w-full">
        <div className="h-[250px] lg:h-[400px] flex w-fill lg:w-[80%] space-x-4 lg:space-x-8 justify-center">
          <img
            src={LadyImage}
            alt="african lady looking for job"
            className=" rounded-full w-[60%] lg:w-[45%] object-cover"
          />
          <img
            src={ManImage}
            alt="african man looking for job"
            className=" rounded-full w-[20%] object-cover mt-20"
          />
        </div>
      </div>

      {isLoading ? (
        <div className="space-y-8 lg:w-[70%] mx-auto">
          <Skeleton className="h-[100px] w-full" />
          <Skeleton className="h-[100px] w-full" />
          <Skeleton className="h-[100px] w-full" />
          <Skeleton className="h-[100px] w-full" />
        </div>
      ) : (
        <div className="lg:w-[70%] mx-auto space-y-3">
          <h2 className="font-gilroyBold text-[16px]">All Open Positions</h2>

          <div className="space-y-4 lg:space-y-8">
            {allJobs.map((job) => (
              <div
                className="border border-[#FFFFFF1A] rounded-2xl bg-primary px-4 py-6 space-y-4"
                key={job.sys.id}
              >
                <div className="lg:flex justify-between items-center space-y-2 lg:space-y-0">
                  <div className="flex space-x-6 items-center justify-between lg:justify-start">
                    <p className="font-gilroyBold text-[20px]">
                      {job.fields.jobTitle}
                    </p>
                    <div className="px-1.5 py-1 bg-[#2F3441] rounded-full text-xs flex items-center">
                      <Dot size={12} />
                      <p className="pr-1">{job.fields.jobType}</p>
                    </div>
                  </div>
                  <div className="flex space-x-2 items-center text-white font-gilroyMd lg:text-base text-sm">
                    <MapPin size={16} />
                    <p className="">{job.fields.country}</p>
                  </div>
                </div>

                <div className="lg:block space-y-2">
                  <div className="flex space-x-2 items-center text-xs lg:text-sm text-[#818992]">
                    <Briefcase size={14} />
                    <p>
                      {
                        job.fields.companyNameAndAddress.content[0].content[0]
                          .value
                      }
                    </p>
                  </div>

                  {job?.fields?.salary && (
                    <div className="flex space-x-2 items-center text-xs lg:text-sm text-[#818992]">
                      <BadgePoundSterling size={14} />
                      <p>{job.fields.salary}</p>
                    </div>
                  )}

                  {job.fields.otherInformation && (
                    <div className="flex space-x-2 items-center text-xs lg:text-sm text-white">
                      <Bird size={14} />
                      <p>
                        {
                          job.fields.otherInformation.content[0].content[0]
                            .value
                        }
                      </p>
                    </div>
                  )}
                </div>

                <div className="justify-between lg:flex items-center">
                  <div className="text-[10px] lg:text-xs flex space-x-4 items-center text-[#818992]">
                    <p>
                      Posting date:{' '}
                      <span className="text-yellow">
                        {job.fields.postingDate}
                      </span>
                    </p>

                    {job.fields.closingDate && (
                      <React.Fragment>
                        <Dot size={14} />
                        <p>
                          Closing date:{' '}
                          <span className="text-yellow">
                            {job.fields.closingDate}
                          </span>
                        </p>
                      </React.Fragment>
                    )}
                  </div>
                  <Link
                    to={job.fields.jobLink.content[0].content[0].value}
                    target="_blank"
                  >
                    <Button
                      size="sm"
                      className="w-full lg:w-[120px] mt-4 lg:mt-0"
                    >
                      Apply Now
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default JobPortal;
