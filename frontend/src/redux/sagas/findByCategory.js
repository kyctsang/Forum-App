import { put, takeLatest } from 'redux-saga/effects';

function* findByCategory(action){
    const topicInfo = yield fetch("/topics/bycategory?category=" + action.payload)
                            .then(res => res.json())
    console.log("Topics found by category \"" + action.payload + "\":")
    console.log(topicInfo)
    yield put({type: 'FOUND_BY_CATEGORY', payload: topicInfo})
}

export default function* findByCategoryWatcher(){
    yield takeLatest('FIND_BY_CATEGORY', findByCategory)
}