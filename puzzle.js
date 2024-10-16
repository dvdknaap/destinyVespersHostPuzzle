// You can copy this code in your browser developers panel, press F12 in your browser (or right click then click on inspect) go to the console tab and past the code


function getTargetNumber() {
    // Ask the user for input (can use prompt in a real browser environment)
    return parseInt(prompt("Enter the target number:"));
}

function findUniqueCombination(target, operation = 'sum') {
    const digits = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    // Generate all permutations of 4 digits
    const combinations = getPermutations(digits, 4);

    // Find the right combination based on the operation
    for (let comb of combinations) {
        if (operation === 'sum' && comb.reduce((a, b) => a + b, 0) === target) {
            return comb;
        } else if (operation === 'multiply') {
            const product = comb.reduce((a, b) => a * b, 1);
            if (product === target) {
                return comb;
            }
        }
    }

    return null;
}

function getPermutations(arr, length) {
    if (length === 1) return arr.map(el => [el]);
    const perms = [];
    arr.forEach((el, index) => {
        const subPerms = getPermutations(arr.slice(0, index).concat(arr.slice(index + 1)), length - 1);
        subPerms.forEach(sub => perms.push([el, ...sub]));
    });
    return perms;
}

function findTwoDigitMultiplication(target) {
    for (let i = 10; i < 100; i++) {
        for (let j = 10; j < 100; j++) {
            if (i * j === target) {
                const combination1 = findUniqueCombination(i, 'sum');
                const combination2 = findUniqueCombination(j, 'sum');

                if (combination1 && combination2) {
                    return { i, j, combination1, combination2 };
                }
            }
        }
    }
    return null;
}

function sumPuzzle() {
    const targetSum = getTargetNumber();
    console.log(`Target sum: ${targetSum}`);

    const combination = findUniqueCombination(targetSum, 'sum');

    if (combination) {
        console.log(`A possible unique combination of four digits that sums to ${targetSum} is:`, combination);
    } else {
        console.log(`No combination of four unique digits found that sums to ${targetSum}.`);
    }
}

function multiplyPuzzle() {
    const target = getTargetNumber();

    const combination = findUniqueCombination(target, 'multiply');

    if (combination) {
        console.log(`A possible unique combination of four digits that multiplies to ${target} is:`, combination);
    } else {
        console.log(`No combination of four unique digits found that multiplies to ${target}.`);
    }
}

function twoDigitProductPuzzle() {
    const target = getTargetNumber();
    const result = findTwoDigitMultiplication(target);

    if (result) {
        const { i, j, combination1, combination2 } = result;
        console.log(`Two two-digit numbers that multiply to ${target} are: ${i} and ${j}`);
        console.log(`A possible set of four digits that sums to ${i} is:`, combination1);
        console.log(`A possible set of four digits that sums to ${j} is:`, combination2);
    } else {
        console.log(`No suitable pair of two-digit numbers found that multiply to ${target} with sets of four digits.`);
    }
}

// Choose which puzzle to run
const choice = prompt("Enter your choice (1 for Sum, 2 for Multiply, 3 for Two-Digit Product):");

if (choice === "1") {
    sumPuzzle();
} else if (choice === "2") {
    multiplyPuzzle();
} else if (choice === "3") {
    twoDigitProductPuzzle();
} else {
    console.log("Invalid choice. Please try again.");
}
