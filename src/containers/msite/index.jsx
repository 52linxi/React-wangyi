import React, { Component } from 'react'
import './index.less'
import { SearchBar, Tabs, Grid } from 'antd-mobile'
import Swiper from '../../components/swiper/index'

export default class Msite extends Component {
  render() {
    const data = Array.from(new Array(10)).map((_val, i) => ({
      icon: 'http://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png',
      text: `新品首发`
    }))
    const tabs = [
      { title: '推荐' },
      { title: '居家生活' },
      { title: '服饰鞋包' },
      { title: '美食酒水' },
      { title: '个护清洁' },
      { title: '母婴亲子' },
      { title: '运动旅行' },
      { title: '数码家电' },
      { title: '全球特色' }
    ]
    return (
      <div className="MsiteContainer">
        <div className="header">
          <div className="headerImg">
            <img
              src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png?imageView&type=webp"
              alt=""
            />
          </div>
          <SearchBar
            className="search"
            placeholder="搜索商品,共23641款好物"
            disabled
          />
          <div className="btn">登录</div>
        </div>
        <div className="tabs">
          <div>
            <Tabs
              tabs={tabs}
              renderTabBar={props => <Tabs.DefaultTabBar {...props} page={4} />}
            ></Tabs>
          </div>
        </div>
        <div className="swiper">
          <Swiper />
        </div>
        <div className="Advertisement">
          <ul className="Advertisement-list">
            <li className="Advertisement-item">
              <img
                src="http://yanxuan.nosdn.127.net/a03dd909803b9ac032eba58b7253a2f6.png"
                alt=""
              />
              <span>网易自营品牌</span>
            </li>
            <li className="Advertisement-item">
              <img
                src="http://yanxuan.nosdn.127.net/2d0402ffcd52b3ec3b07422681c42a89.png"
                alt=""
              />
              <span>网易自营品牌</span>
            </li>
            <li className="Advertisement-item">
              <img
                src="http://yanxuan.nosdn.127.net/eb61ee48e8942dbd1784c9ee75ebe955.png"
                alt=""
              />
              <span>网易自营品牌</span>
            </li>
          </ul>
        </div>
        <div className="grid">
          <Grid columnNum={5} data={data} hasLine={false} />
        </div>
        <div className="prom">
          <ul className="promlist ">
            <li className="promItem">
              <img
                src="https://yanxuan.nosdn.127.net/35279ed5b692854f2f30c4bd338baad1.png?quality=75&type=webp&imageView&thumbnail=250x0"
                alt=""
              />
            </li>
            <li className="promItem">
              <img
                src="https://yanxuan.nosdn.127.net/35279ed5b692854f2f30c4bd338baad1.png?quality=75&type=webp&imageView&thumbnail=250x0"
                alt=""
              />
            </li>
            <li className="promItem">
              <img
                src="https://yanxuan.nosdn.127.net/35279ed5b692854f2f30c4bd338baad1.png?quality=75&type=webp&imageView&thumbnail=250x0"
                alt=""
              />
            </li>
          </ul>
        </div>
        <div className="newperson">
          <div className="newperson_title">
            <span></span>
            <p>新人专享礼</p>
            <span></span>
          </div>
          <div className="newPerson_content">
            <div className="content_left">
              <p>新人专享礼包</p>
              <img
                src="http://yanxuan.nosdn.127.net/352b0ea9b2d058094956efde167ef852.png"
                alt=""
              />
            </div>
            <div className="content_right">
              <div className="right_top">
                <div className="text">
                  <span>福利社</span>
                  <span className="subtitle">今日特价</span>
                </div>

                <img
                  src="https://yanxuan-item.nosdn.127.net/2c0147161faaa160cf10b6770f1e290d.png?quality=75&type=webp&imageView&thumbnail=200x200"
                  alt=""
                />
              </div>
              <div className="right_bottom">
                <span>新人拼团</span>
                <span className="subtitle">一元起包邮</span>
              </div>
            </div>
          </div>
        </div>
        <div className="hotsale">
            <h3>类目热销榜</h3>
            <div className="hot_top">
              <div className="hot_top_left">
                <div className="left_text">
                  <span>热销榜</span>
                  <span className="hot-line"></span>
                </div>
                <img
                  src="https://yanxuan-item.nosdn.127.net/f444ac11115a8249a92dc95dccad6e07.png?quality=75&type=webp&imageView&thumbnail=200x200"
                  alt=""
                />
              </div>
              <div className="hot_top_right">
                <div className="right_text">
                  <span>热销榜</span>
                  <span className="hot-line"></span>
                </div>
                <img
                  src="https://yanxuan-item.nosdn.127.net/e58f23ee17f896fe485b4f18ef58dac1.jpg?quality=75&type=webp&imageView&thumbnail=200x200"
                  alt=""
                />
              </div>
            </div>
            <div className="host_list">
              <ul>
                <li>
                  <span>居家生活榜</span>
                  <img
                    src="https://yanxuan-item.nosdn.127.net/8074c839f4ec825b3fc858c3bcbd6b3c.png?quality=75&type=webp&imageView&thumbnail=200x200"
                    alt=""
                  />
                </li>
                <li>
                  <span>居家生活榜</span>
                  <img
                    src="https://yanxuan-item.nosdn.127.net/8074c839f4ec825b3fc858c3bcbd6b3c.png?quality=75&type=webp&imageView&thumbnail=200x200"
                    alt=""
                  />
                </li>
                <li>
                  <span>居家生活榜</span>
                  <img
                    src="https://yanxuan-item.nosdn.127.net/8074c839f4ec825b3fc858c3bcbd6b3c.png?quality=75&type=webp&imageView&thumbnail=200x200"
                    alt=""
                  />
                </li>
                <li>
                  <span>居家生活榜</span>
                  <img
                    src="https://yanxuan-item.nosdn.127.net/8074c839f4ec825b3fc858c3bcbd6b3c.png?quality=75&type=webp&imageView&thumbnail=200x200"
                    alt=""
                  />
                </li>
                <li>
                  <span>居家生活榜</span>
                  <img
                    src="https://yanxuan-item.nosdn.127.net/8074c839f4ec825b3fc858c3bcbd6b3c.png?quality=75&type=webp&imageView&thumbnail=200x200"
                    alt=""
                  />
                </li>
                <li>
                  <span>居家生活榜</span>
                  <img
                    src="https://yanxuan-item.nosdn.127.net/8074c839f4ec825b3fc858c3bcbd6b3c.png?quality=75&type=webp&imageView&thumbnail=200x200"
                    alt=""
                  />
                </li>
                <li>
                  <span>居家生活榜</span>
                  <img
                    src="https://yanxuan-item.nosdn.127.net/8074c839f4ec825b3fc858c3bcbd6b3c.png?quality=75&type=webp&imageView&thumbnail=200x200"
                    alt=""
                  />
                </li>
                <li>
                  <span>居家生活榜</span>
                  <img
                    src="https://yanxuan-item.nosdn.127.net/8074c839f4ec825b3fc858c3bcbd6b3c.png?quality=75&type=webp&imageView&thumbnail=200x200"
                    alt=""
                  />
                </li>
              </ul>
            </div>
          </div>
        <div className="timetobuy">
          <div className="title">
            <div className="title_left">
              <span>限时购</span>
            </div>
            <span className="more">更多 ></span>
          </div>
          <div className="timetobuylist">
            <ul className="list" >
              <li >
                <img src="https://yanxuan-item.nosdn.127.net/71236446cd01d95f4e863c50ecf9a267.png?quality=75&type=webp&imageView&thumbnail=216x216" alt="" />
                <span>¥182</span>
                <span className="list_discount">¥229</span>
              </li>
              <li >
                <img src="https://yanxuan-item.nosdn.127.net/71236446cd01d95f4e863c50ecf9a267.png?quality=75&type=webp&imageView&thumbnail=216x216" alt="" />
                <span>¥182</span>
                <span className="list_discount">¥229</span>
              </li>
              <li >
                <img src="https://yanxuan-item.nosdn.127.net/71236446cd01d95f4e863c50ecf9a267.png?quality=75&type=webp&imageView&thumbnail=216x216" alt="" />
                <span>¥182</span>
                <span className="list_discount">¥229</span>
              </li>
              <li >
                <img src="https://yanxuan-item.nosdn.127.net/71236446cd01d95f4e863c50ecf9a267.png?quality=75&type=webp&imageView&thumbnail=216x216" alt="" />
                <span>¥182</span>
                <span className="list_discount">¥229</span>
              </li>
              <li >
                <img src="https://yanxuan-item.nosdn.127.net/71236446cd01d95f4e863c50ecf9a267.png?quality=75&type=webp&imageView&thumbnail=216x216" alt="" />
                <span>¥182</span>
                <span className="list_discount">¥229</span>
              </li>
              <li >
                <img src="https://yanxuan-item.nosdn.127.net/71236446cd01d95f4e863c50ecf9a267.png?quality=75&type=webp&imageView&thumbnail=216x216" alt="" />
                <span>¥182</span>
                <span className="list_discount">¥229</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="newproduct">
        <div className="title">
          <span>新品首发</span>
          <span>更多 ></span>
        </div>
        <div className="newproductlist">
          <ul className="list" >
            <li>
              <img src="https://yanxuan-item.nosdn.127.net/1229ada6e69de283d27f858db1c00603.png?type=webp&imageView&quality=65&thumbnail=330x330" alt="" />
              <p className="introduce">4.11周年庆省钱卡 充9元得45元</p>
              <span className="price">¥9</span>
              <span className="btn">新品尝试</span>
            </li>
            <li>
              <img src="https://yanxuan-item.nosdn.127.net/1229ada6e69de283d27f858db1c00603.png?type=webp&imageView&quality=65&thumbnail=330x330" alt="" />
              <p className="introduce">4.11周年庆省钱卡 充9元得45元</p>
              <span className="price">¥9</span>
              <span className="btn">新品尝试</span>
            </li>
            <li>
              <img src="https://yanxuan-item.nosdn.127.net/1229ada6e69de283d27f858db1c00603.png?type=webp&imageView&quality=65&thumbnail=330x330" alt="" />
              <p className="introduce">4.11周年庆省钱卡 充9元得45元</p>
              <span className="price">¥9</span>
              <span className="btn">新品尝试</span>
            </li>
            <li>
              <img src="https://yanxuan-item.nosdn.127.net/1229ada6e69de283d27f858db1c00603.png?type=webp&imageView&quality=65&thumbnail=330x330" alt="" />
              <p className="introduce">4.11周年庆省钱卡 充9元得45元</p>
              <span className="price">¥9</span>
              <span className="btn">新品尝试</span>
            </li>
            <li>
              <img src="https://yanxuan-item.nosdn.127.net/1229ada6e69de283d27f858db1c00603.png?type=webp&imageView&quality=65&thumbnail=330x330" alt="" />
              <p className="introduce">4.11周年庆省钱卡 充9元得45元</p>
              <span className="price">¥9</span>
              <span className="btn">新品尝试</span>
            </li>
            <li>
              <img src="https://yanxuan-item.nosdn.127.net/1229ada6e69de283d27f858db1c00603.png?type=webp&imageView&quality=65&thumbnail=330x330" alt="" />
              <p className="introduce">4.11周年庆省钱卡 充9元得45元</p>
              <span className="price">¥9</span>
              <span className="btn">新品尝试</span>
            </li>
          </ul>
        </div>
      </div>
        <div className="bottomnav">
          <ul className="list">
            <li>
              <span className="list_top1">严选超市</span>
              <span className="list_top2">10元凑好物</span>
              <div className="list_img">
                <img src="https://yanxuan-item.nosdn.127.net/be4d030d4b4a8a4bf096714ec5b2a4aa.png?quality=75&type=webp&imageView&thumbnail=150x150" alt="" />
                <img src="https://yanxuan-item.nosdn.127.net/4fc7ea43e829af4ed31e09673f68db89.png?quality=75&type=webp&imageView&thumbnail=150x150" alt="" />
              </div>
            </li>
            <li>
              <span className="list_top1">严选超市</span>
              <span className="list_top2">10元凑好物</span>
              <div className="list_img">
                <img src="https://yanxuan-item.nosdn.127.net/be4d030d4b4a8a4bf096714ec5b2a4aa.png?quality=75&type=webp&imageView&thumbnail=150x150" alt="" />
                <img src="https://yanxuan-item.nosdn.127.net/4fc7ea43e829af4ed31e09673f68db89.png?quality=75&type=webp&imageView&thumbnail=150x150" alt="" />
              </div>
            </li>
            <li>
              <span className="list_top1">严选超市</span>
              <span className="list_top2">10元凑好物</span>
              <div className="list_img">
                <img src="https://yanxuan-item.nosdn.127.net/be4d030d4b4a8a4bf096714ec5b2a4aa.png?quality=75&type=webp&imageView&thumbnail=150x150" alt="" />
                <img src="https://yanxuan-item.nosdn.127.net/4fc7ea43e829af4ed31e09673f68db89.png?quality=75&type=webp&imageView&thumbnail=150x150" alt="" />
              </div>
            </li>
            <li>
              <span className="list_top1">严选超市</span>
              <span className="list_top2">10元凑好物</span>
              <div className="list_img">
                <img src="https://yanxuan-item.nosdn.127.net/be4d030d4b4a8a4bf096714ec5b2a4aa.png?quality=75&type=webp&imageView&thumbnail=150x150" alt="" />
                <img src="https://yanxuan-item.nosdn.127.net/4fc7ea43e829af4ed31e09673f68db89.png?quality=75&type=webp&imageView&thumbnail=150x150" alt="" />
              </div>
            </li>
          </ul>
        </div>
        <div className="bottom">
        <div className="btn">
          <span className="down">下载App</span>
          <span>电脑版</span>
        </div>
        <div className="text">
          <p>网易公司版权所有 © 1997-2020</p>
          <p>食品经营许可证：JY13301080111719</p>
        </div>
      </div>
        <div className="test"></div>
      </div>
    )
  }
}
