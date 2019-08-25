# proto 原型

## 使用实例
* jQuery，Zepto中使用原型实现.css() .html()等方法

## 插件机制
* 编写jQuery插件，需将插件方法写入到prototype中
* 内部实现 prototype = $.fn = {xxx}
* 插件实现 $.fn.getNodeName = function(){}
* 只有$被暴露
* 统一到$.fn接口，方便使用、维护管理
