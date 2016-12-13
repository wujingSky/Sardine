import React, { PropTypes } from 'react';
import { routerRedux } from 'dva/router';
import { connect } from 'dva';
import SearchForm from '../../components/Layout/Demo/SearchForm';
import SearchGrid from '../../components/Layout/Demo/SearchGrid';
function Search({ location, dispatch, users }) {
  const {
    loading, list, total, current, field, keyword,
    currentItem, modalVisible, modalType,
    } = users;

  const searchGridProps = {
    dataSource: list,
    loading,
    total,
    current,
    onPageChange(page) {
      dispatch(routerRedux.push({
        pathname: '/demo',
        query: { field, keyword, page },
      }));
    },
    onDeleteItem(id) {
      dispatch({
        type: 'users/delete',
        payload: id,
      });
    },
    onEditItem(item) {
      dispatch(routerRedux.push({
        pathname: '/create',
        query: item,
      }));
    },
    onViewItem(item) {
      dispatch(routerRedux.push({
        pathname: '/view',
        query: item,
      }));
    },
  };

  const searchFormProps = {
    onSearch(fieldsValue) {
      dispatch(routerRedux.push({
        pathname: '/demo',
        query: { ...fieldsValue, page: 1 },
      }));
    },
  };

  return (
       <div>
        <SearchForm {...searchFormProps} />
        <SearchGrid {...searchGridProps} />
      </div>
  );
}

Search .propTypes = {
  users: PropTypes.object,
  location: PropTypes.object,
  dispatch: PropTypes.func,
};

function mapStateToProps({ users }) {
  return { users };
}

export default connect(mapStateToProps)(Search);