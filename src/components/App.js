import React, { Component } from 'react';
import ListView from './listView/ListView';

class App extends Component {
    render() {
        return (
            <div className="app-wrapper">
                <ListView />
            </div>
        );
    }
}

export default App;