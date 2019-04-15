import { sortByTypes } from "../constants/sortByTypes";
import { sortByActionsTypes } from "../actions/types/sortByActionsTypes";

const initialState = sortByTypes.NONE;

export function sortByReducer(state = initialState, action) {
    switch (action.type) {
        case sortByActionsTypes.SORT_BY:
            return action.payload;
        default:
            return state;
    }
}
