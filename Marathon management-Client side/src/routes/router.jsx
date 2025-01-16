import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import axios from "axios";

// layout imports
import App from "../App";
import AuthLayout from "../layouts/AuthLayout";


//  import pages
import HomePage from "../pages/HomePage";
import MarathonsPage from "../pages/MarathonsPage";
import MarathonDetails from "../components/DetailsComponents/MarathonDetails";
import MyMarathonPage from "../pages/MyMarathonPage";
import AddMarathons from "../pages/AddMarathons";
import MyApplyList from "../pages/MyApplyList";
import UpdateMarathonPage from "../pages/UpdateMarathonPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";



// import componnets
import Error from '../components/shared/Error'
import PrivateRoute from "./PrivateRoute";
import MarathonDetailsPage from "../pages/MarathonDetailsPage";



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
          const res = await axios(`http://localhost:3000/api/marathons/${params.id}`);
          const marathon =  res.data;
          return marathon;
        }
      },
      {
        path: '/addMarathon',
        element: <PrivateRoute> <AddMarathons></AddMarathons> </PrivateRoute> ,
      },
      {
        path: '/myMarathons',
        element: <MyMarathonPage></MyMarathonPage>
      },
      {
        path: '/myApplies',
        element: <MyApplyList></MyApplyList>
      },
      {
        path: '/updateMarathon/:id',
        element: <UpdateMarathonPage></UpdateMarathonPage>
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