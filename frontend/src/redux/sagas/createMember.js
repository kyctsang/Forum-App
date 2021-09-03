import { put, takeLatest } from 'redux-saga/effects';

function* createMember(action){
    console.log(action.payload)
    const status = yield fetch("/membersinfo/create",
                            {
                                method: 'POST',
                                headers: { 'Content-Type': 'application/json' },
                                body: JSON.stringify(action.payload)
                            })
                            .then(res => res.text())
    console.log("Create member status:")
    console.log(status)
    yield put({type: 'CREATE_MEMBER_STATUS', payload: status})
    yield alert(status)
}

export default function* createMemberWatcher(){
    yield takeLatest('CREATE_MEMBER', createMember)
}