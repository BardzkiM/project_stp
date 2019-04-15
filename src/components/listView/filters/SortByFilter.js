import React, { Component } from 'react';
import { connect } from "react-redux";
import { sortByTypes } from '../../../constants/sortByTypes';
import { getSortBy } from '../../../selectors/sortBySelector';
import { setSortBy} from '../../../actions/sortByActions';
import './SortByFilter.css';

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
            <div onClick={this.handleOnClick} className="sort-by-filter">
                Sort by date
            </div>
        );
    }
}

const mapStateToProps = state => ({
    sortBy: getSortBy(state)
});

const mapDispatchToProps = {
    setSortBy
};

export default connect(mapStateToProps, mapDispatchToProps)(SortByFilter);
