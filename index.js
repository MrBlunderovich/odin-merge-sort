import { mergeSort } from "./MergeSort.js";
import { renderBars } from "./renderBars.js";

let arrayToSort = getRandomArray();
const container = document.querySelector(".main");

function getRandomArray(length = 100) {
  const array = [];
  for (let i = 0; i < length; i++) {
    const newElement = Math.ceil(Math.random() * 100);
    array.push(newElement);
  }
  return array;
}

function updateArray(arrayToSort, newArray = undefined) {
  if (newArray) {
    arrayToSort = newArray;
  }
  renderBars(container, arrayToSort);
}

window.onload = () => {
  updateArray(arrayToSort);
};
