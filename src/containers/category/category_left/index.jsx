import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import {
  getCategoryDateAsync,
  getCategoryRightDateAsync,
  saveRightData
} from '../../../redux/actions'
import { setItem } from '../../../utils/localStorage'
import './index.less'
@withRouter
@connect(state => ({ leftnav: state.leftnav, rightData: state.rightData }), {
  getCategoryDateAsync,
  getCategoryRightDateAsync,
  saveRightData
})
class leftNav extends Component {
  // ul容器
  ulContainerref = React.createRef()
  componentDidMount() {
    // 请求左侧导航栏数据
    this.props.getCategoryDateAsync()
    this.props.getCategoryRightDateAsync()
  }
  // 点击左侧li
  handleClick = id => {
    return () => {
      this.props.history.push(`/category?categoryId=${id}`)
      // 查找对应的数据
      const rightdata = this.props.rightData.cateLists.find(
        item => item.id === id
      )
      if (rightdata) {
        // 存进localStorage中
        setItem('rightdata', rightdata)
        // 存进redux中
        this.props.saveRightData(rightdata)
      }
    }
  }
  render() {
    let { search } = this.props.location
    if (!search) {
      search = '?categoryId = 11'
    }
    return (
      <div className="leftnav_container" ref={this.ulContainerref}>
        <ul className="leftnav_list" ref={this.createRef}>
          {this.props.leftnav.cateNavDatas
            ? this.props.leftnav.cateNavDatas.categoryL1List.map(item => {
                return (
                  <li
                    className={`leftnav_item ${
                      +search.slice(12) === item.id ? 'on' : ''
                    }`}
                    key={item.id}
                    onClick={this.handleClick(item.id)}
                  >
                    <span>{item.name}</span>
                  </li>
                )
              })
            : ''}
        </ul>
      </div>
    )
  }
}

export default leftNav
