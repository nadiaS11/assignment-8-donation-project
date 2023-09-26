import PropTypes from "prop-types";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./MainLayout";
import Home from "./Home";
import Statistics from "./Statistics";
import Donation from "./Donation";
import Banner from "./Banner";
import DonationDetails from "./DonationDetails";

const myCreatedRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,

    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/:id",
        element: <DonationDetails></DonationDetails>,
        loader: () => fetch("/data.json"),
      },
      {
        path: "/donation",
        element: <Donation></Donation>,
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
        loader: () => fetch("/data.json"),
      },
    ],
  },
]);

myCreatedRouter.propTypes = {};

export default myCreatedRouter;
