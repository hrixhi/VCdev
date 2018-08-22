import { Form, Icon, Input, Button, Checkbox, Alert } from 'antd';
import React from 'react';
import './Login.css';
import { connect } from 'react-redux';
import * as actions from '../../actions';
const FormItem = Form.Item;


class NormalLoginForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.login(values)
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="loginBox">
      <Form onSubmit={this.handleSubmit} className="login-form">
        <FormItem>
          {getFieldDecorator('email', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Email" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
          )}
        </FormItem>
        { this.props.showAlert === 'notfound' ? <div><Alert
            message="Error"
            description="User not found"
            type="error"
            showIcon
           /><br/></div>: null }
        <FormItem>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(
            <Checkbox>Remember me</Checkbox>
          )}
          <br/>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
            <div> Or</div> <Button type="default" onClick={this.props.clicked}> Register here <Icon type="right" /></Button>
        </FormItem>
      </Form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { 
    showAlert: state.auth.status
  };
}


const WrappedNormalLoginForm = Form.create()(NormalLoginForm);
export default connect(mapStateToProps, actions)(WrappedNormalLoginForm);