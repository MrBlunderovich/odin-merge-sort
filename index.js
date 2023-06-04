import { mergeSort } from "./MergeSort.js";

function getRandomArray(length = 100) {
  const array = [];
  for (let i = 0; i < length; i++) {
    const newElement = Math.ceil(Math.random() * 100);
    array.push(newElement);
  }
  return array;
}
