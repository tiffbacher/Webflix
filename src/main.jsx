import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './routes/root';
import ErrorPage from './error-page';
import SignInPage from './routes/sign-in-page';

const router = createBrowserRouter([
  {
    path: '*',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'sign-in',
        element: <SignInPage />,
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
