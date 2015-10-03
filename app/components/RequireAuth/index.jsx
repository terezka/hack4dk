import React from 'react';
import Radium from 'radium';

import {auth} from 'stores/auth.js';

var RequireAuth = (Component) => {
    return class Authenticated extends React.Component {
        static willTransitionTo(transition) {
            if (!auth.loggedIn()) {
                transition.redirect('/login', {}, {'nextPath' : transition.path});
            }  
        }
        render () {
            return <Component {...this.props}/>
        }
    }
};

export default RequireAuth;