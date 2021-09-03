import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

export default function Home(props) {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch({ type: 'MEANINGLESS' })
    })
    return (
        <div className="container pt-4" style={{'padding-bottom': '150px'}}>
            <div className="container w-75">
                <h1>Introduction</h1>
                <p>This forum is set aside for users to post topics and add comment using SPA(Single Page Application). This website consists of 4 parts:</p>
                <ol>
                    <li className="mb-2">Home
                        <ul>
                            <li>Introduction of usage of this webapp</li>
                        </ul>
                    </li >
                    <li className="mb-2">Topics
                        <ul>
                            <li>Display category, title, and cotents of topics by fetching API</li>
                            <li>Create topic or add topic after login</li>
                        </ul>
                    </li>
                    <li className="mb-2">Login
                        <ul>
                            <li>Authenticate user to create topic and add comment</li>
                            <li>Create user</li>
                        </ul>
                    </li>
                    <li className="mb-2">About
                        <ul>
                            <li>Skills used in this project</li>
                        </ul>
                    </li>
                </ol>

                <h1>Usage</h1>
                <ol>
                    <li className="pt-1 mb-2">View Topics
                        <ul>
                            <li>Click on Topic on the nav bar</li>
                            <li>Select desired category and title to view its contents</li>
                        </ul>
                    </li>
                    <li className="mb-2">Login
                        <ul>
                            <li>Login using existing username and password
                                <ul>
                                    <li>Guest login for fast login</li>
                                </ul>
                            </li>
                            <li>Create new user
                                <ul>
                                    <li>Username have to be unique</li>
                                    <li>Password will be encrypted by MD5 and store it in MySQL database</li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li className="pt-1">Create topics and add comments
                        <ul>
                            <li>Click on button at the bottom right of the page</li>
                            <li>Button will be disabled if user is not logged in</li>
                        </ul>
                    </li>
                </ol>
            </div>
        </div>
    )
}