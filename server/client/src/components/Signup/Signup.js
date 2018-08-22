import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions'; 
import { Form, Input, Select, Button, Icon, Alert } from 'antd';

const FormItem = Form.Item;
const Option = Select.Option;

class RegistrationForm extends React.Component {
  state = {
    confirmDirty: false,
    autoCompleteResult: [],
  };

 
handleSubmit = (e) => {
  e.preventDefault();
  this.props.form.validateFields((err, values) => {
    if (!err) {
      this.props.signup(values)
    }
  });
}

  handleConfirmBlur = (e) => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  }

  compareToFirstPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  }

  validateToNextPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  }

 
  render() {
    const { getFieldDecorator } = this.props.form;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };
    // const tailFormItemLayout = {
    //   wrapperCol: {
    //     xs: {
    //       span: 24,
    //       offset: 0,
    //     },
    //     sm: {
    //       span: 16,
    //       offset: 8,
    //     },
    //   },
    // };
    const prefixSelector = getFieldDecorator('prefix', {
      initialValue: '+91',
    })(
      <Select style={{ width: 70 }}>
        <Option value="091">+91</Option>
    
      </Select>
    );

    return (
      <Form onSubmit={this.handleSubmit} style={{textAlign: 'center'}}>
        <FormItem
          {...formItemLayout}
          label="E-mail"
        >
          {getFieldDecorator('email', {
            rules: [{
              type: 'email', message: 'The input is not valid E-mail!',
            }, {
              required: true, message: 'Please input your E-mail!',
            }],
          })(
            <Input />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="Password"
        >
          {getFieldDecorator('password', {
            rules: [{
              required: true, message: 'Please input your password!',
            }, {
              validator: this.validateToNextPassword,
            }],
          })(
            <Input type="password" />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label={(
            <span>
              First name
            </span>
          )}
        >
          {getFieldDecorator('firstname', {
            rules: [{ required: true, message: 'Please input your first name!', whitespace: true }],
          })(
            <Input />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label={(
            <span>
              Last name
            </span>
          )}
        >
          {getFieldDecorator('lastname', {
            rules: [{ required: true, message: 'Please input your last name!', whitespace: true }],
          })(
            <Input />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="Phone"
        >
          {getFieldDecorator('phone', {
            rules: [{ required: true, message: 'Please input your phone number!' }],
          })(
            <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
          )}
        </FormItem>
        { this.props.status === 'exists' ? <div><Alert
            message="Error"
            description="User email already registered"
            type="error"
            showIcon
           /><br/></div>: null }
        <FormItem {...formItemLayout}>
        <div style={{margin: 'auto', width: '300px'}}> 
        <Button type="default" onClick={this.props.clicked}> 
            <Icon type="left" />Login </Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Button type="primary" htmlType="submit">Register</Button>
        </div> 
        </FormItem>
      </Form>
    );
  }
}

const signupform = Form.create()(RegistrationForm);


export default connect(null, actions)(signupform);