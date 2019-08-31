console.log('*** promise ***')
function loadImg(src, success, fail){
    var img = document.createElement('img')
    img.onload = function(){
        success(img)
    }
    img.onerror = function(err){
        fail(err)
    }
    img.src = src
}
loadImg('https://www.baidu.com/img/bd_logo1.png', function(img){
    console.log('回调', img.width)
}, function(err){
    console.log(err)
})


function loadImg_p(src){
    const promise = new Promise((resolve, reject) => {
        var img = document.createElement('img')
        img.onload = function(){
            resolve(img)
        }
        img.onerror = function(err){
            reject(err)
        }
        img.src = src
    })
    return promise
}
const r = loadImg_p('https://www.baidu.com/img/bd_logo1.png')
r.then(img => {
    console.log('1', img.width)
    return img
}, err => {
    console.log(err)
}).then(img => {
    console.log('3', img.height)
})

r.then(res => {
    // 这里打印的是img
    console.log('2', res)
})

console.log('*** promise end ***')