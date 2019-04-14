import { call, put } from "redux-saga/effects";
import axios from "axios";
import { fromJS } from 'immutable';
import { listActions } from '../actions/listActions';

function getItems(dataSourcesFilter) {
    return axios({
        method: "get",
        url: `http://localhost:6010/articles/${dataSourcesFilter}`
    });
}

export function* getItemsSaga() {
    try {
        const responseFashion = yield call(getItems, ['fashion']);
        const responseSports = yield call(getItems, ['sports']);
        const articles = [...responseFashion.data.articles, ...responseSports.data.articles];

        yield put({ type: listActions.API_CALL_SUCCESS, articles: fromJS(articles) });

    } catch (error) {
        yield put({ type: listActions.API_CALL_FAILURE, error });
    }
}
