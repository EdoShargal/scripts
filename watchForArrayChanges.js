let myArray = []

function processQ(arr) {
	console.log(arr)	//[ 'first', push: [Function] ]
}

myArray.push = function() { 
	Array.prototype.push.apply(this, arguments) 
	processQ(this)
}

myArray.push("first")