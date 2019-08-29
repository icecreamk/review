console.log('*** async promise ***')
function loadImg(src){
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

loadImg('https://www.baidu.com/img/bd_logo1.png').then(img => {
    console.log(img)
    return img
}).then(img => {
	console.log(img)
	return img
}).catch(err => {
	// 统一捕获异常
	console.log(err)
})

const result1 = loadImg('https://www.baidu.com/img/bd_logo.png')
const result2 = loadImg('https://www.baidu.com/img/bd_logo1.png')
Promise.all([result1, result2]).then(datas => {
	console.log('all:接受promise数组，待全部完成执行success，返回promise内容数组')
	console.log(datas)
})
Promise.race([result1, result2]).then(data => {
	console.log('race:接受promise数组，任一完成执行success，返回最先完成的promise内容')
	console.log(data)
})

console.log('*** async promise end ***')