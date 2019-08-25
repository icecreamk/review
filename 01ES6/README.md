# ES6

## export
* export default xx 导出默认，使用 import xx
* export xx or export { xx }，使用 import { xx }

## babel
* npm i -g babel-cli
* npm i -S-D babel-core babel-preset-es2015 babel-preset-latest
* babel --version
* /.babelrc
* babel './src'

## webpack
* npm i -S-D webpack babel-loader
* /webpack.config.js
* package.json/script.dev

## rollup
* /rollup.config.js
* rollup功能单一，打包模块化；webpack功能强大
* 工具尽量职能单一，可集成，可扩展

## 模块化标准
* 无模块化
* AMD标准，代表requirejs；少量CMD
* 前端打包工具　grunt，gulp, webpack，等使CommonJS 标准的nodeJs模块化可以被使用
* ES6愿景统一模块化标准

## class 与 普通构造函数

### 普通构造函数
* function Math
* Math.prototype.add
* m = new Math
* typeof Math  // 'function'
* Math.prototype.constructor === Math  // true，构造函数的显式原型的constructor等于构造函数本身
* m.__proto__ === Math.prototype  // true，构造函数实例的隐式原型

### class
* class Math_c {

    constructor(){}

    add(){}

}
* m_c = new Math_c
* typeof Math_c  // 'function'
* Math_c.prototype.constructor === Math_c  // true
* m_c.__proto__ === Math_c.prototype  // true
* class是构造函数的语法糖

## 继承

### 普通构造函数
* function Animal
* function Dog
* Dog.prototype = new Animal() // 绑定原型指向实现继承

### class
* class Animal_c
* class Dog_c extends Animal_c{ // 使用extends关键字继承，需super(props)继承属性

    constructor(){ super() }

}
* 实现过程本质是prototype的语法糖

## Promise
* Callback Hell 异步回调: function loadImg(src, success, fail)
* Promise: function loadImg_p(src){

    return new Promise((resolve, reject) => {})

}
* return new Promise实例
* new Promise传入函数，带有resolve reject 参数
* then 接收结果

## 其他
* let/const
* 多行字符串/模版变量``
* 解构赋值
* 块级作用域
* 函数默认参数
* 箭头函数，及其this指向