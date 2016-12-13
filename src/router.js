import React from 'react';
import { Router,Route,Redirect,IndexRoute} from 'dva/router';
import NotFound from './routes/NotFound';
import WMSLayout from './routes/WMSLayout';
import Home from './routes/Home';
import Content from './routes/Content';
import Search from './routes/Demo/Search';
import Create from './routes/Demo/Create';

/* eslint react/prop-types:0 */
export default function ({ history }) {
  return (
    <Router history={history}>
       <Route path="/" component={Home}>
       <Route path="/home" component={Content} />
        <Route path="/demo" component={WMSLayout}>
            <IndexRoute component={Search} />
        	<Route path="/create" component={Create} />
      		<Route path="/search" component={Search} />
      	</Route>
      </Route>	
    </Router>
  );
}