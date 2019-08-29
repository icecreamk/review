console.log('*** async deferred ***')
function loadImg(src){
	var dtd = $.Deferred()
	var img = document.createElement('img')
	img.onload = function(){
		dtd.resolve(img)
	}
	img.onerror = function(err){
		dtd.reject(err)
	}
	img.src = src
	return dtd.promise()
}

loadImg('https://www.baidu.com/img/bd_logo1.png').then(function(img){
	console.log(img)
}, function(err){
	console.log(err)
})

console.log('*** async deferred end ***')