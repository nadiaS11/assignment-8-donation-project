import PropTypes from "prop-types";
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div>
      <h2 className=" text-center mt-52 font-black text-7xl"> Opps!</h2>
      {/* <p className=" text-center mt-5 font-semibold text-xl">
        {error.statusText || error.message}{" "}
      </p>
      {error.status === 404 && (
        <div>
          <h2>Page not found</h2>
          <p>Go back Home</p>
          <button>
            {" "}
            <Link to="/">Home</Link>
          </button>
        </div>
      )} */}
    </div>
  );
};

ErrorPage.propTypes = {};

export default ErrorPage;
