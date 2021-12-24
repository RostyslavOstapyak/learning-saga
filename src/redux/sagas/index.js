import { take } from "redux-saga/effects";

export function* workerSaga() {

}

export function* watchClickSaga() {
    yield take('CLICK');
    console.log('click from saga');
}

export default function* rootSaga() {
    yield watchClickSaga();
}