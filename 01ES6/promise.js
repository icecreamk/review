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
    console.log(img.width)
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
loadImg_p('https://www.baidu.com/img/bd_logo1.png').then(img => {
    console.log(img.width)
}, err => {
    console.log(err)
})

console.log('*** promise end ***')