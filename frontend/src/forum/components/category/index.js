import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import SearchResults from './SearchResults'
import ListOfCategory from './ListOfCategory'
import AddComment from './AddComment'
import CreateTopic from './CreateTopic'
import { createProcess } from '../../../redux/actions'

export default function Category(props) {
    const dispatch = useDispatch()
    const search = useSelector(state => state.findByCategory.loading)
    const addButton = useSelector(state => state.topicSelected.loading)
    const createOrAdd = useSelector(state => state.createProcess)
    const logged = useSelector(state => state.login.payload)

    const show = logged === "Success" ? "none" : "block"
    const disable = logged === "Success" ? false : true
    return (
        <div className="container content">
            {createOrAdd
                ? addButton
                    ? <CreateTopic />
                    : <AddComment />
                : search
                    ? <div className="container content">
                        <ListOfCategory />
                        <div className="float-right mt-2 mr-5">
                            <p className="text-danger pb-0 mb-0" style={{ display: show }}>*Please log in to use this button</p>
                            <button disabled={disable} className="btn border-primary " onClick={() => dispatch(createProcess())}>{"Create Topic"}</button>
                        </div>

                    </div>
                    : <div className="container content">
                        <SearchResults />
                        <div className="float-right mt-2 mr-5">
                            <p className="text-danger pb-0 mb-0" style={{ display: show }}>*Please log in to use this button</p>
                            <button disabled={disable} className="btn border-primary " onClick={() => dispatch(createProcess())}>{addButton ? "Create Topic" : "Add comment"}</button>
                        </div>
                    </div>
            }
        </div>
    )
}