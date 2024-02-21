import { createContext, useEffect, useState } from 'react';
import { createClient } from 'contentful';
import { toast } from '@/components/ui/use-toast';
import { ToastAction } from '@/components/ui/toast';

export const CourseContext = createContext({});

export const CourseProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [loadingEvents, setLoadingEvents] = useState(false);
  const [allCourses, setAllCourses] = useState();
  const [events, setEvents] = useState();
  const client = createClient({
    space: process.env.VITE_REACT_APP_SPACE_ID,
    accessToken: process.env.VITE_REACT_APP_ACCESS_TOKEN,
  });

  useEffect(() => {
    setIsLoading(true);
    const getAllCourses = async () => {
      try {
        const courses = await client.getEntries();
        setAllCourses(courses.items.slice(0, courses.items.length - 1));
        setIsLoading(false);
      } catch (error) {
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

  useEffect(() => {
    setLoadingEvents(true)
    const getAllEvents = async () => {
      try {
        const allEvents = await client.getEntry('5f9hRYhlxhd3zt7JtxGiY5');
        setEvents(allEvents);
        setLoadingEvents(false);
      } catch (error) {
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: "There was a problem fetching the server.",
          action: <ToastAction altText="Try again">Try again</ToastAction>,
        })
        setLoadingEvents(false)
      }
    }
    getAllEvents();
  }, []);

  const value = { allCourses, isLoading, events, loadingEvents };

  return (
    <CourseContext.Provider value={value}>{children}</CourseContext.Provider>
  );
};
