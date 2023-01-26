import { useEffect, useState } from "react";
import axios from "../components/api/axios";
import StallNavigation from "../components/Layout/StallNavigation";
import SearchUserBar from "../components/stall/SearchUserBar";
import StockTable from "../components/stock/StockTable";

export default function Stock() {
  const [stock, setStock] = useState([]);
  const [filterstock, setFilterStock] = useState([]);
  const [isMounted, setIsMounted] = useState(false);
  const user = JSON.parse(localStorage.getItem("login")).user;

  useEffect(() => {
    async function fetchStock(user) {
      await axios.get(`/api/v1/stock/${user}`).then(async (res) => {
        await res.data.forEach(async (tempStock) => {
          await axios
            .get(`/api/v1/book/${tempStock.bookId}`)
            .then(async (book) => {
              const newStock = {
                bookId: tempStock.bookId,
                bookName: book.data.bookName,
                stock: tempStock.stock,
              };
              setStock((prevStock) => [...prevStock, newStock]);
              setFilterStock((prevFilterStock) => [
                ...prevFilterStock,
                newStock,
              ]);
            });
        });
        setIsMounted(true);
      });
    }
    fetchStock(user);
  }, [user]);

  async function onSearchHandler(data) {
    const temp = stock.filter((res) =>
      res.bookName.toLowerCase().includes(data.toLowerCase())
    );
    setFilterStock(temp);
  }

  return (
    <>
      {isMounted ? (
        <>
          <StallNavigation />
          <div className="d-flex p-2 justify-content-center">
            <SearchUserBar searchHandler={onSearchHandler} />
          </div>
          <div className="d-flex flex-column align-items-center p-2 ">
            {filterstock.length !== 0 ? (
              <StockTable stocks={filterstock} />
            ) : (
              "empty"
            )}
          </div>
        </>
      ) : (
        <div className="d-flex flex-column align-items-center p-2 ">
          Loading
        </div>
      )}
    </>
  );
}
