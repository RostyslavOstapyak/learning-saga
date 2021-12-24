import { put, takeEvery, call } from "redux-saga/effects";

async function getPeople() {
    const request = await fetch('http://swapi.dev/api/people/');

    const data = await request.json();

    return data
}

export function* workerSaga() {
    const data = yield call(getPeople);
    console.log(data);

    yield put({ type: "SET_PEOPLE", payload: data.results })
}

export function* watchClickSaga() {

    yield takeEvery('CLICK', workerSaga);
}

export default function* rootSaga() {
    yield watchClickSaga();
}