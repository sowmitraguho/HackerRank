// Problem Statement: Given an integer n, print a staircase of size n using # symbols and spaces.
function printStaircase(n) {
    for (let i = 1; i <= n; i++) {
        const spaces = ' '.repeat(n - i);
        const hashes = '#'.repeat(i);
        console.log(spaces + hashes);
    }
}

// Example usage:
printStaircase(5);

// Alternative implementation using a different approach
function printStaircaseAlt(n) {
    for (let i = 0; i < n; i++) {
        let line = '';
        for (let j = 0; j < n; j++) {
            line += (j < n - i - 1) ? ' ' : '#';
        }
        console.log(line);
    }
}

// Example usage:
printStaircaseAlt(5);
