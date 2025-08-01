import { createBrowserRouter } from 'react-router-dom';
import Authenticate from '../pages/Authenticate';
import Home from '../pages/Home';
import Skills from '../pages/Skills';
import Progress from '../pages/Progress';
import App from '../App';
import ErrorPage from '../pages/ErrorPage';

export const router = createBrowserRouter([
  { path: '/authenticate', element: <Authenticate />, errorElement: <ErrorPage /> },
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: 'skills', element: <Skills /> },
      { path: 'progress', element: <Progress /> },
    ],
  },
]);
