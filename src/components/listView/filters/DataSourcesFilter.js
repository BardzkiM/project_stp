import React, { Component } from 'react';
import { connect } from "react-redux";
import { getDataSourcesFilterReducer } from '../../../selectors/dataSourcesFilterReducer';
import { dataSourcesTypes } from '../../../constants/dataSourcesTypes';
import { dataSourcesFilterActions } from '../../../actions/dataSourcesFilterActions';
import './DataSourcesFilter.css';

class DataSourcesFilter extends Component {
    handleRadioChange = data => {
        this.props.setDataSourcesFilter(data);
    };

    render() {
        const { dataSourcesFilter } = this.props;

        return(
            <div className="data-source-filter">
                <span className="data-source-filter__title">Data sources</span>
                <label className="data-source-filter__label">
                    <input
                        name="asd"
                        className="data-source-filter__checkbox"
                        type="checkbox"
                        value="Fashion"
                        checked={dataSourcesFilter === dataSourcesTypes.FASHION}
                        onChange={() => this.handleRadioChange(dataSourcesTypes.FASHION)}
                    />Fashion
                </label>
                <label className="data-source-filter__label">
                    <input
                        className="data-source-filter__checkbox"
                        type="checkbox"
                        value="Sports"
                        checked={dataSourcesFilter === dataSourcesTypes.SPORTS}
                        onChange={() => this.handleRadioChange(dataSourcesTypes.SPORTS)}
                    />Sports
                </label>
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