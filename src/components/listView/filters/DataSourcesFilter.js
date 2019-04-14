import React, { Component } from 'react';
import { connect } from "react-redux";
import { getDataSourcesFilterReducer } from '../../../selectors/dataSourcesFilterReducer';
import { dataSourcesTypes } from '../../../constants/dataSourcesTypes';
import { dataSourcesFilterActions } from '../../../actions/dataSourcesFilterActions';

class DataSourcesFilter extends Component {
    handleRadioChange = data => {
        this.props.setDataSourcesFilter(data);
    };

    render() {
        const { dataSourcesFilter } = this.props;

        return(
            <div>
                <span>Data sources</span>
                <input
                    type="checkbox"
                    value="Fashion"
                    checked={dataSourcesFilter === dataSourcesTypes.FASHION}
                    onChange={() => this.handleRadioChange(dataSourcesTypes.FASHION)}
                />Fashion
                <input
                    type="checkbox"
                    value="Sports"
                    checked={dataSourcesFilter === dataSourcesTypes.SPORTS}
                    onChange={() => this.handleRadioChange(dataSourcesTypes.SPORTS)}
                />Sports
            </div>
        );
    }
}

const mapStateToProps = state => ({
    dataSourcesFilter: getDataSourcesFilterReducer(state)
});

const mapDispatchToProps = dispatch => ({
    setDataSourcesFilter: payload => dispatch({ type: dataSourcesFilterActions.CHANGE_FILTER, payload: payload })
});

export default connect(mapStateToProps, mapDispatchToProps)(DataSourcesFilter);