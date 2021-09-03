const findByCategoryReducer = (state = {payload: [], loading: true}, action) => {
    switch(action.type){
        case 'FIND_BY_CATEGORY':
            return {...state, loading: true}
        case 'FOUND_BY_CATEGORY':
            return { ...state, payload: action.payload, loading: false}
        case 'SELECTED_TOPIC':
            return { ...state, loading: false}    
        case 'SELECT_TOPIC':
            return { ...state, loading: false}    
        default:
            return {...state, loading: true}
    }
}

export default findByCategoryReducer