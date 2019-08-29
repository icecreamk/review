# async 异步

## 单线程和异步
* 单线程：一个线程，同一时间只能做一件事
* 原因：避免DOM渲染的冲突
* 解决方案： 异步

## event-loop 事件轮询
* 同步代码直接执行
* 异步代码放在异步队列中
* 待同步代码执行完毕，轮询监听执行异步队列中的代码

## jQuery Deferred

### jQuery1.5的变化
* 1.5之前$.ajax({success,error})  // XHR对象
* 1.5之后$.ajax().done().done().fail()  // deferred对象
* 或者$.ajax().then(success,error).then(success,error)  // deferred对象，很像Promise写法
* 无法改变JS异步和单线程的本质
* 只能从写法上杜绝callback形式
* 是一种语法糖，但解耦懒代码
* 很好的体现开放封闭原则（扩展开放，修改封闭）

### 语法
* dtd = $.Deferred()
* promise = dtd.promise()
* promise.then()

## Promise

### 语法
* new Promise((resolve, reject) => {}).then()
* Promise.all([]).then(datas)
* Promise.race([]).then(data)

### 标准-状态
* 三种状态：pending、fulfilled、rejected
* 初始状态是pending
* pending => fulfilled，pending => rejected
* 状态变化不可逆

### 标准-then
* Promise 实例必须实现then方法
* then()必须接受两个函数作为参数
* promise.then()返回的必须是一个Promise实例，若无明码return新实例，则默认返回原promise实例