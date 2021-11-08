import { takeLatest, all, put, fork, call } from "redux-saga/effects";
import * as types from "./actionTypes";
import { fetchNews } from "../common/HttpService";

export function* onLoadNewAsync({ payload }) {
    try {
        const response = yield call(fetchNews, payload);

        yield put({ type: types.FETCH_NEWS_SUCCESS, payload: response.data });
    }
    catch (err) {
        yield put({ type: types.FETCH_NEWS_FAIL, payload: err });
    }
}

export function* onLoadNews() {
    yield takeLatest(types.FETCH_NEWS_START, onLoadNewAsync);
}

const newsSaga = [fork(onLoadNews)];

export default function* rootSaga() {
    yield all([...newsSaga]);
}