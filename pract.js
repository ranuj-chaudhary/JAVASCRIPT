const arr = [1, 5, 6, 7, 4, 3, 2];
function insertionSort(i, arr) {
  if (i > arr.length - 1) {
    return arr;
  }

  let currVal = arr[i];
  let j = i - 1;
  let count = 0;
  while (arr[j] > currVal && j > -1 && count < 10) {
    arr[j + 1] = arr[j];
    j--;
  }
  arr[j + 1] = currVal;

  return insertionSort(i + 1, arr);
}

console.log(insertionSort(1, arr));
