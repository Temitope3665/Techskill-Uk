import { Route, Routes } from 'react-router-dom';
import Home from '../pages';
import Layout from '../layouts/default-layout';

const WebRoutes = () => (
  <Layout>
    <Routes>
      <Route index path={'/home'} element={<Home />} />
    </Routes>
  </Layout>
);

export default WebRoutes;
