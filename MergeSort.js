export function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  } else {
    const halfLength = Math.floor(array.length / 2);
    const leftHalf = array.slice(0, halfLength);
    const rightHalf = array.slice(halfLength);
    return merge(mergeSort(leftHalf), mergeSort(rightHalf));
  }
}

function merge(arr1, arr2, resultAcc = []) {
  const result = [...resultAcc];
  const array1 = [...arr1];
  const array2 = [...arr2];
  if (array1.length === 0 && array2.length === 0) {
    return result;
  } else if (array1.length === 0) {
    result.push(array2.shift());
  } else if (array2.length === 0) {
    result.push(array1.shift());
  } else {
    if (array1[0] <= array2[0]) {
      result.push(array1.shift());
    } else {
      result.push(array2.shift());
    }
  }
  return merge(array1, array2, result);
}
