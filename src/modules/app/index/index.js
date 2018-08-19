const $ = require('jquery');
const artT = require('art-template');

const Utils = require('../../lib/utils.js');

require('./index.less');

!(() => {
  console.log('%cdyna', `
    background: #cacaca;
    padding: 0 5px;
    border-radius: 50px;
    font-size: 14px;
    color: #fff;
  `);

  let data = {
    title: 'dyna'
  };

  function render() {
    const tpl = require('./index.tpl')();
    const tplRender = artT.compile(tpl);
    $('#root').html(tplRender(data));
  }

  render();
})();