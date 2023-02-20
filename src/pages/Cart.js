import { useContext, useEffect } from "react";
import CartItems from "../components/cart/CartItems";
import MainNavigation from "../components/Layout/MainNavigation";
import ReservationContext from "../store/reservation-context";
import axios from "../components/api/axios";

function Cart() {
  const reservationCtx = useContext(ReservationContext);
  const user = JSON.parse(localStorage.getItem("login")).user;

  useEffect(() => {
    axios.defaults.headers.common["Authorization"] = `Bearer ${
      JSON.parse(localStorage.getItem("login")).token
    }`;
    reservationCtx.getReservations(user);
  }, []);

  async function refreshReservations() {
    reservationCtx.getReservations(user);
  }

  return (
    <>
      <MainNavigation />
      <div className="d-flex flex-column align-items-center p-2 ">
        {reservationCtx.totalReservations === 0 ? (
          <>Reservations are empty</>
        ) : (
          reservationCtx.reservations.map((reservation) => (
            <CartItems
              key={reservation.bookId}
              reservation={reservation}
              onCancel={refreshReservations}
            />
          ))
        )}
      </div>
    </>
  );
}

export default Cart;
