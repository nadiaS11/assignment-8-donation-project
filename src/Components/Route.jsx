import PropTypes from "prop-types";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./MainLayout";
import Home from "./Home";
import Statistics from "./Statistics";
import Donation from "./Donation";
import Banner from "./Banner";

const myCreatedRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,

    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("data.json"),
      },
      // {
      //   path: "/",
      //   element: <Banner></Banner>,
      // },
      {
        path: "/donation",
        element: <Donation></Donation>,
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },
    ],
  },
]);

myCreatedRouter.propTypes = {};

export default myCreatedRouter;
