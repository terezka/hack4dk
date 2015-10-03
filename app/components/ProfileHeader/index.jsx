import React from 'react';
import Radium from 'radium';
import Color from 'color';

import { getInstaVarious, getUserInfo } from 'utils/api.js';
import ContentStore from 'stores/ContentStore.js';
import ContentActions from 'actions/ContentActions.js';

class ProfilHeader extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="profil-header">
                <img className="profil-header--image" src={this.props.from.profile_picture}/>
                <span className="profil-header--username"><b>{this.props.from.username}</b></span>
            </div>
        );
    }
}


export default Radium(ProfilHeader);