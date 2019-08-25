console.log('*** extends ***')
function Animal(){
    this.eat = function(){
        console.log('eat')
    }
}

function Dog() {
    this.bark = function(){
        console.log('bark')
    }
}

Dog.prototype = new Animal() // 绑定原型指向实现继承
var gg = new Dog()
gg.eat()
gg.bark()


class Animal_c{
    constructor(){
    }
    eat(){
        console.log('eat')
    }
}
class Dog_c extends Animal_c{ // 使用extends关键字继承，需super(props)继承属性
    constructor(){
        super()
    }
    bark(){
        console.log('bark')
    }
}
var gg_c = new Dog_c()
gg_c.eat()
gg_c.bark()

console.log('*** extends end ***')