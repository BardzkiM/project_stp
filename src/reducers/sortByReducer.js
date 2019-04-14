import { sortByTypes } from "../constants/sortByTypes";
import { sortByActions } from "../actions/sortByActions";

const initialState = sortByTypes.NONE;

export function sortByReducer(state = initialState, action) {
    switch (action.type) {
        case sortByActions.SORT_BY:
            return action.payload;
        default:
            return state;
    }
}
