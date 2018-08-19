const $ = require('jquery');
const artT = require('art-template');

class Example {
  // 构造函数
  constructor(option) {
    this.option = option;
  }

  // 原型方法，由Example生产的对象直接调用
  doSomething() {
    console.log('do sth 1');
  }

  // 静态方法，可通过Example类直接调用
  static doSomething() {
    console.log('do sth 2');
  }

  // set方法，改变option值触发
  set option(opt) {
    this._option = opt;
  }

  // get方法，读取option值触发
  get option() {
    return this._option;
  }
}

module.exports = Example;