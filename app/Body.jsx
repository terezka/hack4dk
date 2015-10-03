import React from 'react';
import { Link, RouteHandler } from 'react-router';
import Radium, { Style } from 'radium';

import UserActions from 'actions/UserActions.js';
import UserStore from 'stores/UserStore.js';
import Constants from 'constants';

import { Button, Navbar, Nav, NavItem } from 'react-bootstrap';

let getStateFromStore = () => {
  return { user: UserStore.user };
};

class Body extends React.Component {
	constructor(props){
		super(props);
		this.state = getStateFromStore();
	    this.handleLogin = this.handleLogin.bind(this);
	    this.handleLogout = this.handleLogout.bind(this);
	    this._onChange = this._onChange.bind(this);
	}
	handleLogin() {
	    let AuthURL = Constants.Various.Instagram.authURL;
	    if (!this.state.user.token) {
	      window.location = AuthURL;
	    }
	}
	handleLogout() {
		UserActions.logoutUser();
	}
	render() {
		var user = this.state.user;
		return (
			<div>
				<Navbar brand="with a twist">
		          <Nav right>
		          	<NavItem eventKey={1}>{(user.self) ? user.self.username : null}</NavItem>
		            <NavItem eventKey={1}>{(user.token) ? <Button onClick={this.handleLogout}>Logout</Button> : <Button onClick={this.handleLogin}>Login</Button>}</NavItem>
		          </Nav>
		        </Navbar>
		        <div className="container this">
					<RouteHandler user={this.state.user}/>
				</div>
			</div>
		);
	}
	componentDidMount() {
		UserStore.addChangeListener(this._onChange);
	}
	componentWillUnmount() {
		UserStore.removeChangeListener(this._onChange);
	}
	_onChange() {
		this.setState(getStateFromStore());
	}
}

import { colors } from 'style';
let style = {
	body: {
		
	},
	nav: {

	}
}

export default Radium(Body);