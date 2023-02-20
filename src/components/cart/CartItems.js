import { useContext, useEffect, useState } from "react";
import axios from "../api/axios";
import ReservationContext from "../../store/reservation-context";

export default function CartItems({ reservation, onCancel }) {
  const [book, setbook] = useState({});
  const [stall, setStall] = useState({});
  const reservationCtx = useContext(ReservationContext);
  const user = JSON.parse(localStorage.getItem("login")).user;

  useEffect(() => {
    async function getBookDetails() {
      await axios.get(`api/v1/book/${reservation.bookId}`).then(async (res) => {
        const thisBook = await res.data;
        setbook(thisBook);
      });
    }

    async function getStallDetails() {
      await axios
        .get(`api/v1/stall/${reservation.stallEmail}`)
        .then(async (res) => {
          const thisStall = await res.data;
          setStall(thisStall);
        });
    }
    getBookDetails();
    getStallDetails();
  }, [reservation]);

  async function cancelHandler() {
    const data = {
      bookId: reservation.bookId,
      stallEmail: reservation.stallEmail,
      userEmail: reservation.userEmail,
    };
    console.log(data);
    await reservationCtx.cancelReservation(data, user);
    onCancel();
  }

  return (
    <>
      <div className="card w-50 m-4">
        <div className="card-header p-3">
          <div className="fw-bold fs-4">{book.bookName}</div>
          <div className="fs-7">{book.author}</div>
        </div>
        <div className="card-body p-3">
          <span className="fw-bold fs-6">{stall.name}</span>
          <br />
          <span className="fs-7">{stall.address}</span>
          <br />
          <span className="fs-7">{stall.district}</span>
          <br />
          <span className="fs-7">{book.price}</span>
        </div>
        <div className="card-footer p-3">
          <button className="btn btn-danger" onClick={cancelHandler}>
            CANCEL RESERVATION
          </button>
        </div>
      </div>
    </>
  );
}
