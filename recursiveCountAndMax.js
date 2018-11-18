function recursiveCount(list) {
  if (list.length < 2) {
    return 1;
  }
  return 1 + recursiveCount(list.slice(1));
}

array = [1, 2, 11, 1, 1, 4, 6, 6, 6, 8];
console.log(recursiveCount(array));

function recursiveMax(list) {
  if (list.length < 2) {
    return list[0];
  }
  if (list[0] > recursiveMax(list.slice(1))) {
    return list[0];
  }
  return recursiveMax(list.slice(1));
}

console.log(recursiveMax(array));
