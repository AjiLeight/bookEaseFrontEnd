import { useContext } from "react";
import { Link, useHistory, useRouteMatch } from "react-router-dom";
import ReservationContext from "../../store/reservation-context";

export default function MainNavigation(props) {
  let match = useRouteMatch();
  const history = useHistory();
  const reservationCtx = useContext(ReservationContext);

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
          {props.current !== "home" ? (
            <Link
              className="btn border--subtle text-dark m-3 fw-bold"
              to={match.url}
            >
              HOME
            </Link>
          ) : (
            <>
              <button
                className="btn border--subtle text-dark m-3 fw-bold"
                onClick={() => history.go(0)}
              >
                HOME
              </button>
              <Link
                className="btn border--subtle text-dar fw-bold"
                to={`${match.url}/cart`}
              >
                RESERVATIONS
              </Link>
              <span className="badge bg-secondary">
                {reservationCtx.totalReservations}
              </span>
            </>
          )}
          <button
            className="btn border--subtle text-dar m-3 fw-bold"
            onClick={onClickHandler}
          >
            LOGOUT
          </button>
        </div>
      </div>
    </nav>
  );
}
