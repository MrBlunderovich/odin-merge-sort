const DELAY_TIMEOUT = 200;
const HIGHLIGHT_OPACITY = 0.65;

export async function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  } else {
    const halfLength = Math.floor(array.length / 2);
    const leftHalf = array.slice(0, halfLength);
    const rightHalf = array.slice(halfLength);
    return await merge(await mergeSort(leftHalf), await mergeSort(rightHalf));
  }
}

async function merge(arr1, arr2, resultAcc = []) {
  console.log(arr1, arr2);
  const result = [...resultAcc];
  const array1 = [...arr1];
  const array2 = [...arr2];
  const bothArrays = [...arr1, ...arr2];
  switchBarsHighlighting(bothArrays, true);

  if (array1.length === 0 && array2.length === 0) {
    const delay = new Promise((resolve) => {
      setTimeout(() => {
        resolve(result);
      }, DELAY_TIMEOUT);
    });
    const delayedResult = await delay;
    reorderBars(delayedResult);
    switchBarsHighlighting(delayedResult, false);
    return delayedResult;
  } else if (array1.length === 0) {
    result.push(array2.shift());
  } else if (array2.length === 0) {
    result.push(array1.shift());
  } else {
    if (array1[0].value <= array2[0].value) {
      result.push(array1.shift());
    } else {
      result.push(array2.shift());
    }
  }
  return await merge(array1, array2, result);
}

function reorderBars(result) {
  const main = document.querySelector(".main");
  const nextSibling = result.slice(-1)[0].node;
  const bars = [...result].sort((a, b) => +a.value - +b.value);
  const nodes = bars.map((bar) => bar.node);
  nodes.forEach((node) => {
    main.insertBefore(node, nextSibling);
  });
}

function switchBarsHighlighting(elementsInProgress, doHighlight) {
  elementsInProgress.forEach((element) => {
    element.node.style.opacity = doHighlight ? HIGHLIGHT_OPACITY : 1;
  });
}
