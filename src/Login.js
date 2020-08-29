import React from 'react'
import "./Login.css"
import Button from "@material-ui/core/Button"
import {useStateValue} from "./StateProvider"
import {auth,provider} from "./firebase"
function Login() {
    const [{user},dispatch]=useStateValue()

    const handlesignin=()=>{
     auth.signInWithPopup(provider).then((result)=>{
         dispatch({
             type:"SET_USER",
             user:result.user
         })
     })
    }
    return (
        <div className="login">
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"/> 
            <Button onClick={handlesignin} >Sign In with Google</Button>
        </div>
    )
}

export default Login
