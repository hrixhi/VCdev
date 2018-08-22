import React from 'react';

import { Menu, Icon } from 'antd';


class MeetADoctorMenu extends React.Component {
    render() {
        return(
            <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
            >
            <Menu.Item key="1">
              <Icon type="solution" />
              <span className="nav-text">Set up appointment</span>
            </Menu.Item>
          </Menu>
        )
    }
}

export default MeetADoctorMenu;