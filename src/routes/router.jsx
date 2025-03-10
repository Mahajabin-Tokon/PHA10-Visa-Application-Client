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
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import VisaDetails from "../Pages/VisaDetails";

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
        loader: () => fetch("https://visa-server-five.vercel.app/visas"),
      },
      {
        path: "/addVisa",
        element: (
          <PrivateRoute>
            <AddVisa></AddVisa>
          </PrivateRoute>
        ),
      },
      {
        path: "/myAddedVisas",
        element: (
          <PrivateRoute>
            <MyAddedVisas></MyAddedVisas>
          </PrivateRoute>
        ),
      },
      // {
      //   path: "/myAddedVisas/:id",
      //   element: (
      //     <PrivateRoute>
      //       <MyAddedVisas></MyAddedVisas>
      //     </PrivateRoute>
      //   ),
      //   loader: ({ params }) =>
      //     fetch(`https://visa-server-five.vercel.app/myAddedVisas/${params.id}`),
      // },
      {
        path: "/myVisaApplication",
        element: (
          <PrivateRoute>
            <MyVisaApplication></MyVisaApplication>
          </PrivateRoute>
        ),
      },
      {
        path: "/visaDetails/:id",
        element: (
          <PrivateRoute>
            <VisaDetails></VisaDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://visa-server-five.vercel.app/visaDetails/${params.id}`),
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
