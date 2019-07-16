const highestOccurrence = (arr) => {
  const map = new Map();
  const results = [];
  let maxCount = 0;
  
//create map object with key value pair(e.g {item: occurrence})
  arr.forEach(key => map.set(key, map.get(key) + 1 || 1));

//iterate the created map object for getting the max occurrence
  map.forEach((val) => {
    if (val > maxCount) maxCount = val;
  });
//iterate again fot getting all keys with the max occurrence
  map.forEach((val, key) => {
    if (val === maxCount) results.push(key);
  });

  return results;
}