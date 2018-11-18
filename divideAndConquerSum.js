function sum(array) {
  if (array.length < 2) {
    return array[0];
  }
  return array[0] + sum(array.slice(1));
}

testArray = [0, 1, 2, 5, 10, 22];
console.log(sum(testArray));
