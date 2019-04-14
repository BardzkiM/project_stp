import { fromJS } from 'immutable';
import { sortByTypes } from "../constants/sortByTypes";
import { sortByActions } from "../actions/sortByActions";

const initialState = fromJS({
    sortBy: sortByTypes.none
});

export function sortByReducer(state = initialState, action) {
    switch (action.type) {
        case sortByActions.SORT_BY:
            return { ...state, sortBy: action.payload };
        default:
            return state;
    }
}
