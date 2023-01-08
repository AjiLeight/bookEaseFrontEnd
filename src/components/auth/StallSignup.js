import { useRef } from "react";

export default function StallSignUp(){

    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const addressRef = useRef();
    const districtRef = useRef();
    const phoneRef = useRef();
    const cityRef = useRef();

    function signupHandler(event){
        event.preventDefault();
        const enteredName = nameRef;
        const enteredEmail = emailRef;
        const enteredPassword = passwordRef;
        const enteredAddress = addressRef;
        const enteredDistrict = districtRef;
        const enteredPhone = phoneRef;
        const enteredCity = cityRef;

        const userData = {
            name : enteredName,
            email: enteredEmail,
            password: enteredPassword,
            address: enteredAddress,
            district: enteredDistrict,
            phone: enteredPhone,
            city: enteredCity
        }

        console.log(userData)
        
    }

    return(
            <form>
                <label htmlFor="name" className="mb-2">Name</label>
                <input type="text" className="form-control align-self-start mb-2" id="name" ref={nameRef} required></input>
                <label htmlFor="addresss" className="mb-2">Address</label>
                <input type="text" className="form-control align-self-start mb-2" id="addresss" ref={addressRef} required></input>
                <label htmlFor="district" className="mb-2">District</label>
                <input type="text" className="form-control align-self-start mb-2" id="district" ref={districtRef} required></input>
                <label htmlFor="city" className="mb-2">City</label>
                <input type="text" className="form-control align-self-start mb-2" id="city" ref={cityRef} required></input>
                <label htmlFor="phone" className="mb-2">Phone</label>
                <input type="text" className="form-control align-self-start mb-2" id="phone" ref={phoneRef} required></input>
                <label htmlFor="email" className="mb-2">Email</label>
                <input type="text" className="form-control align-self-start mb-2" id="email" ref={emailRef} required></input>
                <label htmlFor="password" className="mb-2">Password</label>
                <input type="password" className="form-control align-self-start mb-2" id="password" ref={passwordRef} required></input>
                <button className='btn btn-outline-primary mt-2' onClick={signupHandler}>SignUp</button>
            </form>
        );
}