import { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from './App.js';
import { PageLoadingFallback } from '../components/ui/PageLoadingFallback.js';
import { ROUTES } from '../lib/routePaths.js';

// Lazy-loaded route components for optimized bundle splitting
const HomePage = lazy(() => import('../pages/HomePage.js'));
const WorkPage = lazy(() => import('../pages/WorkPage.js'));
const WorkDetailPage = lazy(() => import('../pages/WorkDetailPage.js'));
const AboutPage = lazy(() => import('../pages/AboutPage.js'));
const ServicesPage = lazy(() => import('../pages/ServicesPage.js'));
const JournalPage = lazy(() => import('../pages/JournalPage.js'));
const JournalDetailPage = lazy(() => import('../pages/JournalDetailPage.js'));
const ContactPage = lazy(() => import('../pages/ContactPage.js'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage.js'));

export const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <App />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<PageLoadingFallback />}>
            <HomePage />
          </Suspense>
        ),
      },
      {
        path: 'work',
        element: (
          <Suspense fallback={<PageLoadingFallback />}>
            <WorkPage />
          </Suspense>
        ),
      },
      {
        path: 'work/:slug',
        element: (
          <Suspense fallback={<PageLoadingFallback />}>
            <WorkDetailPage />
          </Suspense>
        ),
      },
      {
        path: 'about',
        element: (
          <Suspense fallback={<PageLoadingFallback />}>
            <AboutPage />
          </Suspense>
        ),
      },
      {
        path: 'services',
        element: (
          <Suspense fallback={<PageLoadingFallback />}>
            <ServicesPage />
          </Suspense>
        ),
      },
      {
        path: 'journal',
        element: (
          <Suspense fallback={<PageLoadingFallback />}>
            <JournalPage />
          </Suspense>
        ),
      },
      {
        path: 'journal/:slug',
        element: (
          <Suspense fallback={<PageLoadingFallback />}>
            <JournalDetailPage />
          </Suspense>
        ),
      },
      {
        path: 'contact',
        element: (
          <Suspense fallback={<PageLoadingFallback />}>
            <ContactPage />
          </Suspense>
        ),
      },
      {
        path: '*',
        element: (
          <Suspense fallback={<PageLoadingFallback />}>
            <NotFoundPage />
          </Suspense>
        ),
      },
    ],
  },
]);
