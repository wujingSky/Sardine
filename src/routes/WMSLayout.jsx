import { Menu, Breadcrumb, Icon ,Input,Radio} from 'antd';
import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { routerRedux } from 'dva/router';
import View from './Demo/View';
import Search from './Demo/Search';
import Create from './Demo/Create';

import styles from './WMSLayout.less';
const SubMenu = Menu.SubMenu;

class WMSLayout extends React.Component {

  render() {
    return (
      <div className={styles.aside}>
        <aside className={styles.sider}>
        <div className={styles.logo}></div>
        <Menu mode="inline" theme="dark"
          defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']}>
          <SubMenu key="sub1" title={<span><Icon type="user" />基本模块</span>}>
            <Menu.Item key="search" ><Link to="/search"> 搜索 </Link></Menu.Item>
            <Menu.Item key="create"><Link to="/create">新建</Link></Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" title={<span><Icon type="laptop" />导航二</span>}>
            <Menu.Item key="5">选项5</Menu.Item>
            <Menu.Item key="6">选项6</Menu.Item>
            <Menu.Item key="7">选项7</Menu.Item>
            <Menu.Item key="8">选项8</Menu.Item>
          </SubMenu>
        </Menu>
       </aside>

        <div className={styles.main}>
            <div className={styles.content}>
                { this.props.children }
            </div>
        </div>
      </div>
    );
  }
};

export default WMSLayout;