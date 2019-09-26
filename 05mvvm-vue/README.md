# MVVM 与 Vue

## jQuery 与 Vue 的区别
* 数据和视图的分离（解耦，开放封闭原则）
* 以数据驱动视图（关联，只关心数据操作，DOM操作被封装）

## MVC
* M：Model数据
* V：View视图
* C：Controller控制器，逻辑处理
* 常用：操作V -> C处理数据  -> M数据同步到V中
* 不常用：操作C处理数据 -> M数据同步到V中
* 应用于后端

## MVVM
* M：Model数据
* V：View视图
* VM：ViewModel连接View和Model（View和Model是分离的，都无权访问对方，只能通过VM访问）
* View通过事件绑定方式操作Model，Model通过数据绑定方式更新View
* 由MVC衍生
* V通过事件绑定的形式影响M
* M通过数据绑定的形式影响V

## Vue三要素(MVVM的三要素)
* 响应式（vue如何监听到data的变化）
    - defineProperty监听、vm代理data属性
* 模版解析(vue的模板如何被解析，指令如何处理)
    - 模版解析成render函数
* 渲染（vue的模板如何被渲染成真实的html，以及渲染过程）
    - render将vdom渲染Dom

### 响应式

#### 定义
* 修改data属性后，vue立刻监听到
* data属性被代理到vm上

#### 原理： 
* 监听（Object.defineProperty），将data的属性变化代理到vm上
* Object.defineProperty(obj, 'age', {
    get, // 监听取值
    set // 监听赋值
})

#### 代理（vm）
* 通过vm or this操作data属性

### 模版解析
#### 模版
* 本质：字符串（与html格式很像，但有很大区别）
* 包含逻辑语句，有变量，如v-if等
* 模版必须转换成JS代码，因为：
    * 有逻辑只有JS才能处理（图灵完备语言）
    * 最终要转换为html渲染页面，必须用JS才能实现
    * 因此模版最终要通过JS函数（render函数）转换


#### render函数（渲染）
##### with语法（render函数中有使用到，开发中尽量避免使用with）
* console.log(obj.name) === with(obj){ console.log(name) }

##### render
```
<div id="app">
    <p>{{name}}</p>
</div>
```
<==>
```
render(){
    with(this){
        return _c(
            'div',
             { attrs: {'id': 'app}},
            [
                _c('p',[_v(_s(name))])
            ]
        )
    }
}
```
* 模版中信息都包含在render函数中
* this即vm
* name 即 this.name 即 vm.name == 即 data中name
* 模版中的data的属性，都变成了JS变量
* 模版中的v-model v-on等变成了JS逻辑
* render函数执行返回vnode

##### render与vdom
* updateComponent实现了vdom的patch
* 页面首次渲染执行updateComponent
* data中属性修改，执行updateComponent

## Vue实现流程
* 解析模版成render函数
    * with用法
    * 模版中信息都包含在render函数中
    * 模版中的data的属性，都变成了JS变量
    * 模版中的v-model v-on等变成了JS逻辑
    * render函数执行返回vnode
* 响应式开始监听
    * Object.defineProperty
    * data属性被代理到vm上
* 首次渲染显示页面，绑定依赖
    * 初次渲染，执行updateComponent，执行vm._render
    * 执行render，会访问到data属性
    * data属性访问会被响应式到get方法监听到（为何监听get？）
        * data中属性不一定全被使用到
        * 只有被用到的才会调用到get
        * set时只需要关心调用到get的属性
        * 避免不必要的重复渲染
    * 执行updateComponent，执行vdom的patch方法
    * patch将vnode渲染成Dom，初次渲染完成
* data属性变化，触发rerender
    * 修改属性，被响应式的set监听到
    * set中执行updateComponent（异步）
    * updateComponent重新执行vm._render
    * 生成的vnode通过patch对比prevVnode，渲染Dom

## 总结
* 使用jQuery与使用框架的区别
* 对MVVM的理解
* vue中如何实现响应式
* vue中如何解析模版
* vue的整体实现流程