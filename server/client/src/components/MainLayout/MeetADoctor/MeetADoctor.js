import React from 'react';
import MeetADoctorMenu from './MeetADoctorMenu';
import { Layout, Breadcrumb} from 'antd';
// maps AIzaSyCAJ8pBK2XSG5rUbv5F7MNk4iZuT2lk098
import DocSearch from '../../MapComponents/DocSearch';
import {withRouter} from 'react-router-dom';


const {Content, Sider } = Layout;


class MeetADoctor extends React.Component {
    render(){
        return(
            <Layout>
      <Sider width={200} style={{ background: '#fff', height: '93vh' }}>
        <MeetADoctorMenu/>
      </Sider>
      <Layout style={{ padding: '0 24px 24px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Your name</Breadcrumb.Item>
          <Breadcrumb.Item>Meet A Doctor</Breadcrumb.Item>
        </Breadcrumb>
        <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280, display: 'flex' }}>
        <DocSearch/>
        </Content>
      </Layout>
    </Layout>
        )
    }
}

export default withRouter(MeetADoctor);