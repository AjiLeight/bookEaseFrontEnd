import { Link } from "react-router-dom";

export default function ErrorPage(props) {
  return (
    <>
      <div className="d-flex flex-column ">
        <h2> Some Error has been occured</h2>
        <Link to={"/"}>Go to Login</Link>
      </div>
    </>
  );
}
