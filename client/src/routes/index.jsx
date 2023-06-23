import { createBrowserRouter } from 'react-router-dom';

import App from '../App';
import {
  ErrorPage,
  LoginPage,
  CoursPage,
  AccountPage,
  ProfilPage,
  PasswordPage,
  CourPage,
  DocumentsPage,
} from '../pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { path: 'login', element: <LoginPage /> },
      {
        path: 'cours',
        element: <CoursPage />,
      },
      {
        path: 'cours/:id',
        element: <CourPage />,
      },
      {
        path: 'account',
        element: <AccountPage />,
        children: [
          {
            path: 'profil',
            element: <ProfilPage />,
          },
          {
            path: 'password',
            element: <PasswordPage />,
          },
          {
            path: 'documents',
            element: <DocumentsPage />,
          },
        ],
      },
    ],
  },
]);

export default router;
