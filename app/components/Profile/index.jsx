import React from 'react';
import Radium from 'radium';
import Color from 'color';

import { getInstaVarious, getSMK, getUserInfo } from 'utils/api.js';
import UserActions from 'actions/UserActions.js';
import ContentStore from 'stores/ContentStore.js';
import UserStore from 'stores/UserStore.js';
import Constants from 'constants';

import { Button, Input, Glyphicon, Well } from 'react-bootstrap';
import Comment from 'components/Comment/index.jsx';

let getStateFromStore = () => {
    return { 
        comments: ContentStore.comments,
        pagination: ContentStore.pagination
    };
};


class Profil extends React.Component {
    constructor(props){
        super(props);
        this.state = getStateFromStore();
        this.state.commentKey = 0;
        this.state.searchQuery = '';
        this.getCommments = this.getCommments.bind(this);
        this.handleBack = this.handleBack.bind(this);
        this.handleNext = this.handleNext.bind(this);
        this.handlePopular = this.handlePopular.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this._onChange = this._onChange.bind(this);
    }
    getCommments(searchQuery) {
        let query = this.state.pagination || Constants.Various.Instagram.URL+'users/self/feed';
        if (searchQuery === 'popular') {
            this.setState({commentKey: this.state.comments.length}); // to reach the search results
            query = Constants.Various.Instagram.URL+`media/popular`;
        } else if (searchQuery && searchQuery.length > 2) {
            this.setState({commentKey: this.state.comments.length}); // to reach the search results
            searchQuery = searchQuery.match(/[A-Za-z0-9]/g).join('');
            console.log('searchQuery', searchQuery);
            query = Constants.Various.Instagram.URL+`tags/${searchQuery}/media/recent`;
        }
        getInstaVarious(query, 'feed', this.props.user.token);
        let SMKquery = '?q=id:KMS1032&wt=json&indent=true';
    }
    handlePopular() {
        this.getCommments('popular');
    }
    handleSearch() {
        let value = this.refs.search.getValue();
        this.setState({searchQuery: value});
        this.getCommments(value);
    }
    handleBack() {
        var back = this.state.commentKey-1;
        this.setState({commentKey: (back > 0) ? back : 0});
    }
    handleNext() {
        var next = this.state.commentKey+1;
        if (this.state.comments[next]) {
            this.setState({commentKey: next});
        } else {
            this.getCommments();
        }

    }
    render() {
        var user = this.props.user;
        if (!this.props.user.self) return null;

        var currentComment = this.state.comments[this.state.commentKey];

        return (
            <div>
            	<h1>Hello {user.self.full_name || user.self.username}</h1>
                <Input type="text" value={this.state.searchQuery} ref="search" onChange={this.handleSearch} addonAfter={<Glyphicon glyph="search" />} placeholder="#cats" />
                <Button onClick={this.handleBack}>Back comment</Button>
                <Button style={{marginLeft: '15px'}} onClick={this.handleNext}>Next comment</Button>
                <Button style={{float: 'right'}} onClick={this.handlePopular}>Search popular</Button>
                <Well style={{marginTop: '15px'}}>{(currentComment) ? <Comment {...currentComment}/> : <p>no comment</p>}</Well>
            </div>
        );
    }
    componentDidMount() {
        if (!this.props.user.self) {
          let query = 'users/self/'; 
          getUserInfo(query, 'self', this.props.user.token);
        }
        ContentStore.addChangeListener(this._onChange);
    }
    componentWillUnmount() {
        ContentStore.removeChangeListener(this._onChange);
    }
    _onChange() {
        this.setState(getStateFromStore());
    }
}

export default Radium(Profil);