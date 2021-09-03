const loginReducer = (state = {user: '', payload: false}, action) => {
    switch(action.type){
        case 'LOGIN':
            return {...state, payload: false}
        case 'LOGIN_STATUS':
            return {...state, user: action.user, payload: action.payload}
        case 'LOGOUT':
            return {...state, user: '', payload: false}
        default:
            return state
    }
}

export default loginReducer