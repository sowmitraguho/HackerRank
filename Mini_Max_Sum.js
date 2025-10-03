//Problem Statement: Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.
function miniMaxSum(arr) {
    const totalSum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    const min = totalSum - Math.max(...arr);
    const max = totalSum - Math.min(...arr);
    console.log(min, max);
}
//Example usage:
const inputArray = [1, 2, 3, 4, 5];
miniMaxSum(inputArray);