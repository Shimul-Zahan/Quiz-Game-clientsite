import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';
import Error from './Shared/Error.jsx';
import Main from './Layout/Main.jsx';
import Home from './Pages/Main/Home.jsx';
import Login from './Components/Login.jsx';
import Registration from './Components/Registration.jsx';
import Riddle from './Pages/Main/Riddle.jsx';
import SavedRiddle from './Pages/Main/SavedRiddle.jsx';
import Nav from './Pages/Dashboard/Nav.jsx';
import DasHome from './Pages/Dashboard/DasHome.jsx';
import User from './Pages/Dashboard/User.jsx';
import Division from './Shared/Division.jsx';
import Riddles from './Pages/Dashboard/Riddles.jsx';
import ForgetPassword from './Components/ForgetPassword.jsx';
import OTP from './Components/OTPs.jsx';
import PasswordSubmit from './Components/PasswordSubmit.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import AuthContext from './Context/AuthContext.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/riddle',
        element: <Riddle />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/registration',
        element: <Registration />,
      },
      {
        path: "/otp",
        element: <OTP />
      },
      {
        path: "/forgetPassword",
        element: <ForgetPassword />
      },
      {
        path: "/reset-password",
        element: <PasswordSubmit />
      },
      {
        path: '/saved',
        element: <SavedRiddle />
      },
    ]
  },
  {
    path: '/dashboard',
    element: <Nav />,
    children: [
      {
        path: '/dashboard',
        element: <DasHome />
      },
      {
        path: '/dashboard/users',
        element: <User />
      },
      {
        path: '/dashboard/division',
        element: <Division />
      },
      {
        path: '/dashboard/riddle',
        element: <Riddles />
      },
    ]
  },
])
const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthContext>
        <RouterProvider router={router} />
      </AuthContext>
    </QueryClientProvider>
  </React.StrictMode>,
)
