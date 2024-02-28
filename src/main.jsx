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

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
