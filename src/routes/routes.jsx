import { createBrowserRouter } from "react-router-dom";

import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Menu/Menu";
import Order from "../Pages/OrderShop/Order";
import Login from "../Pages/Login&Registretion/Login/Login";
import SignUp from "../Pages/Login&Registretion/Registretion/SignUp";
import Secret from "../Pages/Shared/Secret";
import Protected from "./Protected";
import Deshboard from "../Layout/Deshboard";
import MyCart from "../Pages/Dashboart/MyCart/MyCart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/menu",
        element: <Menu></Menu>,
      },
      {
        path: "/order/:category",
        element: <Order></Order>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/secret",
        element: (
          <Protected>
            <Secret></Secret>
          </Protected>
        ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Deshboard></Deshboard>,
    children: [
      {
        path: "mycart",
        element: <MyCart></MyCart>,
      },
    ],
  },
]);

export default router;
