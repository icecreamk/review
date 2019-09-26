# async 异步

## 单线程和异步
* 单线程：一个线程，同一时间只能做一件事（两句js不能同时执行）
* 原因：避免DOM渲染的冲突
* 解决方案： 异步

### DOM渲染的冲突
* 浏览器需要渲染DOM
* js可以修改DOM
* 若浏览器和js共用一个线程，则DOM会冲突，故js执行时，dom暂停渲染，反之同理
* 两段js若同时修改dom则dom会冲突，故js单线程
* webworker支持多线程，但他不能访问dom，也就不存在dom渲染冲突

### 异步虽然解决单线程但也存在的问题
* 没按照书写顺序执行，可读性差
* callback中不容易模块化

## event-loop 事件轮询（一直循环监听异步队列中是否内容需要执行）
* 同步代码直接执行
* 异步代码放在异步队列中
* 待同步代码执行完毕，轮询监听执行异步队列中的代码
* 事件轮询是js异步的解决方案

### 示例
``` javascript

$.ajax({
    url: 'xxx',
    success: function() {
        console.log(1)
    }
})

// 100毫秒后放入异步队列中
setTimeout(function() {
    console.log(2)
}, 100)

// 立刻放入异步队列中
setTimeout(function() {
    console.log(3)
})
console.log(4)

// => 4 3 1 2 或 4 3 2 1 (取决于ajax请求是否在100毫秒之内)
// 若ajax请求的是本地文件，也有可能1在3之前
```


## jQuery Deferred

### jQuery1.5的变化
* 1.5之前$.ajax({success,error})  // XHR对象
* 1.5之后$.ajax().done().done().fail()  // deferred对象
* 或者$.ajax().then(success,error).then(success,error)  // deferred对象，很像Promise写法
* 无法改变JS异步和单线程的本质
* 只能从写法上杜绝callback形式
* 是一种语法糖，但解耦了代码
* 很好的体现开放封闭原则（扩展开放，修改封闭）

### 语法
* dtd = $.Deferred()
* promise = dtd.promise()
* promise.then()

## Promise
* 改变不了JS单线程、异步的本质（只是将callback链式串起来）

### 语法
* new Promise((resolve, reject) => {}).then()
* Promise.all([]).then(datas)
* Promise.race([]).then(data)

### 异常捕获
* 规定：then只接收一个参数，最后统一用catch捕获异常（reject和throw error）

### 标准-状态
* 三种状态：pending、fulfilled、rejected
* 初始状态是pending
* pending => fulfilled，pending => rejected（状态变化不可逆）

### 标准-then
* Promise 实例必须实现then方法
* then()必须接受两个函数作为参数
* promise.then()返回的必须是一个Promise实例，若无明码return新实例，则默认返回原promise实例

## async/await

* (async function(){
    result = await promise()
})()
* 使用await，函数必须用async标识
* await后是Promise实例
* 需要babel-polyfill，async是ES7提案，并未标准化
* 使用Promise，但并不和Promise冲突
* 同步写法，无回调函数
* 改变不了JS单线程、异步的本质

## Generator
* 新语法，和编辑器相关，原理较为复杂，成本高
* 不是针对异步提出的功能，不是异步的直接替代方案（不是用来支持异步）
* 有更好简洁的解决方案，如async/await
* koa也从Generator解决异步，转向支持async/await