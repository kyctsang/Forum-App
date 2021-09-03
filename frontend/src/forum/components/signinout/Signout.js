import React from 'react'
import { useDispatch } from 'react-redux'


export default function Signout(props){
    const dispatch = useDispatch()

    function handleSignOut(){
        dispatch({type: 'LOGOUT'})
    }

    return(
        <div className="container pt-4" style={{'maxWidth': '65%'}}>
            <div className="container">
                <h2>Tab the nav item to navigate to other page or click the logout button to re-login</h2>
            </div>
            <div className="container d-flex justify-content-center pt-4">
                <button className="w-50" onClick={handleSignOut}>Logout</button>
            </div>
        </div>
    )
}