import { combineReducers } from 'redux-immutable';
import { listReducer } from "./reducers/listReducer";
import { sortByReducer } from "./reducers/sortByReducer";

export const reducer = combineReducers({
    listData: listReducer,
    sortBy: sortByReducer
});
