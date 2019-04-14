import React, { Component } from 'react';
import { connect } from "react-redux";
import { getDataSourcesFilter } from '../../../selectors/dataSourcesFilter';
import { dataSourcesFilterActions } from '../../../actions/dataSourcesFilterActions';
import './DataSourcesFilter.css';

class DataSourcesFilter extends Component {
    handleRadioChange = data => {
        const { dataSourcesFilter, setDataSourcesFilter } = this.props;

        setDataSourcesFilter({ data, value: !dataSourcesFilter.get(data) });
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
                        checked={dataSourcesFilter.get('fashion')}
                        onChange={() => this.handleRadioChange('fashion')}
                    />Fashion
                </label>
                <label className="data-source-filter__label">
                    <input
                        className="data-source-filter__checkbox"
                        type="checkbox"
                        value="Sports"
                        checked={dataSourcesFilter.get('sport')}
                        onChange={() => this.handleRadioChange('sport')}
                    />Sports
                </label>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    dataSourcesFilter: getDataSourcesFilter(state)
});

const mapDispatchToProps = dispatch => ({
    setDataSourcesFilter: payload => dispatch({ type: dataSourcesFilterActions.SELECT_FILTER, payload: payload })
});

export default connect(mapStateToProps, mapDispatchToProps)(DataSourcesFilter);