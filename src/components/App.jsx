import React from "react";
import { lazy } from "react";
import { Route, Routes } from 'react-router-dom';
import { Layout } from '../components/Layout';



const Home = lazy(() => import('../pages/Home'));
const Catalog = lazy(() => import('../pages/Catalog'));
const Favorite = lazy(() => import('../pages/Favorite'));





export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/favorite" element={<Favorite />} />
      </Route>
    </Routes>
  );
};
