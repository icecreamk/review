# MVVM 与 Vue

## jQuery 与 Vue 的区别
* 数据和视图的分离（解耦，开放封闭原则）
* 以数据驱动视图（关联，只关心数据操作，DOM操作被封装）

## MVC
* M：Model数据
* V：View视图
* C：Controller控制器，逻辑处理
* 操作V -> C处理数据 -> M数据同步到V中
* 应用于后端

## MVVM
* M：Model数据
* V：View视图
* VM：ViewModel连接View和Model（View和Model是分离的）
* View通过事件绑定方式操作Model，Model通过数据绑定方式更新View
* 由MVC衍生

## Vue三要素
* 响应式：defineProperty监听、vm代理data属性
* 模版引擎：
* 渲染：

### 响应式

#### 定义
* 修改data属性后，vue立刻监听到
* data属性被代理到vm上

#### 监听（Object.defineProperty）
* Object.defineProperty(obj, 'name', {
    get, // 监听取值
    set // 监听赋值
})

#### 代理（vm）
* 通过vm or this操作data属性

### 模版解析