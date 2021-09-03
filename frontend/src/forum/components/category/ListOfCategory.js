import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'


export default function ListOfCategory(props){
    const category = useSelector(state => state.category.payload)
    const dispatch = useDispatch()

    useEffect(() =>{
        console.log("Fetching category...")
        dispatch({type: 'INIT_CATEGORY'})
    }, [])

    function handleClick(event){
        console.log("Name:",event.target.name)
        dispatch({type: 'FIND_BY_CATEGORY', payload: event.target.name})

    }

    const ListOfCategory = category.map((item) => {
        return(
            <div className="col-sm-5 text-center font-weight-bold  offset-1 my-4" key={item.category}>
                <button 
                    className="btn btn-secondary btn-lg" 
                    name={item.category} 
                    value={item.category} 
                    onClick={handleClick}>
                        {item.category}
                </button>
            </div>
        )
    })
    return(
        <div className="container">
            <h1 className="text-center pt-4 mb-3">Please select category</h1>
            <div className="container d-flex justify-content-center">
                <div className="row w-75">
                    {ListOfCategory}
                </div>
            </div>
        </div>
    )
}