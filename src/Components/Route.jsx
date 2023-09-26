import PropTypes from "prop-types";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./MainLayout";
import Home from "./Home";
import Statistics from "./Statistics";
import Donation from "./Donation";
import DonationDetails from "./DonationDetails";
import ErrorPage from "./ErrorPage";

const myCreatedRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,

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
