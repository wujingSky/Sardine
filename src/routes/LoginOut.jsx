import React ,{PropTypes} from 'react';
import { Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button } from 'antd';
import { routerRedux } from 'dva/router';
import { Link,withRouter } from 'react-router';

import { connect } from 'dva';

import auth from './LoginAuth';

class LoginOut extends React.Component {

  componentDidMount() {
    auth.logout();
  }

  render() {
    return <p>You are now logged out</p>
  }
}  

export default LoginOut;