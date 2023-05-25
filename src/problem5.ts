/*
Suppose you have an array of numbers in TypeScript, and you want to find the sum of all the even numbers in the array. How would you approach this problem and write code to solve it?
*/

function totalOfEvenNumber(arr: Array<number>): number {
    let total = 0;
    for (const number of arr) {
        if (number % 2 === 0) {
            total += number
        }
    }
    return total;
}

console.log(totalOfEvenNumber([1, 2, 3, 4]));