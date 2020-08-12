function mergeSortedArray(a, b) {
  // input are two sorted arrays.

  // if either a or b are empty arrays or simply not defined, just return the input
  if (a.length === 0) {
    return b;
  }
  if (b.length === 0) {
    return a;
  }

  var finalArray = [],
    currentElementInA = a[0],
    currentElementInB = b[0],
    indexA = 1,
    indexB = 1;

  /*
    if currentElementInA or currentElementInB exists, we will insert to merged array. (will go insde while loop)

    to insert currentElementInA:
    currentElementInA exists and currentElementInB does not exists
    or
    both exists and currentElementInA < currentElementInB


    */

  while (currentElementInA || currentElementInB) {
    if (
      (currentElementInA && !currentElementInB) ||
      currentElementInA < currentElementInB
    ) {
      finalArray.push(currentElementInA);
      currentElementInA = a[indexA++];
    } else {
      finalArray.push(currentElementInB);

      currentElementInB = b[indexB++];
      // same thing as b]indexB] indexB++
    }
  }
  return finalArray;
}

console.log(mergeSortedArray([2, 5, 6, 9], [1, 2, 3, 29]));
