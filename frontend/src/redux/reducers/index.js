import categoryInitReducer from './categoryInitReducer'
import { combineReducers } from 'redux'
import findByCategoryReducer from './findByCategoryReducer'
import selectTopicReducer from './selectTopicReducer'
import createMemberReducer from './createMemberReducer'
import loginReducer from './loginReducer'
import createProcessReducer from './createProcessReducer'

const allReducers = combineReducers({
    category: categoryInitReducer,
    findByCategory: findByCategoryReducer,
    topicSelected: selectTopicReducer,
    createMember: createMemberReducer,
    login: loginReducer,
    createProcess: createProcessReducer,
})

export default allReducers