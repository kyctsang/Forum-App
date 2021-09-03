import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Content from './Content'
import './styles.css'


export default function SearchResults(props){
    const selected = useSelector(state => !state.topicSelected.loading)
    const topicsSearched = useSelector(state => state.findByCategory.payload)
    const dispatch = useDispatch()
    
    function handleClick(event){
        console.log(selected)
        console.log("Selected Topic:")
        console.log(event.target.name)
        console.log(event.target.id)
        dispatch({type: 'SELECT_TOPIC', topic_id: event.target.id, payload: event.target.name})
        console.log(selected)
    }


    let category
    let multiplecategories = false
    const topics = topicsSearched.map((topic) => {
        if (!multiplecategories){
            var prevCategory = category ? category : topic.category
            category = topic.category
        }else{
            category = "All"
        }

        multiplecategories = prevCategory===category ? false : true
        return(
            <tr key={topic.id}>
                <td>{topic.id}</td>
                <td><a className="title" id={topic.id} name={topic.title} onClick={handleClick}>{topic.title}</a></td>
                <td>{topic.category}</td>
                <td>{topic.author}</td>
            </tr>
        )
    })


    return(
        <div className="container h-100">
            {selected ? <Content />
            :
            <div className="container h-100">
                <h2 className="pt-4 mb-4">Topic in category "{category}":</h2> 
                <h6>click on title to view its content</h6>
                <table className="table table-primary table-bordered table-hover">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Category</th>
                        <th>Author</th>
                    </tr>
                </thead>
                <tbody>
                    {topics}
                </tbody>
                </table>
            </div>
            }
            
        </div>
    )
}