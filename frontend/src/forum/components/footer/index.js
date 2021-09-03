import React from 'react'
import logoGit  from './GitHub-Dark.png'
import logoCredly from './Credly-Logo.webp'
import logoLinkedln from './LinkedlnLogo.png'
import './styles.css'

export default function Footer(props){
    return(
        <div className="container-fluid py-3 footer align-items-center">
            <div className="container-fluid d-flex justify-content-around pt-1">
                <a className="pt-2" href="https://www.credly.com/users/ka-yung-casper-tsang/badges">
                    <img src={logoCredly} width="100" alt="Acclaim profile"/>
                </a>      
                <a className="pt-1" href="https://github.com/kyctsang">
                    <img src={logoGit} width="50" alt="GitHib profile"/>
                </a>
                <a href="https://www.linkedin.com/in/ka-yung-casper-tsang-8b5627172/">
                    <img src={logoLinkedln} width="75" alt="Linkedln profile"/>
                </a>
            </div>
        </div>
    )
}