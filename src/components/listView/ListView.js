import React, { Component } from 'react';
import { getArticles, getError, getFetching } from '../../selectors/listSelectors';
import { listActions } from '../../actions/listActions';
import { connect } from 'react-redux';
import SortByFilter from './filters/SortByFilter';
import DataSourcesFilter from './filters/DataSourcesFilter';
import { getSortBy } from '../../selectors/sortBySelector';
import { getDataSourcesFilter } from '../../selectors/dataSourcesFilter';
import { sortItemsByDate } from '../../utils/sortItems';
import List from './list/List';
import './ListView.css';
import { filterItems } from '../../utils/filterItems';

class ListView extends Component {
    componentDidMount() {
        this.props.getItems(this.props.dataSourcesFilter);
    }

    render() {
        const { articles, fetching, error, sortBy, dataSourcesFilter } = this.props;

        //TODO: add some error popup/redirect
        if (error) {
            return <div>Something went wrong, please try again later...</div>;
        }

        //TODO: add loader instead
        if (fetching || !articles) {
            return <div>Loading data...</div>
        }

        const sortedItems = sortItemsByDate(articles, sortBy);
        const listItems = filterItems(sortedItems, dataSourcesFilter);

        return(
            <div className="list-view">
                <DataSourcesFilter />
                <SortByFilter />
                <List listItems={listItems}/>
            </div>
        );
    }
}


const mapStateToProps = state => ({
    fetching: getFetching(state),
    articles: getArticles(state),
    error: getError(state),
    sortBy: getSortBy(state),
    dataSourcesFilter: getDataSourcesFilter(state)
});

const mapDispatchToProps = dispatch => ({
    getItems: () => dispatch({ type: listActions.API_CALL_REQUEST })
});

export default connect(mapStateToProps, mapDispatchToProps)(ListView);