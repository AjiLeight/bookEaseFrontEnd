import { useRef } from "react";

export default function UserSignup(){

    const nameRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()

    function signupHandler(event){

        event.preventDefault()

        const enteredName = nameRef.current.value;
        const enteredEmail = emailRef.current.value;
        const enteredPassword = passwordRef.current.value;

        const userData = {
            name: enteredName,
            email: enteredEmail,
            password: enteredPassword
        }

        console.log(userData)
    }

    return(
        <form>
            <label htmlFor="name" className="mb-2">Name</label>
            <input type="text" className="form-control align-self-start mb-2" id="name" ref={nameRef} required></input>
            <label htmlFor="email" className="mb-2">Email</label>
            <input type="text" className="form-control align-self-start mb-2" id="email" ref={emailRef} required></input>
            <label htmlFor="password" className="mb-2">Password</label>
            <input type="text" className="form-control align-self-start mb-2" id="password" ref={passwordRef} required></input>
            <button className='btn btn-outline-primary mt-2' onClick={signupHandler}>SignUp</button>
        </form>
    );
}