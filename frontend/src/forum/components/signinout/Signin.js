import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

export default function Signin(props){
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()

    const disablebutton = username === ""

    function handleSubmit(event){
        const info = event.target.name !== "Login as guest" 
                            ? { username: username, password: password } 
                            : { username: "guest", password: "" }

        dispatch({type: event.target.value, payload: info})
        event.preventDefault()
    }

    return(
            <form className="container pt-4" style={{'maxWidth': '55%'}}>
                <div className="form-group pb-2">
                    <label htmlFor="username">Username: <small className="text-danger">can be empty only if login as guest</small></label>
                    <input className="form-control " placeholder="Enter your username" id="username" onChange={(event) => setUsername(event.target.value)}/>
                </div>
                <div className="form-group pb-2">
                    <label htmlFor="password">Password:</label>
                    <input className="form-control " placeholder="Enter your password" id="password" onChange={(event) => setPassword(event.target.value)}/>
                </div>
                    <button disabled={disablebutton} onClick={handleSubmit} name="Register" value="CREATE_MEMBER" className="btn btn-primary float-left mx-2">Register</button>
                    <button disabled={disablebutton} onClick={handleSubmit} name="Login" value="LOGIN" className="btn btn-primary float-right mx-2">Login</button>
                    <button onClick={handleSubmit} name="Login as guest" value="LOGIN" className="btn btn-primary float-right">Login as guest</button>
            </form>
    )
}