# virtual dom 虚拟 dom

## 虚拟 dom
* 避免操作DOM
* 用JS模拟的DOM结构
* DOM变化的对比，在JS层处理
* 提高重绘性能

## dom形式
* 尽量在js中操作DOM，最后再一次性append到页面中

### 真实 dom
```
<ul id="list">
    <li class="item">item</li>
</ul>
```

### virtual dom
```
{
    tag: 'ul',
    attrs: { id: 'list'},
    children : [{
        tag: 'li',
        attrs: { className: 'item' },
        children: ['item']
    }]
}
```

## snabbdom(虚拟的dom库)
* h(tag, {attrs}, [children]) // 生成vnode节点
* patch(vnode, newVnode) // dom节点对比、渲染

## diff算法
* linux基础命令，对比文件内容变化
* diff算法是找出vDom中需要更新的节点(避免大量的dom更新，dom更新是昂贵的)
* 依据patch(vnode, newVnode)对比出不同的节点并进行替换更新

## diff基本实现流程
* 根据数据和模版生成虚拟vDom（JS对象，描述真实Dom）
* 用虚拟vDom生成真实Dom节点
* 数据发生变化时，生成新的虚拟vDom
* 递归比对新的vDom与原vDom的区别，操作真实Dom替换掉不同的节点
* 核心逻辑：createElement、updateChildren