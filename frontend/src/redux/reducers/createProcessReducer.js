const createProcessReducer = (state = false, action) =>{
    switch(action.type){
        case 'CREATE_PROCESS':
            return true
        default:
            return false
    }
}

export default createProcessReducer