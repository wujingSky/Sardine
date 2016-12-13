import React, { PropTypes } from 'react';
import { routerRedux } from 'dva/router';
import { connect } from 'dva';
import CreateForm from '../../components/Layout/Demo/CreateForm';
function Create({ location, dispatch, users }) {
  const {
    loading, list, total, current, field, keyword,
    currentItem, modalVisible, modalType,
    } = users;


  const createFormProps = {
    item: location.query,
    onOk(data) {
      dispatch({
        type: `users/${modalType}`,
        payload: data,
      });
    },
    onCancel() {
      dispatch(routerRedux.push({
        pathname: '/search',
      }));
    },
  };

  return (
       <div>
        <CreateForm {...createFormProps} />
      </div>
  );
}

Create.propTypes = {
  users: PropTypes.object,
  location: PropTypes.object,
  dispatch: PropTypes.func,
};

function mapStateToProps({ users }) {
  return { users };
}

export default connect(mapStateToProps)(Create);