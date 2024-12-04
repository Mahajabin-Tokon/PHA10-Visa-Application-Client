import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import Error from "../Components/Error";
import AllVisas from "../Pages/AllVisas";
import AddVisa from "../Pages/AddVisa";
import MyAddedVisas from "../Pages/MyAddedVisas";
import MyVisaApplication from "../Pages/MyVisaApplication";
import Login from "../Pages/Login";
import Register from "../Pages/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/allVisas",
        element: <AllVisas></AllVisas>,
      },
      {
        path: "/addVisa",
        element: <AddVisa></AddVisa>,
      },
      {
        path: "/myAddedVisas",
        element: <MyAddedVisas></MyAddedVisas>,
      },
      {
        path: "/myVisaApplication",
        element: <MyVisaApplication></MyVisaApplication>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;
