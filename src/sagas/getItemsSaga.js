import { call, put } from "redux-saga/effects";
import axios from "axios";
import { fromJS } from 'immutable';
import { listActions } from '../actions/listActions';

function getItems() {
    return axios({
        method: "get",
        url: "http://localhost:6010/articles/sports"
    });
}

export function* getItemsSaga() {
    try {
        const response = yield call(getItems);
        const articles = fromJS(response.data.articles);

        yield put({ type: listActions.API_CALL_SUCCESS, articles: articles });

    } catch (error) {
        yield put({type: listActions.API_CALL_FAILURE, error});
    }
}