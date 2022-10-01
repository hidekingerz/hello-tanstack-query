import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Layout from './layout';
import { Main } from '../feature/main/Main';

const Sub = () => {
  return <Link to={'/main'}> to main </Link>;
};

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="main" element={<Main />} />
        <Route path="sub" element={<Sub />} />
      </Route>
    </Routes>
  );
}
