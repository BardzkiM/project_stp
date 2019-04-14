import { takeLatest } from "redux-saga/effects";
import { getItemsSaga } from "./getItemsSaga";

export function* watcherSaga() {
    yield takeLatest("API_CALL_REQUEST", getItemsSaga);
}
