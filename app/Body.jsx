import React from 'react';
import { Link, RouteHandler } from 'react-router';
import Radium, { Style } from 'radium';

class Body extends React.Component {
	constructor(props){
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div style={[style.body]}>
				<ul style={[style.nav]}>
					<li><Link to="body">Home</Link></li>
					<li><Link to="about">about</Link></li>
				</ul>
				<RouteHandler/>
			</div>
		);
	}
}

import { colors } from 'style';
let style = {
	body: {
		width: '100%',
		backgroundColor: colors.bgColor
	},
	nav: {

	}
}

export default Radium(Body);