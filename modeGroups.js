function mode(nums) {
    const obj = nums.reduce((a, c) => {
        a[c] = ++a[c] || 1
        return a
    }, {})
    let highest = 0
    let arr = []
    console.log(obj)
    for (let num in obj) {
        if (obj[num] > highest) {
            arr = [+num]
            highest = obj[num]
        }
        else if (obj[num] === highest) arr.push(+num)
    }
    console.log(arr)
}