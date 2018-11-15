function binarySearch(array, target) {
  let low = 0;
  let high = array.length - 1;

  while (low < high) {
    let mid = Math.floor(high - low);
    if (target === array[mid]) {
      return mid;
    } else if (target < array[mid]) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return -1;
}

let searchResults = binarySearch([0, 1, 2, 3, 10, 15], 100);
searchResults;
