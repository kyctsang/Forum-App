const categoryInitReducer = (state = { payload: [], loading: true }, action) => {
    switch(action.type){
        case 'INIT_CATEGORY':
            return {...state, loading: true}
        case 'INITED_CATEGORY':
            return {...state, payload: action.payload, loading: false}
        default:
            return state
    }

}

export default categoryInitReducer