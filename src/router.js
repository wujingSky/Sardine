import React from 'react';
import { Router,Route,Redirect,IndexRoute} from 'dva/router';
import NotFound from './routes/NotFound';
import WMSLayout from './routes/WMSLayout';
import Home from './routes/Home';
import Content from './routes/Content';
import Search from './routes/Demo/Search';
import Create from './routes/Demo/Create';
import View from './routes/Demo/View';
import Login from './routes/Login';
import Register from './routes/Register';
import auth from './routes/LoginAuth';
import LoginOut from './routes/LoginOut';

/* eslint react/prop-types:0 */
export default function ({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={Home}>
      <IndexRoute component={Content} />
      <Route path="/home" component={Content} />
      <Route path="/loginOut" component={LoginOut} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
        <Route path="/demo" component={WMSLayout}>
          <IndexRoute component={Search} />
        	<Route path="/create" component={Create} />
      		<Route path="/search" component={Search} />
          <Route path="/view" component={View} />
      	</Route>
      </Route>	
    </Router>
  );
}