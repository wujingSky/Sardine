import React, { PropTypes } from 'react';
import TweenOne from 'rc-tween-one';
import Menu from 'antd/lib/menu';
import { Link } from 'react-router';
import {Icon} from 'antd';

const Item = Menu.Item;
import auth from './LoginAuth';

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
    };
    this.updateAuth = this.updateAuth.bind(this);
  }

  updateAuth(loggedIn) {
    this.setState({
      loggedIn
    })
  }

  componentWillMount() {
    auth.onChange = this.updateAuth
    auth.login()
  }

  render() {
    const navData = { menu1: '首页', menu2: 'Demo', menu3: 'WMS', menu4: '登录' };
    const navChildren = Object.keys(navData)
      .map((key, i) => (<Item key={i}>{navData[key]}</Item>));
    return (<TweenOne
      component="header"
      animation={{ opacity: 0, type: 'from' }}
      {...this.props}
    >
      <TweenOne
        className={`${this.props.className}-logo`}
        animation={{ x: -30, type: 'from', ease: 'easeOutQuad' }}
      >
      <h1>Sardine</h1>
      </TweenOne>
      <TweenOne
        className={`${this.props.className}-nav`}
        animation={{ x: 30, type: 'from', ease: 'easeOutQuad' }}
      >
        <Menu
          mode="horizontal" defaultSelectedKeys={['a']}
        >
        <Menu.Item key="home">
          <Link to="/home">首页</Link>
        </Menu.Item>
        <Menu.Item key="Demo">
          <Link to="/demo">Demo</Link>
        </Menu.Item>
        <Menu.Item key="IA">
          <Link>IA</Link>
        </Menu.Item>
        <Menu.Item key="WMS">
          <Link>WMS</Link>
        </Menu.Item>
        <Menu.Item >
         <span><Icon type="user" /> 
          {this.state.loggedIn ? (
              <Link to="/loginOut">退出</Link>
            ) : (
              <Link to="/login"> 登录 </Link>
            )}
          </span>
        </Menu.Item>
        </Menu>
      </TweenOne>
    </TweenOne>);
  }
}

Nav.propTypes = {
  className: PropTypes.string,
};

Nav.defaultProps = {
  className: 'header0',
};

export default Nav;
