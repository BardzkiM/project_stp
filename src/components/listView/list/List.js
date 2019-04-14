import React, { Component } from 'react';
import { connect } from "react-redux";
import { listActions } from '../../../actions/listActions';
import { getArticles, getFetching, getError } from '../../../selectors/listSelectors';
import ListItem from "./ListItem";

class List extends Component {
    componentDidMount() {
        this.props.getItems();
    }

    render() {
        const { articles, fetching, error } = this.props;

        //TODO: add some error popup/redirect
        if (error) {
            return <div>Something went wrong, please try again later...</div>;
        }

        //TODO: add loader instead
        if (fetching || !articles) {
            return <div>Loading data...</div>
        }

        const items = articles.map(article => <ListItem key={article.get('id')} article={article}/>);

        return(
            <ul>
                {items}
            </ul>
        );
    }
}

const mapStateToProps = state => {
    return {
        fetching: getFetching(state),
        articles: getArticles(state),
        error: getError(state)
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getItems: () => dispatch({ type: listActions.API_CALL_REQUEST })
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
