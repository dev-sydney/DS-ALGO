const findIndex = (arr, num) => {
  let i = -1;

  for (let j = 0; j < arr.length; j++) {
    if (arr[j] === num) {
      i = j;
      return i;
    }
  }
  return i;
};
const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const binarySearch = (arr, val) => {
  let lower = 0;
  let upper = arr.length - 1;
  while (lower <= upper) {
    let middleIndex = lower + Math.floor((upper - lower) / 2); //figuring out how many elements are between the upper and lower
    if (val === arr[middleIndex]) return middleIndex;

    if (val < arr[middleIndex]) {
      upper = middleIndex - 1;
    } else {
      lower = middleIndex + 1;
    }
  }
  return -1;
};
// console.log(findIndex(arr, 17));
// console.log(binarySearch(arr, 8));
//                  m
//              l   u  m
const values = [-1, 0, 3, 5, 9, 12];
//target = 2
const binary = (values, target) => {
  let lower = 0;
  let upper = values.length - 1;
  while (lower <= upper) {
    console.log('try');
    let middle = lower + Math.floor((upper - lower) / 2);
    //m = 0 + (5-0) =2

    if (target === values[middle]) return middle;

    if (target < values[middle]) {
      upper = middle - 1;
    } else {
      lower = middle + 1;
    }
  }
  return -1;
};

console.log(binary(values, 9));
