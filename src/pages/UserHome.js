import { useContext, useState, useEffect } from "react";
import MainNavigation from "../components/Layout/MainNavigation";
import BookTable from "../components/book/BookTable";
import SearchBar from "../components/book/SearchBar";
import StallTable from "../components/user/StallTable";
import axios from "../components/api/axios";
import ReservationContext from "../store/reservation-context";
import { useHistory } from "react-router-dom";

function UserHome() {
  const [currPageContext, setCurrentPageContext] = useState("book");
  const [bookResult, setBookResult] = useState([]);
  const [stallResult, setStallResult] = useState([]);
  const [book, setBook] = useState({});
  const user = JSON.parse(localStorage.getItem("login")).user;
  const reservationCtx = useContext(ReservationContext);
  const history = useHistory(0);

  useEffect(() => {
    async function getData() {
      await reservationCtx.getReservations(user);
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
        <SearchBar searchFor="book" onSearch={searchBookHandler} />
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
      <div className="d-flex p-2 justify-content-start">
        <button
          className="btn text-primary ms-4"
          onClick={() => {
            setCurrentPageContext("book");
          }}
        >
          search Another Book
        </button>
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
