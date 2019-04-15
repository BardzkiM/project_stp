import { dataSourcesFilterActionsTypes } from './types/dataSourcesFilterActionsTypes';

export const setDataSourcesFilter = payload => ({
    type: dataSourcesFilterActionsTypes.SELECT_FILTER,
    payload: payload
});