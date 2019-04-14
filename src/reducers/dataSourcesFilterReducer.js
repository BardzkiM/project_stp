import { dataSourcesFilterActions } from '../actions/dataSourcesFilterActions';
import { fromJS } from 'immutable';

const initialState = fromJS({
    fashion: true,
    sport: true
});

export function dataSourcesFilterReducer(state = initialState, action) {
    switch (action.type) {
        case dataSourcesFilterActions.SELECT_FILTER:
            return state.set(action.payload.data, action.payload.value);
        default:
            return state;
    }
}
