# 组件化与React

## 对组件化的理解
* 组件的封装
    * 视图
    * 数据
    * 变化逻辑（数据驱动视图变化）
* 组件的复用
    * props传递

## JSX
* JSX语法（标签、表达式、判断、循环、事件绑定）
* JSX是语法糖，需要被解析成JS才能运行
* JSX是独立的标准，可被其他项目使用

## 自定义组件的解析
* 原生标签可直接渲染，vdom可以做到
* 自定义组件（class），vdom默认不认识
* 组件定义时候必须声明render函数
* 根据props初始化实例，执行实例的render函数
* render函数返回的是vnode对象，vdom即可识别

## setState

### 为何异步形式
* 可能一次执行多次setState
* 出于性能考虑，没必要每次setState都重新渲染
* JS是单线程，多次执行的也不会执行到多次渲染（多次执行的效果用户看不到，只有渲染后才可以）
* 因此设计成异步
* vue修改属性也是异步（set中执行updateComponent）

### setState的过程
* 每个组件实例，都有renderComponent方法
* setState异步回调会执行renderComponent
* 执行renderComponent会重新执行实例的render
* render函数返回newVnode
* 与preVnode对比，执行patch(preVnode, newVnode)

## React 与 Vue
* 技术选型没有对与错
* 技术选型要考虑诸多因素，如团队掌握情况，学习成本，已有项目框架
* 要有自己的选型主见，能说出理由

### 本质区别
* Vue本质是MVVM框架，由MVC发展而来
* React本质是前端组件化框架，由后端组件化发展而来

### 模版区别
* Vue使用模版（最初由Angular提出）
* React使用JSX
* 模版语法，倾向React JSX（模板和js混合）
* 模版分离，倾向Vue（模板和js分离）

### 组件化的区别
* React本身就是组件化
* Vue也支持组件化，不过是在MVVM上的扩展

### 共同点
* 支持组件化
* 数据驱动视图

### 总结
* 易于上手，首推Vue。文档更易读易学，社区成熟强大
* 团队水平较高，推荐React。组件化彻底清晰和JSX已标准化

## 问题总结
* 阐述对组件化的理解
* JSX的本质是什么
* JSX与vdom的关系
* 说下setState的过程
* 阐述对React和Vue的认识理解区别