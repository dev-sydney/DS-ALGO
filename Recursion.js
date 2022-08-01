let i = 0;
const sampleArr = [1, 2, 3, 4, 5];
const sum = (arr, count = 0) => {
  i += arr[count];
  if (count === arr.length) {
    return i;
  } else {
    return sum(arr, count + 1);
  }
};
// console.log(sum(sampleArr));
const findMax = arr => {
  if (arr.length === 0) return -Infinity;
  if (arr.length === 1) {
    return arr[0];
  } else {
    const [first, ...rest] = arr;

    return first > findMax(rest) ? first : findMax(rest);
  }
};
console.log(findMax([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(findMax([23, 89, 10, 8]));
console.log(findMax([]));
// console.log(findMax([]));
let res;
const addUpTo = num => {
  if (num === 1) {
    return 1;
  } else {
    return num + addUpTo(num - 1);
  }
};

console.log('ADD UP:', addUpTo(3));
