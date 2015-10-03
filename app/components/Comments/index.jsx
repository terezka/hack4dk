import React from 'react';
import Radium from 'radium';
import Color from 'color';

import { getInstaVarious, getSMK, getUserInfo } from 'utils/api.js';
import ContentStore from 'stores/ContentStore.js';
import ContentActions from 'actions/ContentActions.js';
import Constants from 'constants';

import Comment from 'components/Comment/index.jsx';

let getStateFromStore = () => {
    return { 
        comments: ContentStore.comments,
        comment: ContentStore.comment
    };
};


class Comments extends React.Component {
    constructor(props){
        super(props);
        this.state = getStateFromStore();
        this._onChange = this._onChange.bind(this);
    }

    render() {
        var comments = (this.state.comment) ? [this.state.comment] : this.state.comments;
        return (
            <div className="comments">
                {comments && comments.map((comment, key) => {
                    return <Comment {...comment} handlePick={null}/>;
                })}
            </div>
        );
    }
    componentDidMount() {
        ContentStore.addChangeListener(this._onChange);
    }
    componentWillUnmount() {
        ContentStore.removeChangeListener(this._onChange);
    }
    _onChange() {
        this.setState(getStateFromStore());
    }
}

export default Radium(Comments);