const {
  override,
  fixBabelImports,
  addDecoratorsLegacy,
  addLessLoader,
  addPostcssPlugins
} = require('customize-cra')
module.exports = override(
  //less
  addLessLoader({

  }),
  // 适配问题
  addPostcssPlugins([
    require('postcss-pxtorem')({
      rootValue: 37.5,
      propList: ['*']
    })
  ]),
  // 按需加载
  fixBabelImports('import', {
    libraryName: 'antd-mobile',
    style: 'css'
  }),
  // ES7装饰器语法兼容
  addDecoratorsLegacy()
)
