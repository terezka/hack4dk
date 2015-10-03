import React from 'react';
import Radium from 'radium';
import Color from 'color';

class Comment extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
    }
    render() {
        var props = this.props;
        return (
            <p>
            	<b>{props.from.username}:</b> {props.text}
            </p>
        );
    }
}

import { colors } from 'style';
var style = {
  
};

export default Radium(Comment);