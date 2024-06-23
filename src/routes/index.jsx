import { Route, Routes } from 'react-router-dom';
import Home from '../pages';
import Layout from '../layouts/default-layout';
import {
  ABOUT_US_URL,
  COMMUNITY_URL,
  COURSE_DETAILS_URL,
  EXPLORE_COURSES_URL,
  FAQ_URL,
  HIRE_ALUMNI_URL,
  HOME_URL,
  JOB_PORTAL_URL,
  OFFERINGS_URL,
  REGISTRATION_URL,
} from '../config/paths';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import AllCourses from '@/pages/explore-courses';
import AboutUs from '@/pages/about-us';
import Community from '@/pages/community';
import Faq from '@/pages/faq';
import Offerings from '@/pages/offerings/index';
import UserRegistration from '@/pages/user-registration';
import CourseDetails from '@/pages/explore-courses/details';
import HireAlumni from '@/components/hire-alumni';
import JobPortal from '@/pages/offerings/job-portal';

const WebRoutes = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Layout>
      <Routes>
        <Route index path={HOME_URL} element={<Home />} />
        <Route path={EXPLORE_COURSES_URL} element={<AllCourses />} />
        <Route path={ABOUT_US_URL} element={<AboutUs />} />
        <Route path={COMMUNITY_URL} element={<Community />} />
        <Route path={FAQ_URL} element={<Faq />} />
        <Route path={OFFERINGS_URL} element={<Offerings />} />
        <Route path={REGISTRATION_URL} element={<UserRegistration />} />
        <Route path={COURSE_DETAILS_URL} element={<CourseDetails />} />
        <Route path={HIRE_ALUMNI_URL} element={<HireAlumni />} />
        <Route path={JOB_PORTAL_URL} element={<JobPortal />} />
      </Routes>
    </Layout>
  );
};

export default WebRoutes;
