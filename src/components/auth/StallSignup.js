import { useRef } from "react";
import { useHistory } from "react-router-dom";
import axios from "../api/axios";

export default function StallSignUp() {
  const history = useHistory();

  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const addressRef = useRef();
  const districtRef = useRef();
  const phoneRef = useRef();
  const cityRef = useRef();

  function signupHandler(event) {
    event.preventDefault();

    const enteredName = nameRef.current.value;
    const enteredEmail = emailRef.current.value;
    const enteredPassword = passwordRef.current.value;
    const enteredAddress = addressRef.current.value;
    const enteredDistrict = districtRef.current.value;
    const enteredPhone = phoneRef.current.value;
    const enteredCity = cityRef.current.value;

    const userData = {
      name: enteredName,
      email: enteredEmail,
      password: enteredPassword,
      address: enteredAddress,
      district: enteredDistrict,
      phone: enteredPhone,
      city: enteredCity,
    };

    axios.post("/api/auth/register-stall", userData).then((res) => {
      localStorage.setItem(
        "login",
        JSON.stringify({
          login: "true",
          token: res.data.accessToken,
          role: "STALL",
        })
      );
      history.push("/stall-home");
    });
  }

  return (
    <form>
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
      <label htmlFor="addresss" className="mb-2">
        Address
      </label>
      <input
        type="text"
        className="form-control align-self-start mb-2"
        id="addresss"
        ref={addressRef}
        required
      ></input>

      <label htmlFor="district" className="mb-2">
        District
      </label>
      <select
        name="district"
        id="district"
        className="form-control align-self-start mb-2"
        ref={districtRef}
      >
        <option value="Trivandrum">Trivandrum</option>
        <option value="Kollam">Kollam</option>
        <option value="Pathanamthitta">Pathanamthitta</option>
        <option value="Alappuzha">Alappuzha</option>
        <option value="Kottayam">Kottayam</option>
        <option value="Idukki">Idukki</option>
        <option value="Ernakulam">Ernakulam</option>
        <option value="Thrissur">Thrissur</option>
        <option value="Palakkad">Palakkad</option>
        <option value="Malappuram">Malappuram</option>
        <option value="Kozhikkod">Kozhikkod</option>
        <option value="Wayanad">Wayanad</option>
        <option value="Kannur">Kannur</option>
        <option value="Kasargod">Kasargod</option>
      </select>

      <label htmlFor="city" className="mb-2">
        City
      </label>
      <input
        type="text"
        className="form-control align-self-start mb-2"
        id="city"
        ref={cityRef}
        required
      ></input>
      <label htmlFor="phone" className="mb-2">
        Phone
      </label>
      <input
        type="text"
        className="form-control align-self-start mb-2"
        id="phone"
        ref={phoneRef}
        required
      ></input>
      <label htmlFor="email" className="mb-2">
        Email
      </label>
      <input
        type="text"
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
      <button className="btn btn-outline-primary mt-2" onClick={signupHandler}>
        SignUp
      </button>
    </form>
  );
}
