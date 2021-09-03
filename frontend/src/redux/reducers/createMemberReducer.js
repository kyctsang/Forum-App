const createMemberReducer = (state = { payload: "Waiting" }, action) => {
    switch(action.type){
        case 'CREATE_MEMBER':
            return state
        case 'CREATE_MEMBER_STATUS':
            return {...state, payload: action.payload}
        default:
            return {...state, payload: "Waiting"}
    }

}

export default createMemberReducer