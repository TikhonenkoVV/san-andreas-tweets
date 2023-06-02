import { Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { lazy } from 'react';

const Home = lazy(() => import('../pages/Home'));
const Twitts = lazy(() => import('../pages/Twitts'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="twitts" element={<Twitts />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
