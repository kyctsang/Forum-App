import { all } from 'redux-saga/effects';
import categoryInitWatcher from './categoryInit';
import findByCategoryWatcher from './findByCategory';
import selectTopicWatcher from './selectTopic';
import loginWatcher from './login';
import createMemberWatcher from './createMember';

export default function* rootSaga(){
    yield all([
        categoryInitWatcher(),
        findByCategoryWatcher(),
        selectTopicWatcher(),
        loginWatcher(),
        createMemberWatcher()
    ])
}