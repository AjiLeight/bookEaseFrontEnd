import { useContext, useState } from "react";
import MainNavigation from "../components/Layout/MainNavigation";
import BookTable from "../components/user/BookTable";
import SearchBar from "../components/user/SearchBar";
import StallTable from "../components/user/StallTable";
import axios from "../components/api/axios";
import { useEffect } from "react";
import ReservationContext from "../store/reservation-context";

function UserHome() {
  const [currPageContext, setCurrentPageContext] = useState("book");
  const [bookResult, setBookResult] = useState([]);
  const [stallResult, setStallResult] = useState([]);
  const [book, setBook] = useState({});
  const user = JSON.parse(localStorage.getItem("login")).user;
  const reservationCtx = useContext(ReservationContext);

  useEffect(() => {
    async function getData() {
      await axios.get(`/api/v1/reservation/user/${user}`).then(async (res) => {
        localStorage.setItem("reservations", JSON.stringify(await res.data));
        reservationCtx.setReservation(
          JSON.parse(localStorage.getItem("reservations"))
        );
      });
    }
    getData();
  }, [user]);

  async function searchBookHandler(data) {
    if (data) {
      await axios.get(`/api/v1/book/search/name/${data}`).then((res) => {
        setBookResult(res.data);
      });
    }
  }

  async function stallSelectHandler(district, bookId, name, author, price) {
    if (district) {
      const searchObject = {
        bookId: bookId,
        district: district,
      };
      await axios.post("/api/v1/stall/district", searchObject).then((res) => {
        setStallResult(res.data);
        setCurrentPageContext("stall");
        const bookData = {
          id: bookId,
          name: name,
          author: author,
          price: price,
        };
        setBook(bookData);
      });
    }
  }

  const searchBookElement = (
    <>
      <div className="d-flex p-2 justify-content-center">
        <SearchBar searchFor="book" onSearchBook={searchBookHandler} />
      </div>
      <div className="d-flex flex-column align-items-center p-2 ">
        {bookResult.length !== 0 ? (
          <BookTable
            key={1}
            books={bookResult}
            onStallSelect={stallSelectHandler}
          />
        ) : (
          <p>Try Searching something</p>
        )}
      </div>
    </>
  );

  const searchStallElement = (
    <>
      <div className="d-flex p-2 justify-content-center">
        <SearchBar searchFor="stall" />
      </div>
      <div className="d-flex flex-column align-items-center p-2">
        {stallResult.length !== 0 ? (
          <StallTable stalls={stallResult} bookId={book.id} />
        ) : (
          <p>Book Unavailable for the selected region</p>
        )}
      </div>
    </>
  );

  return (
    <div>
      <MainNavigation current="home" />
      {currPageContext === "book" ? searchBookElement : searchStallElement}
    </div>
  );
}

export default UserHome;
