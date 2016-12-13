import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import {Menu, Row, Col, Icon, Button} from 'antd';

import styles from './Header.less';

export default class Header extends React.Component {
  state = {
    menuMode: 'horizontal',
  };

  componentDidMount() {
    /* eslint-disable global-require */
    require('enquire.js')
      .register('only screen and (min-width: 320px) and (max-width: 940px)', {
        match: () => {
          this.setState({ menuMode: 'inline' });
        },
        unmatch: () => {
          this.setState({ menuMode: 'horizontal' });
        },
      });
    /* eslint-enable global-require */
  }

  render() {
    const menuMode = this.state.menuMode;
    const menu = [
      <Menu mode={menuMode} id="nav" key="nav" className={styles.rightWrap}>
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
         <span><Icon type="user" />登录</span>
        </Menu.Item>
      </Menu>,
    ];
    return (
      <div>
        <Row>
          <Col lg={4} md={6} sm={24} xs={24}>
            <Link>Sardine</Link>
          </Col>
          <Col>
            {menuMode === 'horizontal' ? menu : null}
          </Col>
        </Row>
      </div>
    );
  }
}
