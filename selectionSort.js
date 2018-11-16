function selectionSort(arr) {
  const arrCopy = arr.slice();
  const sortedArr = [];

  function sortLargestItem(arr) {
    let largest = arrCopy[0];
    let largestIndex = 0;
    for (let i = 1; i < arrCopy.length; i++) {
      if (arrCopy[i] > largest) {
        largest = arrCopy[i];
        largestIndex = i;
      }
    }
    return largestIndex;
  }

  for (let i = 0; i < arr.length; i++) {
    let currentLargest = sortLargestItem(arrCopy);
    sortedArr.push(arr[currentLargest]);
    arrCopy.splice(currentLargest, 1);
  }

  return sortedArr;
}

let sorted = selectionSort([0, 4, 3, 2, 5]);
sorted;
