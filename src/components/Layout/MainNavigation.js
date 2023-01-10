import { Link, useHistory, useRouteMatch } from "react-router-dom";

export default function MainNavigation() {
  let match = useRouteMatch();
  const history = useHistory();
  function onClickHandler() {
    localStorage.removeItem("login");
    history.replace("/");
  }

  return (
    <nav className="navbar navbar-expand-lg bg-primary">
      <div className="container-fluid">
        <span className="navbar-brand fs-3 text-white fw-bold">BOOK-EASE</span>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className="nav-link fs-5 text-white"
                aria-current="page"
                to={match.url}
              >
                Home
              </Link>
            </li>
          </ul>
          <Link
            className="nav-link fs-5 text-white m-3"
            to={`${match.url}/cart`}
          >
            Cart
          </Link>
          <button
            className="btn text-white fw-bold m-3"
            onClick={onClickHandler}
          >
            Log out
          </button>
        </div>
      </div>
    </nav>
  );
}
