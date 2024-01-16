import { Route, Routes } from 'react-router-dom';
import Home from '../pages';
import Layout from '../layouts/default-layout';
import { HOME_URL } from '../config/paths';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const WebRoutes = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Layout>
      <Routes>
        <Route index path={HOME_URL} element={<Home />} />
      </Routes>
    </Layout>
  );
};

export default WebRoutes;
