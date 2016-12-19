import React ,{PropTypes} from 'react';
import { Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button } from 'antd';
import { routerRedux } from 'dva/router';
import { Link,withRouter } from 'react-router';

import { connect } from 'dva';

const FormItem = Form.Item;

import styles from './Login.less';
import auth from './LoginAuth';

class Login extends React.Component {

 constructor(props) {
    super(props);
    this.state = {
      error: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
//    this.login = this.login.bind(this);
  }

/*  login(username, password, cb) {
    this.props.dispatch({
          type: 'users/login',
          payload: {
            username,
            password,
          },
      });
  }

  componentWillMount() {
    auth.login = this.login
  }
*/
  handleSubmit(e) {
    e.preventDefault();

    this.props.form.validateFields((err, values) => {
      if (!err) {
        auth.login(values.userName, values.password, (loggedIn) => {
        if (!loggedIn)
          return this.setState({ error: true });

        this.props.router.replace('/demo');
      })
      }
    });
  }

  render() {
  const { getFieldDecorator } = this.props.form;
  return (
      <div className={styles.login}>
      <Form onSubmit={this.handleSubmit} className={styles.loginForm}>
        <FormItem>
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input addonBefore={<Icon type="user" />} placeholder="Username" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input addonBefore={<Icon type="lock" />} type="password" placeholder="Password" />
          )}
        </FormItem>
        <FormItem>
            <Link to="/register">注册</Link> <a className={styles.loginFormForgot}>忘记密码</a> 
          <Button type="primary" htmlType="submit" className={styles.loginFormButton}>
            Log in
          </Button>
          {this.state.error && (
            <p>密码错误</p>
          )}
        </FormItem>
      </Form>
      </div>
    );
  }
}  


export default withRouter(connect()(Form.create()(Login)));