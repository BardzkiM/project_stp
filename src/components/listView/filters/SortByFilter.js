import React, { Component } from 'react';
import { connect } from "react-redux";

class SortByFilter extends Component {
    render() {
        const { setSortBy } = this.props;

        return (
            <div className="sort-by-filter">
                <div onClick={setSortBy}>Sort by date</div>
            </div>
        );
    };
}

const mapStateToProps = state => {
    return {
        sortBy: state.sortBy
    };
};

const mapDispatchToProps = dispatch => {
    return {
        setSortBy: payload => dispatch({ type: "CHANGE_SORT_BY", payload: payload })
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SortByFilter);
