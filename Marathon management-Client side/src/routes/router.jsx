import { createBrowserRouter, RouterProvider, } from "react-router-dom";


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
        element: <MarathonsPage></MarathonsPage>
      },
      {
        path: '/marathon/:id',
        element: <MarathonDetails></MarathonDetails>
      },
      {
        path: '/addMarathon',
        element: <AddMarathons></AddMarathons>
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