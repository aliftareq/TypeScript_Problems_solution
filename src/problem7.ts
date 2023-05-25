/**
 Create a TypeScript program that declares an array of numbers. Use the spread  operator to pass the elements of the array as arguments to a function that finds the minimum and maximum values of the array. Use destructuring to assign the minimum and maximum values to separate variables, and log them to the console.
 */

const Numbers: Array<number> = [15, 12, 3, 41, 5, 6, 7, 80, 9]

const findMinmax = (numbers: number[]): [number, number] => {
    const minValue = Math.min(...numbers)
    const maxValue = Math.max(...numbers)
    return [minValue, maxValue]
}

const [minValue, maxValue] = findMinmax(Numbers)

console.log(`min and max value are respectively ${minValue},${maxValue}`);
