import { mergeSort } from "./MergeSort.js";

let arrayToSort = getRandomArray();
const container = document.querySelector(".main");

let inProgress = false;

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

document.addEventListener("keydown", (event) => {
  if (event.code === "Space") {
    runSorting();
  }
});

async function runSorting() {
  if (!inProgress) {
    inProgress = true;
    console.log(await mergeSort(arrayToSort));
    inProgress = false;
  }
}

document.addEventListener("click", handleClick);
function handleClick(event) {
  const target = event.target;
  if (target.matches(".run")) {
    runSorting();
    target.blur();
  } else if (target.matches(".reset")) {
    location.reload();
  }
}
