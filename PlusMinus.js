// Problem Statement: Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with 6 places after the decimal.
// This function takes an array of integers and returns the ratios of positive, negative, and zero values.
function plusMinus(arr) {
    let positiveCount = 0;
    let negativeCount = 0;
    let zeroCount = 0;

    arr.forEach(num => {
        if (num > 0) positiveCount++;
        else if (num < 0) negativeCount++;
        else zeroCount++;
    });

    const total = arr.length;
    console.log((positiveCount / total).toFixed(6));
    console.log((negativeCount / total).toFixed(6));
    console.log((zeroCount / total).toFixed(6));
}

// Example usage:
const inputArray = [-4, 3, -9, 0, 4, 1];
plusMinus(inputArray);