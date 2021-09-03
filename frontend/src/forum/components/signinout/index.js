import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Signin from './Signin'
import Signout from './Signout'

export default function Sign(props){
    const signed = useSelector(state => state.login.payload)
    const dispatch = useDispatch()

    useEffect(() =>{
        dispatch({type: 'MEANINGLESS'})
    })

    return(
        <div className="container" style={{'padding-bottom': '100px'}}>
            {signed
            ?<Signout />
            :<Signin />
            }
        </div>
    )
}