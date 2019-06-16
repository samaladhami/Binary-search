const input = 
      [-1,-4,0, 6,7,8,9,12,13,16,18,19,35,66,77,98,123,234,345,456,567,678,789]

function binarySearch(arr, n) {
  if(arr[0] === n) return true;
  if(arr.length <= 1 && n !== arr[0]) return false;
  
  let median = Math.floor(arr.length / 2)
  if(n < arr[median]) {
    return binarySearch(arr.slice(0, median), n)
  } else {
    return binarySearch(arr.slice(median), n)
  }
}

binarySearch(input, 16)