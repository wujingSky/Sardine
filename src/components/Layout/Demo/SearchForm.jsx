import React, { Component, PropTypes } from 'react';
import { Form, Row, Col, Input, Button, Icon, Table, message, Popconfirm,Card  } from 'antd';
const FormItem = Form.Item;

const SearchForm = ({
  onSearch,
  onAdd,
  form: {
    getFieldDecorator,
    validateFields,
    getFieldsValue,
    },
  }) => {
  function handleSearch(e) {
    e.preventDefault();
    onSearch(getFieldsValue());
  }

  function handleReset(e) {
    e.preventDefault();
  }

    const formItemLayout = {
      labelCol: { span: 5 },
      wrapperCol: { span: 19 },
    };

    // To generate mock Form.Item
    const children = [];
    children.push(<Col span={12} key='name'>
           <FormItem {...formItemLayout} label="姓名 类似于">
           {getFieldDecorator('nameField')(
              <Input type="text" placeholder="姓名 类似于"/>
            )}
          </FormItem>
        </Col>);
    children.push(<Col span={12} key='address'>
          <FormItem {...formItemLayout} label="地址 类似于">
           {getFieldDecorator('addressField')(
              <Input type="text" placeholder="地址 类似于"/>
            )}
          </FormItem>
        </Col>);

    return (
  <Card title="搜索条件">
      <Form
        horizontal
        className="ant-advanced-search-form"
        onSubmit={handleSearch}
      >
        <Row gutter={40}>
          {children.slice(0, 6)}
        </Row>

        <Row>
          <Col span={24} style={{ textAlign: 'right' }}>
            <Button type="primary" htmlType="submit">Search</Button>
            <Button style={{ marginLeft: 8 }} onClick={handleReset}>
              Clear
            </Button>
          </Col>
        </Row>
      </Form>
      <Button type="ghost" onClick={onAdd}>添加</Button>
    </Card>
    );
};

SearchForm.propTypes = {
  form: PropTypes.object.isRequired,
  onSearch: PropTypes.func,
  onAdd: PropTypes.func,
};

export default Form.create()(SearchForm);