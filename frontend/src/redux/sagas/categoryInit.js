import { put, takeLatest } from 'redux-saga/effects';

function* categoryInit(){
    const category = yield fetch("/category/all")
                            .then(res => res.json())
    console.log("category:")
    console.log(category)
    yield put({type: "INITED_CATEGORY", payload: category})
}

export default function* categoryInitWatcher(){
    yield takeLatest('INIT_CATEGORY', categoryInit)
}