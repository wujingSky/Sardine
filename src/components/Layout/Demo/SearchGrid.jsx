import React, { Component, PropTypes } from 'react';
import { Table, Popconfirm, Pagination,Card } from 'antd';

function SearchGrid({
  total, current, loading, dataSource,
  onPageChange,  onDeleteItem,
  onEditItem, onViewItem
  }) {
  const columns = [{
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
    render: (text, record) => <a onClick={() => onViewItem(record)}>{text}</a>,
  }, {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
  }, {
    title: '住址',
    dataIndex: 'address',
    key: 'address',
  }, {
    title: '操作',
    key: 'operation',
    render: (text, record) => (
      <p>
        <a onClick={() => onEditItem(record)}>编辑</a>
        &nbsp;
        <Popconfirm title="确定要删除吗？" onConfirm={() => onDeleteItem(record.id)}>
          <a>删除</a>
        </Popconfirm>
      </p>
    ),
  }];

  return (
    <div>
      <Table style={{ padding: '10px' }}
        columns={columns}
        dataSource={dataSource}
        loading={loading}
        rowKey={record => record.id}
        pagination={false}
      />
      <Pagination
        className="ant-table-pagination"
        total={total}
        current={current}
        pageSize={10}
        onChange={onPageChange}
      />
    </div>
  );
}

SearchGrid.propTypes = {
  onPageChange: PropTypes.func,
  dataSource: PropTypes.array,
  onDeleteItem: PropTypes.func,
  onEditItem: PropTypes.func,
  onViewItem: PropTypes.func,
  loading: PropTypes.any,
  total: PropTypes.any,
  current: PropTypes.any,
};

export default SearchGrid;