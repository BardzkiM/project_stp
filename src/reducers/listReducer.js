import { fromJS } from 'immutable';
import { listActionsTypes } from '../actions/types/listActionsTypes';

const initialState = fromJS({
    fetching: false,
    articles: null,
    error: null
});

export function listReducer(state = initialState, action) {
    switch (action.type) {
        case listActionsTypes.API_CALL_REQUEST:
            return state
                .set('fetching', true)
                .set('error', null);
        case listActionsTypes.API_CALL_SUCCESS:
            return state
                .set('fetching', false)
                .set('articles', action.articles)
                .set('error', null);
        case listActionsTypes.API_CALL_FAILURE:
            return state
                .set('fetching', false)
                .set('articles', null)
                .set('error', action.error);
        default:
            return state;
    }
}
