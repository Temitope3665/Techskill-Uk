import { Route, Routes } from 'react-router-dom';
import Home from '../pages';
import Layout from '../layouts/default-layout';
import { EXPLORE_COURSES_URL, HOME_URL } from '../config/paths';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import AllCourses from '@/pages/courses';

const WebRoutes = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Layout>
      <Routes>
        <Route index path={HOME_URL} element={<Home />} />
        <Route index path={EXPLORE_COURSES_URL} element={<AllCourses />} />
      </Routes>
    </Layout>
  );
};

export default WebRoutes;
