import StallRow from "./StallRow";

function StallTabel(props) {
  return (
    <>
      {props.stalls.map((stall) => (
        <StallRow
          key={stall.email}
          name={stall.name}
          address={stall.address}
          city={stall.city}
          phone={stall.contact}
          district={stall.district}
          email={stall.email}
          onCart={props.onCart}
        />
      ))}
    </>
  );
}

export default StallTabel;
