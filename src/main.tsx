import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import App from './App.tsx';
import BlogPostPage from './pages/BlogPostPage.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <>
        <Routes>
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          <Route path="*" element={<App />} />
        </Routes>
        <Analytics />
      </>
    </BrowserRouter>
  </StrictMode>,
);
