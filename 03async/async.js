console.log('*** async await ***')
import 'babel-polyfill'

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

const load = async function(){
    const result1 = await loadImg('https://www.baidu.com/img/bd_logo.png')
    console.log(result1)
    const result2 = await loadImg('https://www.baidu.com/img/bd_logo1.png')
    console.log(result2)
}

load()

console.log('*** async await end ***')