import React from 'react';
import './ListItem.css';

const ListItem = ({ article }) => (
    <li className="list-item">
        <div className="list-item__image-wrapper">
            <img className="list-item__image" alt={article.get('image')} src={article.get('image')} />
        </div>
        <div className="list-item__heading">
            <h2 className="list-item__title">{article.get('title')}</h2>
            <h3 className="list-item__date">{article.get('date')}</h3>
        </div>
        <article className="list-item__preamble">{article.get('preamble')}</article>
    </li>
);

export default ListItem;
