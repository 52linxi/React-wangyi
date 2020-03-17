import React, { Component } from 'react'
import './index.less'
export default class Cart extends Component {
  render() {
    return (
      <div className="cartContainer">
        <div className="header">
          <span className="left_text">购物车 </span>
          <span className="right_text">领卷</span>
        </div>
        <div className="text">
          <span>30天无忧退货</span>
          <span>30天无忧退货</span>
          <span>30天无忧退货</span>
        </div>
        <div className="content">
          <div className="cart-img">
            <img
              src="https://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-d6193bd6e4.png?imageView&type=webp"
              alt=""
            />
          </div>
          <div className="cart-login">
            <span>登录</span>
          </div>
        </div>
      </div>
    )
  }
}
