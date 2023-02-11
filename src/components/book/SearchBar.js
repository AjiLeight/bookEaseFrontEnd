import { useRef } from "react";

function SearchBar(props) {
  const currentSearch = props.searchFor;
  const searchDataRef = useRef();

  const searchBookElement = (
    <>
      <input
        type="text"
        placeholder="search book"
        className="form-control m-2"
        style={{ width: "25rem" }}
        ref={searchDataRef}
      ></input>
      <button
        className="btn btn-outline-primary m-2"
        onClick={() => {
          props.onSearchBook(searchDataRef.current.value);
        }}
      >
        search
      </button>
    </>
  );

  return (
    <div className="d-flex mt-4">
      {currentSearch === "book" ? searchBookElement : <></>}
    </div>
  );
}

export default SearchBar;
