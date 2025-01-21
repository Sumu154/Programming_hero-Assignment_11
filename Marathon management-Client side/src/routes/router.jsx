import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import axios from "axios";

// layout imports
import App from "../App";
import AuthLayout from "../layouts/AuthLayout";


//  import pages
import HomePage from "../pages/HomePage";
import MarathonsPage from "../pages/MarathonsPage";
import MyMarathonPage from "../pages/MyMarathonPage";
import AddMarathons from "../pages/AddMarathons";
import MyApplyListPage from "../pages/MyApplyListPage";
import UpdateMarathonPage from "../pages/UpdateMarathonPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import MarathonDetailsPage from "../pages/MarathonDetailsPage";
import RegisterToMarathonForm from "../components/ApplyRegistration/RegisterToMarathonForm";



// import componnets
import Error from '../components/shared/Error'
import PrivateRoute from "./PrivateRoute";
import UpdateRegistrationPage from "../pages/UpdateRegistrationPage";



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: '/',
        element: <HomePage></HomePage>
      },
      {
        path: '/allMarathons',
        element: <PrivateRoute> <MarathonsPage></MarathonsPage> </PrivateRoute>,
      },
      {
        path: '/marathons/:id',
        element: <PrivateRoute> <MarathonDetailsPage></MarathonDetailsPage> </PrivateRoute>,
        loader: async ( {params} ) => {
          const res = await axios.get(`http://localhost:3000/api/marathons/${params.id}`, {withCredentials: true});
          const marathon =  res.data;
          return marathon;
        }
      },
      {
        path: '/registerMarathon',
        element: <PrivateRoute> <RegisterToMarathonForm></RegisterToMarathonForm> </PrivateRoute>,
      },
      {
        path: '/addMarathon',
        element: <PrivateRoute> <AddMarathons></AddMarathons> </PrivateRoute> ,
      },
      {
        path: '/myMarathons',
        element: <PrivateRoute> <MyMarathonPage></MyMarathonPage> </PrivateRoute>,
      },
      {
        path: '/updateMarathon/:id',
        element: <PrivateRoute> <UpdateMarathonPage></UpdateMarathonPage> </PrivateRoute>,
        loader: async ( {params} ) => {
          const res = await axios.get(`http://localhost:3000/api/marathons/${params.id}`, {withCredentials: true});
          const marathon = res.data;
          return marathon;
        }
      },
      {
        path: '/myApplies',
        element: <PrivateRoute> <MyApplyListPage></MyApplyListPage> </PrivateRoute>,
      },
      {
        path: '/updateRegistration/:id',
        element: <PrivateRoute> <UpdateRegistrationPage></UpdateRegistrationPage> </PrivateRoute>,
        loader: async ( {params} ) => {
          console.log(params.id);
          const res = await axios.get(`http://localhost:3000/api/registrations/${params.id}`, { withCredentials: true });
          const registration = res.data;
          return registration;
        }
      }
    ]
  },
  {
    path: 'auth',
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: '/auth/login',
        element: <LoginPage></LoginPage>
      },
      {
        path: '/auth/register',
        element: <RegisterPage></RegisterPage>
      }
    ]
  },
  {
    path: '*',
    element: <Error></Error>
  }
]);

export default router;