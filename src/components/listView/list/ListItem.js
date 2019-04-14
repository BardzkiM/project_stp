import React from 'react';
import './ListItem.css';

const ListItem = ({ item }) => (
    <li className="list-item">
        <div className="list-item__image-wrapper">
            <img className="list-item__image" alt={item.get('image')} src={item.get('image')} />
        </div>
        <div className="list-item__heading">
            <h2 className="list-item__title">{item.get('title')}</h2>
            <h3 className="list-item__date">{item.get('date')}</h3>
        </div>
        <article className="list-item__preamble">{item.get('preamble')}</article>
    </li>
);

export default ListItem;
