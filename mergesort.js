function split(wholeArray) {
  const midpoint = Math.floor(wholeArray.length / 2);

  const firstHalf = wholeArray.slice(0, midpoint);
  const secondHalf = wholeArray.slice(midpoint);

  return [firstHalf, secondHalf];
}

function merge(arr1, arr2, comparator = (a, b) => a - b < 0) {
  let mergedArr = [];
  let index1 = 0;
  let index2 = 0;

  if (arr1.length === 1 && arr2.length === 1) {
    if (comparator(arr1[0], arr2[0])) {
      mergedArr.push(arr1[0]);
      mergedArr.push(arr2[0]);
    } else {
      mergedArr.push(arr2[0]);
      mergedArr.push(arr1[0]);
    }
  } else {
    while (index1 + index2 < arr1.length + arr2.length) {
      if (comparator(arr1[index1], arr2[index2])) {
        mergedArr.push(arr1[index1]);
        // if (index1 !== arr1.length - 1)
        // if (index1 <= arr1.length - 2)
        index1++;
      } else {
        mergedArr.push(arr2[index2]);
        index2++;
      }
    }
  }
  return mergedArr;
}

function mergeSort(array, comparator = (a, b) => a - b < 0) {
  //base case 1: 0 elements:
  if (array.length === 0) return [];
  //base case 2: 1 element:
  else if (array.length === 1) return array;
  else {
    const [firstHalf, secondHalf] = split(array);
    return merge(mergeSort(firstHalf), mergeSort(secondHalf), comparator);
  }
}
