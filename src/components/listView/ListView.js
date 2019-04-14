import React, { Component } from 'react';
import SortByFilter from './filters/SortByFilter';
import DataSourcesFilter from './filters/DataSourcesFilter';
import List from './list/List';
import './ListView.css';

class ListView extends Component {

    render() {
        return(
            <div className="list-view">
                <DataSourcesFilter />
                <SortByFilter />
                <List />
            </div>
        );
    }
}


export default ListView;