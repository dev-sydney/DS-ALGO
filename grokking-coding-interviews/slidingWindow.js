let sampleArr = [4, 2, 1, 7, 8, 1, 2, 8, 1, 0];

/**
 *
 * @param {Object} arr The test array
 * @param {Number} k  size of the window sub-array
 */
const findMaxSumSubArray = (arr, k) => {
  let currSum, MaxSoFar, goingOutIndex;

  currSum = MaxSoFar = goingOutIndex = 0;

  for (let i = 0; i < arr.length; i++) {
    currSum += arr[i]; //

    if (i >= k - 1) {
      //Updating the max value
      MaxSoFar = Math.max(MaxSoFar, currSum);
      currSum -= arr[goingOutIndex]; //updating the window itself
      goingOutIndex++;
    }
  }

  return MaxSoFar;
};

// console.log(findMaxSumSubArray(sampleArr, 3));

let arr = [2, 3, 4, 1, 5];

const findMaxSum = (arr, windowLength) => {
  let maxValue, curSum, eliminatingIndex;
  maxValue = curSum = eliminatingIndex = 0;
  for (let i = 0; i < arr.length; i++) {
    curSum += arr[i];
    if (i >= windowLength - 1) {
      maxValue = Math.max(maxValue, curSum);
      curSum -= arr[eliminatingIndex];
      eliminatingIndex++;
    }
  }

  return maxValue;
};

console.log('findMaxSum: ', findMaxSum([2, 3, 4, 1, 5], 2));
let inputArr = [3, 4, 1, 1, 6];

/**
 * Finds the smallest window size of a target greater or equal to the target sum
 * @param {*} targetSum
 * @param {*} arr
 * @returns {Number} the smallest window size
 */
const smallestSum = (targetSum, arr) => {
  let minWindowSize = Infinity;
  let windowStart = 0;
  let currentWindowSum = 0; //the sum of the current window

  for (let i = 0; i < arr.length; i++) {
    currentWindowSum += arr[i];

    while (currentWindowSum >= targetSum) {
      minWindowSize = Math.min(minWindowSize, i - windowStart + 1);
      currentWindowSum -= arr[i];
      windowStart++;
    }
  }
  return minWindowSize;
};

let sampleInputArr = [4, 2, 2, 7, 8, 1, 2, 8, 10];
console.log('Smallest Sum of the array:', smallestSum(8, sampleInputArr));
