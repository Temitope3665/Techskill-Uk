import { Route, Routes } from 'react-router-dom';
import Home from '../pages';
import Layout from '../layouts/default-layout';
import { HOME_URL } from '../config/paths';

const WebRoutes = () => (
  <Layout>
    <Routes>
      <Route index path={HOME_URL} element={<Home />} />
    </Routes>
  </Layout>
);

export default WebRoutes;
