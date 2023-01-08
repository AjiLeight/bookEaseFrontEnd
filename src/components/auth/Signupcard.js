import { useState } from "react"
import StallSignUp from "./StallSignup"
import UserSignup from "./UserSignup"

export default function SignupCard(){
    const [user, setuser] = useState(true)


    function roleToggleHandler(){
        setuser(!user);
    }


    return(
        <>
        <div className="card-header">
        <span className="text-primary" onClick={roleToggleHandler} >{user?"Stall Signup":"User Signup"}</span>
        </div>
        <div className="card-body">
            { user?<UserSignup />:<StallSignUp /> }
        </div>
        </>
    )
}