import { createSelector } from 'reselect'

export const getListData = state => state.get('listData');

export const getFetching = createSelector(
    getListData,
    listData => listData.get('fetching')
);

export const getArticles = createSelector(
    getListData,
    listData => listData.get('articles')
);

export const getError = createSelector(
    getListData,
    listData => listData.get('error')
);
