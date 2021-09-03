import React from 'react'
import { useSelector } from 'react-redux'

export default function Content(props){
    const title = useSelector(state => state.topicSelected.title)
    const contents = useSelector(state => state.topicSelected.payload)

    const listOfContents = contents.map((content, id) => {
        return(
            <tr key={id}>
                <td>{id}</td>
                <td>{content[1]}</td>
                <td>{content[0]}</td>
            </tr>
        )
    })
    return(
        <div className="container h-100">
                <h2 className="my-4">Discussion in topic "{title}"</h2> 
                <table className="table table-primary table-bordered table-hover">
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Written by</th>
                        <th>Comments</th>
                    </tr>
                </thead>
                <tbody>
                    {listOfContents}
                </tbody>
                </table>
            </div>
    )
}