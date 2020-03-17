import React, { Component } from 'react'
import LeftNav from './category_left/index'
import RightContent from './right_right/index'
import './index.less';
class Category extends Component {
  render() {
    return (
      <div className="cartgory_container">
        <header className="cartgory_search">
          <input type="text" placeholder="搜索商品，共23572款好物" />
          <i></i>
        </header>
        <div className="cartgory_main">
          <LeftNav />
          <RightContent />
        </div>
      </div>
    )
  }
}

export default Category
