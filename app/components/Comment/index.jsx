import React from 'react';
import Radium from 'radium';
import Color from 'color';

class Comment extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
        this.handlePick = this.handlePick.bind(this);
    }
    handlePick() {
        this.props.handlePick(this.props.Key);
    }
    render() {
        var props = this.props;
        return (
            <p style={[style.std, this.props.handlePick && style.w_hover]} onClick={this.handlePick} className="comment">
            	<span className="comment--username"><b>{props.from.username} </b></span>
                <span className="comment--text">{props.text}</span>
            </p>
        );
    }
}

import { colors } from 'style';
var style = {
    std: {
        padding: '0.25em',
        margin: '0'
    },
    w_hover: {
        ':hover': {
            backgroundColor: 'rgba(18, 86, 136, 0.5)',
            opacity: '0.9',
            borderRadius: '3px'
        }
    }
};

export default Radium(Comment);