import { put, takeLatest } from "redux-saga/effects";

function* selectTopic(action){
    const content = yield fetch("/contents/bytopic?topic="+action.payload)
                            .then(res => res.json())
    console.log(content)
    console.log("TOPIC+ID: ", action.topic_id)
    yield put({type: 'SELECTED_TOPIC', topic_id: action.topic_id, title: action.payload, payload: content})
}

export default function* selectTopicWatcher(){
    yield takeLatest('SELECT_TOPIC', selectTopic)
}