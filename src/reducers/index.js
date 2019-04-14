import { combineReducers } from 'redux-immutable';
import { listReducer } from "./listReducer";
import { sortByReducer } from "./sortByReducer";
import { dataSourcesFilterReducer } from './dataSourcesFilterReducer';

export const reducer = combineReducers({
    listData: listReducer,
    sortBy: sortByReducer,
    dataSourcesFilter: dataSourcesFilterReducer
});
