import { createBrowserRouter } from 'react-router-dom';

import App from '../App';
import { ErrorPage, LoginPage, CoursPage, AccountPage } from '../pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { path: 'login', element: <LoginPage /> },
      { path: 'cours', element: <CoursPage /> },
      { path: 'account', element: <AccountPage /> },
    ],
  },
]);

export default router;
