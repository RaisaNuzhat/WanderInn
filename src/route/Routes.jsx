import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../layout/MainLayout';
import Home from '../pages/Home';
import EstateDetail from '../pages/EstateDetail';
import ErrorPage from '../components/ErrorPage';
import LogIn from '../pages/LogIn';
import Register from '../pages/Register';
import PrivateRoute from '../components/Privateroute/PrivateRoute';
import Booking from '../pages/Booking';
export const router = createBrowserRouter([

  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: '/',
        element: <Home />,

      },
      {
        path:'/estatedetail/:id',
        element:<PrivateRoute>
          <EstateDetail/>
          </PrivateRoute>
      },
      {
        path:'/login',
        element:<LogIn/>
      },
      {
        path:'/register',
        element:<Register/>
      },
      {
        path:'/booking',
        element:<PrivateRoute>
          <Booking/>
          </PrivateRoute>
      },
     

      



    ]
  }


]);