import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  error.message = "Visit Home to donate";
  return (
    <div>
      <p className=" text-center mt-52 font-semibold text-xl">
        {error.statusText || error.message}
      </p>

      {error.status === 404 && (
        <div>
          <p>You are headed to the wrong way.</p>
        </div>
      )}

      <h4 className=" text-center mt-5 font-black text-xl">
        <Link className="bg-gray-300 btn" to="/">
          Home
        </Link>
      </h4>
    </div>
  );
};

export default ErrorPage;
