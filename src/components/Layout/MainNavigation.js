import { Link, useHistory, useRouteMatch } from "react-router-dom";

export default function MainNavigation() {
  let match = useRouteMatch();
  const history = useHistory();
  function onClickHandler() {
    localStorage.removeItem("login");
    history.replace("/");
  }

  return (
    <nav className="navbar navbar-expand-lg border-bottom shadow-sm">
      <div className="container-fluid">
        <span className="navbar-brand fs-3 text-dark fw-bold">BOOK-EASE</span>
        <div className="collapse navbar-collapse" id="navbarText">
          <div className="navbar-nav me-auto mb-2 mb-lg-0"></div>
          <Link
            className="btn border--subtle text-dark m-3 fw-bold"
            to={match.url}
          >
            Home
          </Link>
          <Link
            className="btn border--subtle text-dar m-3 fw-bold"
            to={`${match.url}/cart`}
          >
            Cart
          </Link>
          <button
            className="btn border--subtle text-dar m-3 fw-bold"
            onClick={onClickHandler}
          >
            Log out
          </button>
        </div>
      </div>
    </nav>
  );
}
