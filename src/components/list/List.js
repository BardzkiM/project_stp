import React, { Component } from 'react';
import { connect } from "react-redux";
import ListItem from "./ListItem";

class List extends Component {
    componentDidMount() {
        this.props.getItems();
    }
    render() {
        const { articles, fetching, error } = this.props;

        if (error) {
            return <div>Something went wrong, please try again later...</div>;
        }

        if (fetching || !articles) {
            return <div>Loading data...</div>
        }

        const items = articles.map(article => <ListItem key={article.id} article={article}/>);

        return(
            <ul>
                {items}
            </ul>
        );
    }
}

const mapStateToProps = state => {
    return {
        fetching: state.fetching,
        articles: state.articles,
        error: state.error
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getItems: () => dispatch({ type: "API_CALL_REQUEST" })
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(List);