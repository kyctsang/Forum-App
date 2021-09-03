const selectTopicReducer = (state = {payload: [], topic_id: -1, title: "", loading: true}, action) => {
    switch(action.type){
        case 'SELECT_TOPIC':
            return {...state, loading: true}
        case 'SELECTED_TOPIC':
            return {...state, payload: action.payload, topic_id: action.topic_id, title: action.title, loading: false}
        case 'CREATE_PROCESS':
            return {...state}
        default:
            return {...state, topic_id: -1, title: "", loading: true}
    }
}

export default selectTopicReducer