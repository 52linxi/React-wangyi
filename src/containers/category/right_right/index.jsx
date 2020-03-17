import React, { Component } from 'react'
import { Grid } from 'antd-mobile'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import './index.less'
@withRouter
@connect(
  state => ({ saverightdata: state.saverightdata, rightData: state.rightData }),
  null
)
class RightContent extends Component {
  state = {
    // 右边对应左侧导航栏的数据
    rightdata: {}
  }
  componentDidMount() {
    //解构属性
    const { saverightdata } = this.props
    this.setState({
      rightdata: saverightdata
    })
  }
  render() {
    const { search } = this.props.location
    if (!this.props.rightData.cateLists) return null
    // 第一次进来分类管理遍历的数组
    const initArr = this.props.rightData.cateLists[0].categoryList;
    // 没数据
    console.log(initArr);
    
    // 查找到对应左侧按钮的数据
    const categoryList = this.props.saverightdata.categoryList
    // 右侧数据中 数据分成两种 前面4个是categoryList，后面的是this.props.saverightdata.subCateList
    const rightArr = categoryList
      ? categoryList
      : this.props.saverightdata.subCateList
      // 有数据
      console.log(rightArr);
      
    // 判断地址栏是不是空，如果是空说明是第一次进来，不是的话就说明用户点击过
    const newRightArr = search ? rightArr : initArr
    console.log(newRightArr)
    
    const data = newRightArr.map((_val, i) => ({
      icon: _val.bannerUrl ? _val.bannerUrl : _val.wapBannerUrl,
      text: _val.name
    }))

    return (
      <div className="right_content_container">
        {/* 右侧banner图 */}
        <header className="banner_img">
          <img
            src="https://yanxuan.nosdn.127.net/9f4bcf0d57149499584d59478a606e9e.jpg?quality=75&type=webp&imageView&thumbnail=0x196"
            alt=""
          />
        </header>

        {/* 右侧主体,遍历显示 */}
        <div className="right_content_wrapper">
          <Grid data={data} columnNum={3} hasLine={false} />
        </div>
      </div>
    );
  }
}

export default RightContent
