import React from 'react';  
import Router from 'react-router';  
import { DefaultRoute, Link, NotFoundRoute, Route, RouteHandler } from 'react-router';
import Radium, { Style } from 'radium'

import Body from './Body.jsx';

import Home from 'components/_Home/index.jsx';
import NotFound from 'components/_NotFound/index.jsx';
import Auth from 'components/_Auth/index.jsx';

let routes = (  
  <Route name="body" path="/" handler={Body}>
    <Route name="home" path="/home" handler={Home}/>
    <Route name="auth" path="/instagram_token" handler={Auth}/>
    <DefaultRoute handler={Home}/>
    <NotFoundRoute handler={NotFound}/>
  </Route>
);

Router.run(routes, Router.HistoryLocation, function (Handler) {  
  React.render(<Handler/>, document.getElementById('app'));
});