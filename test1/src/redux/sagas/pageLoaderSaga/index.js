import { LOCATION_CHANGE } from 'connected-react-router';
import { call, fork, put, take } from 'redux-saga/effects'

function* loadBlogData() {
    const request = yield call(fetch, 'https://swapi.dev/api/vehicles');
    const data = yield call([request, request.json]);

    console.log(data);
    yield put({ type: 'BLOG_LOADED', payload: data.results })
}

export default function* pageLoaderSaga() {
    while (true) {
        const action = yield take(LOCATION_CHANGE);

        if (action.payload.location.pathname.endsWith('blog')) {
            yield fork(loadBlogData);
        }

    }
}