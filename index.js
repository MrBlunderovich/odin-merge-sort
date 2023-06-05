import { mergeSort } from "./MergeSort.js";

let arrayToSort = getRandomArray();
const container = document.querySelector(".main");

function getRandomArray(length = 100) {
  const array = [];
  for (let i = 0; i < length; i++) {
    const newValue = Math.ceil(Math.random() * 100);
    const newElement = {};
    newElement.value = newValue;
    const newNode = document.createElement("div");
    newNode.classList.add("bar");
    newNode.dataset.value = newValue;
    newNode.style.height = `${newValue}%`;
    newElement.node = newNode;
    array.push(newElement);
  }
  return array;
}

function renderBars(array) {
  container.innerHTML = "";
  const fragment = document.createDocumentFragment();
  array.forEach((item) => {
    fragment.appendChild(item.node);
  });

  container.appendChild(fragment);
}

window.onload = () => {
  renderBars(arrayToSort);
};

document.addEventListener("keydown", handleKeyDown);
async function handleKeyDown(event) {
  if (event.code === "Space") {
    console.log("merge!");
    console.log(await mergeSort(arrayToSort));
  }
}
