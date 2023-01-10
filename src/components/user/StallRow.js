export default function StallRow(props) {
  return (
    <div className="card flex-column p-3 w-50 mb-3">
      <span className="fw-bold">{props.name}</span>
      <p>
        Address : {props.address} <br />
        city: {props.city}
        <br />
        district : {props.district}
        <br />
        phone : {props.phone}
        <br />
      </p>
      <div>
        <button
          className="btn btn-outline-primary"
          onClick={() => {
            props.onCart(props.name, props.address, props.city);
          }}
        >
          CART
        </button>
      </div>
    </div>
  );
}
