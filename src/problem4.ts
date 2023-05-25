/**
 Suppose you have an array of tuples, where each tuple represents a product and contains the product name, price, and quantity. Write a TypeScript function that calculates the total cost of all the products in the array, using a generic type for the tuple and a type alias for the array.
 */

type productTuple = [string, number, number]
type ProductArray = Array<productTuple>


const totalCostCalculator = (Products: ProductArray): number => {
    let totalCost = 0;
    for (const [name, price, quantity] of Products) { //destructure the price and quantity here.
        const productCost = price * quantity
        totalCost = totalCost + productCost
    }
    return totalCost
}


const result = totalCostCalculator([['shoe', 4500, 2], ['T-shirt', 450, 1], ['shirt', 950, 2]])
console.log(`The total cost of the Product is ${result}`);