import { Route, Routes } from 'react-router-dom';
import Home from '../pages';
import Layout from '../layouts/default-layout';
import { ABOUT_US_URL, COMMUNITY_URL, EXPLORE_COURSES_URL, FAQ_URL, HOME_URL } from '../config/paths';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import AllCourses from '@/pages/explore-courses';
import AboutUs from '@/pages/about-us';
import Community from '@/pages/community';
import Faq from '@/pages/faq';

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
      </Routes>
    </Layout>
  );
};

export default WebRoutes;
