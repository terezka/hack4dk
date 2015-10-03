import React from 'react';
import Radium from 'radium';
import Color from 'color';

import { getUserInfo } from 'utils/api.js';

import { Col, Row } from 'react-bootstrap';
import Comments from 'components/Comments/index.jsx';
import Images from 'components/Images/index.jsx';

class Home extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        var user = this.props.user;
        return (
            <div>
                <Col xs={12}>{(user.self) && <h1>Hello {user.self.full_name || user.self.username}</h1>}</Col>
                <Comments user={this.props.user} />
                <Images/>
            </div>
        );
    }
    componentDidMount() {
        if (!this.props.user.self) {
            let query = 'users/self/'; 
            getUserInfo(query, 'self', this.props.user.token);
        }
    }
}


export default Radium(Home);