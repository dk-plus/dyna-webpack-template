const $ = require('jquery');
const artT = require('art-template');

const Index = (() => {

  // 该模块
  const _e = {};

  // 全局操作数据
  const _g = {
    // 操作dom
    ele: {
      root: '',
    },
    // 渲染数据
    data: {},
  }

  // 开发配置
  const config = {
    mockMode: true,
  }

  // 初始化
  _e.init = () => {
    render();
  }

  // 渲染函数
  function render() {
    const tpl = require('./indexFile.tpl')();
    const tplRender = artT.compile(tpl);

    $(_g.ele.root).innerHTML = tplRender(_g.data);
  }

  return _e;

})();

module.exports = Index;
