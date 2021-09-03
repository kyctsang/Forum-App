import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

export default function AddComment(props){
    const dispatch = useDispatch()
    const topicId = useSelector(state => state.topicSelected.topic_id)
    const currentUser = useSelector(state => state.login.user)

    const [ content, setContent ] = useState("")

    function handleSubmit(event){
        const commentInfo = {topic_id: topicId, content: content, written_by: currentUser}
        fetch("/contents/add",{
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(commentInfo)
        })
        .then(alert('Comment has been added successfully!'))
        event.preventDefault()
        dispatch({type: 'TO_TOPIC_PAGE'})
    }

    return(
        <form className="container pt-4" style={{'maxWidth': '65%'}}>
                <div className="form-group pb-2">
                    <label htmlFor="comment">Comment</label>
                    <textarea 
                    id="comment"
                    className="form-control" 
                    style={{height: '200px'}}
                    placeholder="Enter content (can be empty)" 
                    onChange={(event) => setContent(event.target.value)} 
                    />
                </div>
                <div className="mt-3 float-right">
                    <button className="btn border-primary" onClick={(event) => handleSubmit(event)}>Add</button>
                </div>
            </form>
    )
}