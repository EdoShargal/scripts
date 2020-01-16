function timeSum(times) {
  let sec = 0;
  if (times.length > 0){
  	sec = times.reduce((a,e) => a + Date.parse("01 Jan 1970 " + e),0) / 1000
  }
  return [Math.floor(sec / 3600), Math.floor(sec / 60) % 60, sec % 60]
}