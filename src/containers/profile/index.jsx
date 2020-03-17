import React, { Component } from 'react'
import './index.less'
export default class Profile extends Component {
  render() {
    return (
      <div className="ProfileContainer">
        <div className="header">
          <div className="header">
            <i className="header-home"></i>
            <span>值得买</span>
            <i className="header-search"></i>
            <i className="header-cart"></i>
          </div>
        </div>
        <div class="profile-header-img">
          <img
            src="https://yanxuan.nosdn.127.net/39c5e4583753d4c3cb868a64c2c109ea.png"
            alt=""
          />
        </div>
        <div className="personalcontent">
          <div className="logintype">
            <div className="phone type">
              <span className="phonelogo"></span>
              <span>手机号快捷登录</span>
            </div>
            <div className="mail type">
              <span className="maillogo"></span>
              <span>邮箱账号登录</span>
            </div>
          </div>
          <ul className="list">
            <li>
              <span className="weixin"></span>
              <span>微信</span>
            </li>
            <li className="qqtype">
              <span className="qq"></span>
              <span>QQ</span>
            </li>
            <li>
              <span className="weibo"></span>
              <span>微博</span>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}
