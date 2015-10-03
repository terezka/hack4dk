import React from 'react';
import Radium, { Style } from 'radium';

import ImageStore from 'stores/ImageStore.js';
import Constants from 'constants';

let getStateFromStore = () => {
	return {columns : ImageStore.get('columns')}
};

class Sweet extends React.Component {
	constructor(props){
		super(props);
		this.state = getStateFromStore();
		this._onChange = this._onChange.bind(this);
	}
	render() {
		return (
			<div style={[style.base, style[`columns-${this.state.columns}`]]}>
				<h1>About</h1>
				<p>Columns : {this.state.columns}</p>
				<img src={require('images/shouldnotexist.jpg')} style={[imgBase]}/>
			</div>
		);
	}
	componentDidMount() {
		ImageStore.addChangeListener(this._onChange);
	}
	componentWillUnmount() {
		ImageStore.removeChangeListener(this._onChange);
	}
	_onChange() {
		this.setState(getStateFromStore());
	}
}

import { colors, imgBase } from 'style';
let style = {
	base: {
		width: '100%',
		backgroundColor: colors.bgColor
	},
	'columns-1': {
		backgroundColor: colors.purple
	},
	'columns-2': {
		backgroundColor: colors.lightGreen
	}
};

export default Radium(Sweet);