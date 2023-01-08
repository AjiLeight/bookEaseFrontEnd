import 'bootstrap/dist/css/bootstrap.min.css'
import { useRef, useState } from 'react'
import {   useHistory } from 'react-router-dom'
import axios from '../api/axios'

function LoginCard(){

    const [role, setRole] = useState("CUSTOMER")

    const history = useHistory()
    const emailRef = useRef()
    const passwordRef = useRef()

    function roleHandler(event){
        setRole(event.target.value);
    }

    async function loginHandler(event){
        event.preventDefault();

        const enteredEmail = emailRef.current.value;
        const enteredPassword = passwordRef.current.value;

        const userData = {
            email: enteredEmail,
            password: enteredPassword,
        }
        
        await axios
            .post('/api/auth/login', userData)
            .then(res => {
                localStorage.setItem('login', JSON.stringify(
                    {   
                        login:'true',
                        token:res.data.accessToken
                    }
                    ));
                console.log(res);

            }).then(() => {
                if(role==="CUSTOMER"){
                    history.push('/customerHome')
                }else{
                    history.push('/stallHome')
                }
            });
    }

    return(
        <div className='card-body'>
            <form >
                <label htmlFor='username' className='mb-2'>Username</label>
                <input 
                    className='form-control align-self-start mb-2' 
                    type="text" 
                    placeholder="email"
                    ref={emailRef} 
                    id="username"
                    required></input>
                <label htmlFor='passsword' className='mb-2'>Password</label>
                <input 
                    className='form-control align-self-start mb-2' 
                    type="password" 
                    placeholder="password" 
                    ref={passwordRef} 
                    id="password"
                    required></input>
                <div className="form-check mb-2" >
                    <input 
                        className="form-check-input" 
                        type="radio" 
                        name="role" 
                        id="user" 
                        value="CUSTOMER"
                        onClick={roleHandler}
                        defaultChecked />
                    <label className="form-check-label" htmlFor="user">
                        User
                    </label>
                </div>
                <div className="form-check mb-2">
                    <input 
                        className="form-check-input" 
                        type="radio" 
                        name="role" 
                        id="stall"
                        value="STALL"
                        onClick={roleHandler}
                        />
                    <label className="form-check-label" htmlFor="stall">
                        Stall
                    </label>
                </div>
                <button className='btn btn-outline-primary' onClick={loginHandler}>Login</button>

            </form>
        </div>
    )
}

export default LoginCard