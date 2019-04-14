import React, { Component } from 'react';
import ListItem from "./ListItem";
import './List.css';

class List extends Component {

    render() {
        const { listItems } = this.props;

        if (listItems.isEmpty()) {
            return (
                <div className="list-no-items">
                    Nothing to show
                </div>
            )
        }

        const items = listItems.map(item => <ListItem key={item.get('id')} item={item}/>);

        return(
            <ul className="list">
                {items}
            </ul>
        );
    }
}

export default List;
