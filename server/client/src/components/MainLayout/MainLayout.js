import React from 'react';
import Dashboard from './Dashboard/Dashboard';
import { Layout, Menu } from 'antd';
import './MainLayout.css';
import '../assets/whitelogo.png';
import NotWell from './NotWell/NotWell';
import MeetADoctor from './MeetADoctor/MeetADoctor';
import MedicalRecords from './MedicalRecords/MedicalRecords';
import Explore from './Explore/Explore'


const { Header,  } = Layout;

class MainLayout extends React.Component {

  state = {
    menuOption: 1
  }

  MenuNavSelect = (key) => {
    this.setState({menuOption: Number(key)})
  }

  render() {

    const displayComponent = [<Dashboard/>,<NotWell/>, <MeetADoctor/>, <MedicalRecords/>, <Explore/>];

    return (
      <Layout>
    <Header className="header">
      <div className="logo"/>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['1']}
        style={{ lineHeight: '64px' }}
        onClick={(item) => {
          this.MenuNavSelect(item.key)
        }}
      >
       <Menu.Item key="1">Dashboard</Menu.Item>
       <Menu.Item key="2">Not Well?</Menu.Item>
       <Menu.Item key="3">Meet a Doctor</Menu.Item>
        <Menu.Item key="4">Medical Records</Menu.Item>
        <Menu.Item key="5">Explore</Menu.Item>
      </Menu>
    </Header>
    {displayComponent[this.state.menuOption - 1]}
  </Layout>
    );
  }
}

export default MainLayout;