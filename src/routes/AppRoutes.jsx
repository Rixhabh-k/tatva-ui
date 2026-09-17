import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import Hero from '../pages/Hero/Hero'
import Docs from '../pages/Docs/Docs'
import DocsLayout from '../pages/Docs/layout/DocsLayout';
import DocsPage from '../pages/Docs/DocsPage/DocsPage';


const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/docs" element={<DocsLayout />}>
          <Route path=":slug" element={<DocsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes
