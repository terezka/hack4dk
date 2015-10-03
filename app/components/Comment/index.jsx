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
            <p style={[style]} onClick={this.handlePick}>
            	<b>{props.from.username}:</b> {props.text}
            </p>
        );
    }
}

import { colors } from 'style';
var style = {
    padding: '0.5em',
    margin: '0',
    ':hover': {
        backgroundColor: '#79A3AD',
        opacity: '0.9',
        borderRadius: '3px'
    }
};

export default Radium(Comment);