import PropTypes from "prop-types";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      <Header></Header>
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

MainLayout.propTypes = {};

export default MainLayout;
