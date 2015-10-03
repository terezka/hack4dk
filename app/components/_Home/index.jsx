import React from 'react';
import Radium from 'radium';
import Color from 'color';

import Profil from 'components/Profile/index.jsx';

class Home extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    var user = this.props.user;
    return (
      <div> 
          <Profil user={this.props.user} />
      </div>
    );
  }
}


export default Radium(Home);