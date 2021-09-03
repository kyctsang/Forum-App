import React from 'react'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import Home from '../home'
import Content from '../category'
import About from '../about'
import Sign from '../signinout'
import './styles.css'

export default function NavBar(props) {

    const routes = [
        {
            path: '/topics',
            exact: true,
            main: () => <Content />
        },
        {
            path: '/about',
            exact: true,
            main: () => <About />
        },
        {
            path: '/signin',
            exact: true,
            main: () => <Sign />
        },
        {
            path: '/',
            main: () => <Home />
        }
    ]

    return (
        <BrowserRouter>
            <nav className="navbar-color navbar navbar-expand sticky-top">
                <ul className="navbar-nav ml-auto ">
                    <li className="nav-item ">
                        <Link to="/home" className="nav-link px-3">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/topics" className="nav-link px-3">Topics</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/signin" className="nav-link px-3">Login</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about" className="nav-link px-3">About</Link>
                    </li>
                </ul>
            </nav>
            <Switch>
                {routes.map(route => (
                    <Route
                        key={route.path}
                        path={route.path}
                        exact={route.exact}
                        children={route.main}
                    />
                ))}
            </Switch>
        </BrowserRouter>
    )
}