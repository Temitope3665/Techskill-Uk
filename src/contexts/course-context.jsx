import { createContext, useEffect, useState } from 'react';
import { createClient } from 'contentful';
import { toast } from '@/components/ui/use-toast';
import { ToastAction } from '@/components/ui/toast';

export const CourseContext = createContext({});

export const CourseProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false)
  const [allCourses, setAllCourses] = useState();
  const client = createClient({
    space: process.env.VITE_REACT_APP_SPACE_ID,
    accessToken: process.env.VITE_REACT_APP_ACCESS_TOKEN,
  });

  useEffect(() => {
    setIsLoading(true);
    const getAllCourses = async () => {
      try {
        const courses = await client.getEntries();
        setAllCourses(courses.items);
        setIsLoading(false)
      } catch (error) {
        console.log(error);
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: "There was a problem fetching the server.",
          action: <ToastAction altText="Try again">Try again</ToastAction>,
        })
        setIsLoading(false)
      }
    };
    getAllCourses();
  }, []);

  const value = { allCourses, isLoading };

  return (
    <CourseContext.Provider value={value}>{children}</CourseContext.Provider>
  );
};
