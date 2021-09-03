import React from 'react'

export default function Header(props){
    return(
        <div className="container-fluid py-3 bg-info">
            <div className="d-flex justify-content-center">
                <h1 style={{'font-family':'Universe'}}>Welcome to the Forum!!</h1>
            </div>
        </div>
    )
}