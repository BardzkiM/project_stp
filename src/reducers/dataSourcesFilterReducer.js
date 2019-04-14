import {dataSourcesFilterActions} from '../actions/dataSourcesFilterActions';
import {dataSourcesTypes} from '../constants/dataSourcesTypes';

const initialState = dataSourcesTypes.NONE;

export function dataSourcesFilterReducer(state = initialState, action) {
    switch (action.type) {
        case dataSourcesFilterActions.CHANGE_FILTER:
            return action.payload;
        default:
            return state;
    }
}
