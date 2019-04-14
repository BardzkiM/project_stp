import React, { Component } from 'react';
import { connect } from "react-redux";
import { sortByTypes } from '../../../constants/sortByTypes';
import { getSortBy } from '../../../selectors/sortBySelector';
import { sortByActions } from '../../../actions/sortByActions';

class SortByFilter extends Component {
    handleOnClick = () => {
        const { sortBy, setSortBy } = this.props;

        if (sortBy === sortByTypes.ASCENDING) {
            return setSortBy(sortByTypes.DESCENDING);
        }

        return setSortBy(sortByTypes.ASCENDING);
    };

    render() {
        return (
            <div className="sort-by-filter">
                <div onClick={this.handleOnClick}>Sort by date</div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    sortBy: getSortBy(state)
});

const mapDispatchToProps = dispatch => ({
    setSortBy: payload => dispatch({ type: sortByActions.SORT_BY, payload: payload })
});

export default connect(mapStateToProps, mapDispatchToProps)(SortByFilter);
