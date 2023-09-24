import PropTypes from "prop-types";
import { createBrowserRouter } from "react-router-dom";

const myCreatedRouter = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello beautiful world!</div>,
  },
]);

myCreatedRouter.propTypes = {};

export default myCreatedRouter;
