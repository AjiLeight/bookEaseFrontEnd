import "./Card.module.css";

export default function Card(props) {
  return <div className="card w-25">{props.children}</div>;
}
