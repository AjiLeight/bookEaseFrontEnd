import { useState } from "react";
import MainNavigation from "../components/Layout/MainNavigation";
import BookTable from "../components/user/BookTable";
import SearchBar from "../components/user/SearchBar";
import StallTable from "../components/user/StallTable";
import axios from "../components/api/axios";

function UserHome() {
  const [currPageContext, setCurrentPageContext] = useState("book");
  const [bookResult, setBookResult] = useState([]);
  const [stallResult, setStallResult] = useState([]);
  const [book, setBook] = useState({});

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

  async function handleCart() {}

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
          <StallTable stalls={stallResult} onCart={handleCart} />
        ) : (
          <p>Book Unavailable for the selected region</p>
        )}
      </div>
    </>
  );

  return (
    <div>
      <MainNavigation />
      {currPageContext === "book" ? searchBookElement : searchStallElement}
    </div>
  );
}

export default UserHome;
