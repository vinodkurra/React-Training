import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div>
      404 - Page not found
      <Link to="/">click here for welcome page</Link>
    </div>
  );
};

export default PageNotFound;
