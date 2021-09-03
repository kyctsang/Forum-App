import { put, takeLatest } from 'redux-saga/effects';

function* login(action) {
    console.log(action.payload)
    const status = yield fetch("/membersinfo/login",
        {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(action.payload)
        })
        .then(res => res.text())
    console.log("Login Status:")
    console.log(status)
    yield put({ type: 'LOGIN_STATUS', user: action.payload.username, payload: status === "true" })
    const loginStatus = status === "true" ? "Login successfully" : "Failed: incorrect username or password"
    alert(loginStatus)
}

export default function* loginWatcher() {
    yield takeLatest('LOGIN', login)
}