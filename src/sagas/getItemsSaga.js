import { call, put } from "redux-saga/effects";
import axios from "axios";

function getItems() {
    return axios({
        method: "get",
        url: "http://localhost:6010/articles/sports"
    });
}

export function* getItemsSaga() {
    try {
        const response = yield call(getItems);
        const articles = response.data.articles;

        yield put({type: "API_CALL_SUCCESS", articles});

    } catch (error) {
        yield put({type: "API_CALL_FAILURE", error});
    }
}