import React, { Component } from 'react';
import List from './listView/list/List';

class App extends Component {
    render() {
        return (
            <div className="app-wrapper">
                <List />
            </div>
        );
    }
}

export default App;