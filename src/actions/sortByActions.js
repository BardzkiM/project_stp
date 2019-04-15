import { sortByActionsTypes } from './types/sortByActionsTypes';

export const setSortBy = payload => ({
    type: sortByActionsTypes.SORT_BY,
    payload: payload
});
