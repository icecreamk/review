console.log('*** class-constructor ***')

function Math(x, y) {
    this.x = x
    this.y = y
}
Math.prototype.add = function(){
    return this.x + this.y
}
var m = new Math(1, 2)
console.log(typeof Math)  // 'function
console.log(Math.prototype.constructor === Math)  // true ，构造函数的显式原型的constructor等于构造函数本身
console.log(m.__proto__ === Math.prototype)  // true，构造函数实例的隐式原型


class Math_c {
    constructor(x, y){
        this.x = x
        this.y = y
    }
    add(){
        return this.x + this.y
    }
}

const m_c = new Math_c(1, 2)
console.log(typeof Math_c)  // 'function
console.log(Math_c.prototype.constructor === Math_c)  // true
console.log(m_c.__proto__ === Math_c.prototype)  // true
// class是构造函数的语法糖

console.log('*** class-constructor end ***')