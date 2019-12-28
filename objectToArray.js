function objectToArray(obj) {
	let arr = []
	let keys = Object.keys(obj)
	for (let i = 0; i < keys.length; i++){
		arr[arr.length] = new Array(keys[i], obj[keys[i]])
	}
	return arr
}