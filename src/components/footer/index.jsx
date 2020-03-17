import React, { Component } from 'react'
import { TabBar } from 'antd-mobile'
import { withRouter } from 'react-router-dom'
import menus from '../../config/menus'
const { Item } = TabBar

@withRouter
class Footer extends Component {
  state = {
    selectedTab: '0' /*  */,
    hidden: false,
    fullScreen: false
  }
  renderContent() {}

  createMenus = menus => {
    return menus.map(menu => {
      return (
        <Item
          title={menu.title}
          key={menu.key}
          icon={
            <div
              style={{
                width: '22px',
                height: '22px',
                background:
                  'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat'
              }}
            />
          }
          selectedIcon={
            <div
              style={{
                width: '22px',
                height: '22px',
                background: menu.icon
              }}
            />
          }
          selected={this.state.selectedTab === menu.state}
          onPress={() => {
            this.props.history.push(menu.path)
            this.setState({
              selectedTab: menu.state
            })
          }}
          data-seed="logId"
        ></Item>
      )
    })
  }

  render() {
    return (
      <div
        style={{ position: 'fixed', height: 50, width: '100%', bottom: 0 }}
      >
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
          hidden={this.state.hidden}
        >
          {this.createMenus(menus)}
        </TabBar>
      </div>
    )
  }
}
export default Footer
