import React from 'react';
import Radium from 'radium';
import Color from 'color';

import { callInstagram } from 'utils/api.js';
import UserActions from 'actions/UserActions.js';
import InstagramStore from 'stores/InstagramStore.js';
import UserStore from 'stores/UserStore.js';
import Constants from 'constants';


let getStateFromStore = () => {
  return { user: UserStore.user };
};

class Home extends React.Component {
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
    console.log(user);
    return (
    	<div style={[style.both, style.one]}>
    		<h1>Home {(user.self) ? user.self.full_name : null}</h1>
        {(user.token) ? <button onClick={this.handleLogout}>Logout</button> : <button onClick={this.handleLogin}>Login</button>}
    	</div>
    );
  }
  componentDidMount() {
    if (this.state.user.token && !this.state.user.self) {
      let query = 'users/self/'; 
      callInstagram(query, 'self', this.state.user.token);
    }
    UserStore.addChangeListener(this._onChange);
  }
  componentWillUnmount() {
    UserStore.removeChangeListener(this._onChange);
  }
  _onChange() {
    console.log('_onChange')
    this.setState(getStateFromStore());
  }
}

import { colors } from 'style';
var style = {
  both: {
    margin: '5em',
    padding: '2em',
    background: colors.turquoise,
    border: 'solid 1px black',
  },
  one: {
    ':hover': {
      background: Color(colors.turquoise).lighten(0.75).hexString(),
    }
  },
  link: {
    color: colors.darkPurple,
    textDecoration: 'none', 
    fontSize: '0.7em',
    padding: '0 0.5em'
  }
};

export default Radium(Home);