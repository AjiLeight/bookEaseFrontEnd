import { useRef, useState } from "react";
import axios from "../api/axios";
import { useHistory } from "react-router-dom";

export default function UserSignup() {
  const history = useHistory();
  const [authError, setAuthError] = useState(false);
  const [authErrorResponse, setAuthErrorResponse] = useState("");

  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  function signupHandler(event) {
    event.preventDefault();

    const enteredName = nameRef.current.value;
    const enteredEmail = emailRef.current.value;
    const enteredPassword = passwordRef.current.value;

    const userData = {
      name: enteredName,
      email: enteredEmail,
      password: enteredPassword,
    };

    axios
      .post("/api/auth/register-user", userData, {
        headers: { Authorization: "" },
      })
      .then(async (res) => {
        const token = await res.data.accessToken;
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        localStorage.setItem(
          "login",
          JSON.stringify({
            login: "true",
            token: res.data.accessToken,
            role: "CUSTOMER",
            user: enteredEmail,
          })
        );
        console.log(res);
        history.push("/user-home");
      })
      .catch((error) => {
        setAuthError(true);
        setAuthErrorResponse(error.response.data.accessToken);
      });
  }

  return (
    <form
      onSubmit={(e) => {
        signupHandler(e);
      }}
    >
      <label htmlFor="name" className="mb-2">
        Name
      </label>
      <input
        type="text"
        className="form-control align-self-start mb-2"
        id="name"
        ref={nameRef}
        required
      ></input>
      <label htmlFor="email" className="mb-2">
        Email
      </label>
      <input
        type="email"
        className="form-control align-self-start mb-2"
        id="email"
        ref={emailRef}
        required
      ></input>
      <label htmlFor="password" className="mb-2">
        Password
      </label>
      <input
        type="password"
        className="form-control align-self-start mb-2"
        id="password"
        ref={passwordRef}
        required
      ></input>
      <button type="submit" className="btn btn-outline-primary mt-2">
        SignUp
      </button>
      {authError ? <div>{authErrorResponse}</div> : <></>}
    </form>
  );
}
