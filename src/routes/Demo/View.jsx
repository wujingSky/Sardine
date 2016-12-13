import React, { Component, PropTypes } from 'react';
import { Form, Row, Col, Input, Button, Icon, Table, message, Popconfirm,Card,} from 'antd';
import { routerRedux } from 'dva/router';
import { connect } from 'dva';
import ViewForm from '../../components/Layout/Demo/ViewForm';

function View({ location, dispatch, users }) {
  const {
    loading, list, total, current, field, keyword,
    currentItem, modalVisible, modalType,
    } = users;


  const viewFormProps = {
    item: location.query,
    onCreate() {
      dispatch(routerRedux.push({
        pathname: '/create',
      }));
    },
    onEdit(item) {
      dispatch(routerRedux.push({
        pathname: '/create',
        query: item,
      }));
    },
    onBack() {
      dispatch(routerRedux.push({
        pathname: '/search',
      }));
    },
    onDelete(id) {
      dispatch({
        type: 'users/delete',
        payload: id,
      });
    },
  };

  return (
       <div>
        <ViewForm {...viewFormProps} />
      </div>
  );
}

View.propTypes = {
  users: PropTypes.object,
  location: PropTypes.object,
  dispatch: PropTypes.func,
};

function mapStateToProps({ users }) {
  return { users };
}

export default connect(mapStateToProps)(View);