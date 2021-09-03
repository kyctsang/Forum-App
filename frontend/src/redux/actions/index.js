export const initCategory = () => {
    return{
        type: 'INIT_CATEGORY'
    }
}

export const findByCategory = (payload) => {
    return{
        type: 'FIND_BY_CATEGORY',
        payload: payload
    }
}

export const selectTopic = (payload) => {
    return{
        type: 'SELECT_TOPIC',
        payload: payload
    }
}

export const createMember = (payload) => {
    return{
        type: 'CREATE_MEMBER',
        payload: payload
    }
}

export const login = (payload) => {
    return{
        type: 'LOGIN',
        payload: payload
    }
}

export const createProcess = () => {
    return{
        type: 'CREATE_PROCESS'
    }
}