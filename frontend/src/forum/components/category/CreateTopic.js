import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

export default function CreateTopic(props) {
    const dispatch = useDispatch()
    const category = useSelector(state => state.category.payload)
    const currentUser = useSelector(state => state.login.user)

    const [title, setTitle] = useState("")
    const [selectedCategory, setSelectedCategory] = useState("All")
    const [content, setContent] = useState("")

    function handleSubmit(event) {
        const topicInfo = { title: title, category: selectedCategory, author: currentUser }
        const commentInfo = { topic_id: -1, content: content, written_by: currentUser }
        fetch("/topics/create", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(topicInfo)
        }).then(res => fetch("/contents/add", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(commentInfo)
        })).then(alert("Topic has been created successfully!"))
        event.preventDefault()
        dispatch({ type: 'TO_TOPIC_PAGE' })
    }

    return (
        <form className="container pt-4" style={{ 'maxWidth': '65%' }}>
            <div className="form-group pb-2">
                <label htmlFor="title">Title</label>
                <input
                    id="title"
                    className="form-control"
                    placeholder="Enter title"
                    onChange={(event) => setTitle(event.target.value)}
                />
            </div>
            <div className="form-group pb-2">
                <label htmlFor="category">Category</label>
                <br />
                <select id="category" className="selectpicker w-100" onChange={(event) => setSelectedCategory(event.target.value)}>
                    {category.map((item, id) => {
                        return (
                            <option key={id} value={item.category}>{item.category}</option>
                        )
                    })}
                </select>
            </div>
            <div className="form-group pb-2">
                <label htmlFor="content">Content</label>
                <textarea
                    id="content"
                    className="form-control"
                    style={{ height: '200px' }}
                    placeholder="Enter content (can be empty)"
                    onChange={(event) => setContent(event.target.value)}
                />
            </div>
            <div className="mt-5 float-right mr-3">
                <button className="btn border-primary " onClick={(event) => handleSubmit(event)}>Create</button>
            </div>
        </form>
    )
}