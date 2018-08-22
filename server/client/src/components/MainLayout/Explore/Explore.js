import React from 'react';
import ExploreMenu from './ExploreMenu';
import { Layout, Breadcrumb} from 'antd';

const {Content, Sider } = Layout;


class Explore extends React.Component {
    render(){
        return(
            <Layout>
      <Sider width={200} style={{ background: '#fff', height: '93vh' }}>
        <ExploreMenu/>
      </Sider>
      <Layout style={{ padding: '0 24px 24px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Your name</Breadcrumb.Item>
          <Breadcrumb.Item>Explore</Breadcrumb.Item>
        </Breadcrumb>
        <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280, display: 'flex' }}>
        Content
        </Content>
      </Layout>
    </Layout>
        )
    }
}

export default Explore;