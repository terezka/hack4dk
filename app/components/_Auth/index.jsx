import React from 'react';

import UserActions from 'actions/UserActions.js';
import UserStore from 'stores/UserStore.js';
import Constants from 'constants';

class Auth extends React.Component {
  constructor(props, context) {
    super(props, context);
  }
  render() {
    return (
    	<div>
    		authorizing 2
    	</div>
    );
  }
  componentDidMount() {
    var token = (window.location.href.match(/access_token=([^&]*)/))
    UserActions.RecieveUser(token[1]);
    this.context.router.transitionTo('/home');
  }
}

Auth.contextTypes = {
  router: React.PropTypes.func.isRequired
};

export default Auth;