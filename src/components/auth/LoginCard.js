import "bootstrap/dist/css/bootstrap.min.css";
import { useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "../api/axios";

function LoginCard() {
  const [errorMessage, setErrorMessage] = useState("");

  const history = useHistory();
  const emailRef = useRef();
  const passwordRef = useRef();

  async function loginHandler(event) {
    event.preventDefault();

    const enteredEmail = emailRef.current.value;
    const enteredPassword = passwordRef.current.value;

    const userData = {
      email: enteredEmail,
      password: enteredPassword,
    };

    await axios
      .post("/api/auth/login", userData, { headers: { Authorization: "" } })
      .then(async (res) => {
        const role = await res.data.role;
        const token = await res.data.accessToken;
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        localStorage.setItem(
          "login",
          JSON.stringify({
            login: "true",
            token: token,
            role: role,
            user: enteredEmail,
          })
        );
        if (localStorage.getItem("login")) {
          if (role === "CUSTOMER") {
            history.push("/user-home");
          } else {
            history.push("/stall-home");
          }
        }
      })
      .catch((error) => {
        const status = error.response.status;
        if (status === 401) {
          setErrorMessage("Wrong Username or Password");
        }
      });
  }

  return (
    <div className="card-body">
      <form>
        <label htmlFor="username" className="mb-2">
          Email
        </label>
        <input
          className="form-control align-self-start mb-2"
          type="email"
          placeholder="email"
          ref={emailRef}
          id="username"
          required
        ></input>
        <label htmlFor="passsword" className="mb-2">
          Password
        </label>
        <input
          className="form-control align-self-start mb-2"
          type="password"
          placeholder="password"
          ref={passwordRef}
          id="password"
          required
        ></input>
        <button
          className="btn btn-outline-primary mt-2 mb-2"
          onClick={loginHandler}
        >
          Login
        </button>
      </form>
      <span className="text-danger mt-3">
        {errorMessage ? errorMessage : <></>}
      </span>
    </div>
  );
}

export default LoginCard;
