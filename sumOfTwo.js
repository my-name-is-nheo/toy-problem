// From an unsorted array, check weather there are any two numbers that will sum up to a given number.
function sumFinder(arr, sum) {
  var differ = {},
    substract;

  for (var i = 0; i < arr.length; i++) {
    substract = sum - arr[i];

    if (differ[substract]) return true;
    else differ[arr[i]] = true;
  }

  return false;
}

console.log(sumFinder([6, 4, 3, 2, 1, 7], 9));
console.log(sumFinder([6, 4, 3, 2, 1, 7], 2));
