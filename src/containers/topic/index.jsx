import React, { Component } from 'react'
import Swiper from 'swiper/js/swiper.js'
import './index.less'
import './css/swiper.min.css'
export default class Topic extends Component {
  componentDidMount() {
    var mySwiper = new Swiper('.swiper-container', {
      direction: 'horizontal', // 垂直切换选项
      slidesPerView: 4,
      slidesPerGroup: 1, //每次滑动的距离
      slidesPerColumn: 2, //显示2行
      observeParents: true, //在加载时初始化 父级元素，解决渲染完成后轮播图展示右边的问题
      observer: true,
      // 如果需要分页器
      scrollbar: {
        el: '.swiper-scrollbar',
        hide: true
      }
    })
  }
  render() {
    return (
      <div className="topicContainer">
        <div className="header">
          <i className="header-home"></i>
          <span>值得买</span>
          <i className="header-search"></i>
          <i className="header-cart"></i>
        </div>
        <div className="content">
          <div className="content_top">
            <div className="content_top_title">
              <img
                src="https://m.you.163.com/topic/index/img/topic_logo.c2284970.png"
                alt=""
              />
              <span>严选好物 用心生活</span>
            </div>
            <div className="swiper_out">
              <div className="swiper">
                <div className="swiper-container">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <img
                        src="https://yanxuan.nosdn.127.net/f7eabd045aeaf6ea4379abdb7f45ad8e.png?imageView&quality=65&thumbnail=120x120"
                        alt=""
                      />
                      <span className="list_text1">9.9超值</span>
                      <span className="list_text2">定价直降</span>
                    </div>
                    <div className="swiper-slide">
                      <img
                        src="https://yanxuan.nosdn.127.net/f7eabd045aeaf6ea4379abdb7f45ad8e.png?imageView&quality=65&thumbnail=120x120"
                        alt=""
                      />
                      <span className="list_text1">9.9超值</span>
                      <span className="list_text2">定价直降</span>
                    </div>
                    <div className="swiper-slide">
                      <img
                        src="https://yanxuan.nosdn.127.net/f7eabd045aeaf6ea4379abdb7f45ad8e.png?imageView&quality=65&thumbnail=120x120"
                        alt=""
                      />
                      <span className="list_text1">9.9超值</span>
                      <span className="list_text2">定价直降</span>
                    </div>
                    <div className="swiper-slide">
                      <img
                        src="https://yanxuan.nosdn.127.net/f7eabd045aeaf6ea4379abdb7f45ad8e.png?imageView&quality=65&thumbnail=120x120"
                        alt=""
                      />
                      <span className="list_text1">9.9超值</span>
                      <span className="list_text2">定价直降</span>
                    </div>
                    <div className="swiper-slide">
                      <img
                        src="https://yanxuan.nosdn.127.net/f7eabd045aeaf6ea4379abdb7f45ad8e.png?imageView&quality=65&thumbnail=120x120"
                        alt=""
                      />
                      <span className="list_text1">9.9超值</span>
                      <span className="list_text2">定价直降</span>
                    </div>
                    <div className="swiper-slide">
                      <img
                        src="https://yanxuan.nosdn.127.net/f7eabd045aeaf6ea4379abdb7f45ad8e.png?imageView&quality=65&thumbnail=120x120"
                        alt=""
                      />
                      <span className="list_text1">9.9超值</span>
                      <span className="list_text2">定价直降</span>
                    </div>
                    <div className="swiper-slide">
                      <img
                        src="https://yanxuan.nosdn.127.net/f7eabd045aeaf6ea4379abdb7f45ad8e.png?imageView&quality=65&thumbnail=120x120"
                        alt=""
                      />
                      <span className="list_text1">9.9超值</span>
                      <span className="list_text2">定价直降</span>
                    </div>
                    <div className="swiper-slide">
                      <img
                        src="https://yanxuan.nosdn.127.net/f7eabd045aeaf6ea4379abdb7f45ad8e.png?imageView&quality=65&thumbnail=120x120"
                        alt=""
                      />
                      <span className="list_text1">9.9超值</span>
                      <span className="list_text2">定价直降</span>
                    </div>
                    <div className="swiper-slide">
                      <img
                        src="https://yanxuan.nosdn.127.net/f7eabd045aeaf6ea4379abdb7f45ad8e.png?imageView&quality=65&thumbnail=120x120"
                        alt=""
                      />
                      <span className="list_text1">9.9超值</span>
                      <span className="list_text2">定价直降</span>
                    </div>
                    <div className="swiper-slide">
                      <img
                        src="https://yanxuan.nosdn.127.net/f7eabd045aeaf6ea4379abdb7f45ad8e.png?imageView&quality=65&thumbnail=120x120"
                        alt=""
                      />
                      <span className="list_text1">9.9超值</span>
                      <span className="list_text2">定价直降</span>
                    </div>
                    <div className="swiper-slide">
                      <img
                        src="https://yanxuan.nosdn.127.net/f7eabd045aeaf6ea4379abdb7f45ad8e.png?imageView&quality=65&thumbnail=120x120"
                        alt=""
                      />
                      <span className="list_text1">9.9超值</span>
                      <span className="list_text2">定价直降</span>
                    </div>
                    <div className="swiper-slide">
                      <img
                        src="https://yanxuan.nosdn.127.net/f7eabd045aeaf6ea4379abdb7f45ad8e.png?imageView&quality=65&thumbnail=120x120"
                        alt=""
                      />
                      <span className="list_text1">9.9超值</span>
                      <span className="list_text2">定价直降</span>
                    </div>
                    <div className="swiper-slide">
                      <img
                        src="https://yanxuan.nosdn.127.net/f7eabd045aeaf6ea4379abdb7f45ad8e.png?imageView&quality=65&thumbnail=120x120"
                        alt=""
                      />
                      <span className="list_text1">9.9超值</span>
                      <span className="list_text2">定价直降</span>
                    </div>
                    <div className="swiper-slide">
                      <img
                        src="https://yanxuan.nosdn.127.net/f7eabd045aeaf6ea4379abdb7f45ad8e.png?imageView&quality=65&thumbnail=120x120"
                        alt=""
                      />
                      <span className="list_text1">9.9超值</span>
                      <span className="list_text2">定价直降</span>
                    </div>
                    <div className="swiper-slide">
                      <img
                        src="https://yanxuan.nosdn.127.net/f7eabd045aeaf6ea4379abdb7f45ad8e.png?imageView&quality=65&thumbnail=120x120"
                        alt=""
                      />
                      <span className="list_text1">9.9超值</span>
                      <span className="list_text2">定价直降</span>
                    </div>
                    <div className="swiper-slide">
                      <img
                        src="https://yanxuan.nosdn.127.net/f7eabd045aeaf6ea4379abdb7f45ad8e.png?imageView&quality=65&thumbnail=120x120"
                        alt=""
                      />
                      <span className="list_text1">9.9超值</span>
                      <span className="list_text2">定价直降</span>
                    </div>
                  </div>
                  <div className="swiper-scrollbar"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="box">
          <div className="item">
            <img src="https://yanxuan.nosdn.127.net/17b1f75f167c06763a550486f197d852.jpg?imageView&thumbnail=345y345&quality=95" alt="" />
            <span>严选四周年经典品榜</span>
          </div>
          <div className="item">
            <img src="https://yanxuan.nosdn.127.net/87f3077c32a6946ae644f6a6a8205fc1.png?imageView&thumbnail=345y191.66666666666669&quality=95" alt="" />
          </div>
          <div className="item">
            <img src="https://yanxuan.nosdn.127.net/5b2e1993394e8aefe43f554a2a23a1b7.jpg?imageView&thumbnail=345y345&quality=95" alt="" />
            <span>严选四周年经典品榜</span>
          </div>
          <div className="item">
            <img src="https://yanxuan.nosdn.127.net/805d9c90bff5401197160c64765a9cf5.jpg?imageView&thumbnail=345y345&quality=95" alt="" />
            <span>严选四周年经典品榜</span>
          </div>
          <div className="item">
            <img src="https://yanxuan.nosdn.127.net/a1104e75289063ab6b213f9354312bf6.jpg?imageView&thumbnail=345y345&quality=95" alt="" />
            <span>严选四周年经典品榜</span>
          </div>
          <div className="item">
            <img src="https://yanxuan.nosdn.127.net/066ef147ce8b865c0572489f1d385f10.jpg?imageView&thumbnail=345y345&quality=95" alt="" />
            <span>严选四周年经典品榜</span>
          </div>
          <div className="item">
            <img src="https://yanxuan.nosdn.127.net/5b2e1993394e8aefe43f554a2a23a1b7.jpg?imageView&thumbnail=345y345&quality=95" alt="" />
            <span>严选四周年经典品榜</span>
          </div>
          <div className="item">
            <img src="https://yanxuan.nosdn.127.net/805d9c90bff5401197160c64765a9cf5.jpg?imageView&thumbnail=345y345&quality=95" alt="" />
            <span>严选四周年经典品榜</span>
          </div>
          <div className="item">
            <img src="https://yanxuan.nosdn.127.net/a1104e75289063ab6b213f9354312bf6.jpg?imageView&thumbnail=345y345&quality=95" alt="" />
            <span>严选四周年经典品榜</span>
          </div>
          <div className="item">
            <img src="https://yanxuan.nosdn.127.net/066ef147ce8b865c0572489f1d385f10.jpg?imageView&thumbnail=345y345&quality=95" alt="" />
            <span>严选四周年经典品榜</span>
          </div>
          <div className="item">
            <img src="https://yanxuan.nosdn.127.net/5b2e1993394e8aefe43f554a2a23a1b7.jpg?imageView&thumbnail=345y345&quality=95" alt="" />
            <span>严选四周年经典品榜</span>
          </div>
          <div className="item">
            <img src="https://yanxuan.nosdn.127.net/805d9c90bff5401197160c64765a9cf5.jpg?imageView&thumbnail=345y345&quality=95" alt="" />
            <span>严选四周年经典品榜</span>
          </div>
          <div className="item">
            <img src="https://yanxuan.nosdn.127.net/a1104e75289063ab6b213f9354312bf6.jpg?imageView&thumbnail=345y345&quality=95" alt="" />
            <span>严选四周年经典品榜</span>
          </div>
          <div className="item">
            <img src="https://yanxuan.nosdn.127.net/066ef147ce8b865c0572489f1d385f10.jpg?imageView&thumbnail=345y345&quality=95" alt="" />
            <span>严选四周年经典品榜</span>
          </div>
        </div>
      </div>
    )
  }
}
