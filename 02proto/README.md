# proto 原型

## 使用实例
* jQuery，Zepto中使用原型实现.css() .html()等方法

## 插件机制
* 编写jQuery插件，需将插件方法写入到prototype中
* 内部实现 prototype = $.fn = {xxx}
* 插件实现 $.fn.getNodeName = function(){}
* 只有$被暴露
* 统一到$.fn接口，方便使用、维护管理


### zepto
``` javascript
(function (window) {
    var zepto = {}
    function Z(dom, selector) {
        var i, len = dom ? dom.length : 0
        for(i =0;i<len;i++) {
            this[i] = dom[i]
        }
        this.length = len
        this.selector = selector
    }
    zepto.Z = function(dom, selector) {
        return new Z(dom, selector)
    }
    zepto.init = function(selector) {
        var slice = Array.prototype.slice
        var dom = slice.call(document.querySelectorAll(selector))
        return zepto.Z(dom, selector)
    }
    var $ = function(selector) {
        return zepto.init(selector)
    }
    window.$ = $

    $.fn = {
        css: function(key, value) {
            console.log('css')
        },
        html: function(value) {
            console.log('html')
        }
    }
    Z.prototype = $.fn

})(window)

var $p = $('p')
$p.css()
$p.html()
```

### jQyery
```
(function (window) {
    var jQ = function(selector) {
        return new jQ.fn.init(selector)
    }
    jQ.fn = {
        css: function(key, value) {
            console.log('css')
        },
        html: function(value) {
            console.log('html')
        }
    }
    var init = jQ.fn.init = function(selector) {
        var slice = Array.prototype.slice
        var dom = slice.call(document.querySelectorAll(selector))
        var i, len = dom ? dom.length : 0
        for(i =0;i<len;i++) {
            this[i] = dom[i]
        }
        this.length = len
        this.selector = selector || ''
    }
    init.prototype = jQ.fn
    window.$ = jQ
})(window)

var $p = $('p')
$p.css()
$p.html()
```