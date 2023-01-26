import { useState } from "react";

export default function StockRow(props) {
  const [update, setUpdate] = useState(false);
  function toggleUpdate() {
    setUpdate(!update);
  }

  const updateElemet = (
    <div className="d-flex flex-row mt-2">
      <input type="text" className="form-control w-25 m-2" />
      <button className="btn btn-outline-dark m-2">SAVE</button>
      <button className="btn btn-outline-dark m-2" onClick={toggleUpdate}>
        CANCEL
      </button>
    </div>
  );
  return (
    <div className="card flex-column p-3 w-50 mb-3">
      <span className="fw-bold fs-4">{props.name}</span>
      <span className="fw-bold">stock : {props.stock}</span>
      {update ? (
        updateElemet
      ) : (
        <button
          className="btn btn-outline-dark w-25 mt-2"
          onClick={toggleUpdate}
        >
          UPDATE
        </button>
      )}
    </div>
  );
}
