import AddBookElement from "../components/book/AddBookElement";
import StallNavigation from "../components/Layout/StallNavigation";
import axios from "../components/api/axios";
import { useEffect } from "react";

export default function AddBook() {
  useEffect(() => {
    axios.defaults.headers.common["Authorization"] = `Bearer ${
      JSON.parse(localStorage.getItem("login")).token
    }`;
  }, []);
  return (
    <>
      <StallNavigation page="home" />
      <div className="d-flex flex-column align-items-center p-2 ">
        <AddBookElement />
      </div>
    </>
  );
}
