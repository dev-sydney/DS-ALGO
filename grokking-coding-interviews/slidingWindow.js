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

const findSmallestSum = (arr, sum) => {
  let windowSum, minLength, windowStart;
  windowStart = minLength = windowSum = 0;

  for (let i = 0; i < arr.length; i++) {
    windowSum += arr[i];

    while (windowSum >= sum) {
      minLength = Math.min(minLength, minLength - windowStart + 1);
      windowSum -= arr[windowStart];
      windowStart += 1;
    }
  }

  if (minLength === 0) return 0;
  return minLength;
};
// console.log(findMax(arr, 3));
// console.log(findSmallestSum(inputArr, 8));
