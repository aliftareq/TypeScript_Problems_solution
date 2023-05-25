/**
 You have an interface for Product, containing the product's id, name, price, and category. You want to filter an array of Products based on a specific criterion and value.

Write a TypeScript generic function that takes this array, a criterion , and returns a new array containing only the products that match the given criterion and value. Use a generic type parameter in the function signature to ensure type safety.
 */

interface Product {
    id: number,
    name: string,
    price: number,
    category: string
}


const Products: Product[] = [
    {
        id: 1,
        name: "Cargo Pant",
        price: 3200,
        category: 'Cloth'
    },
    {
        id: 2,
        name: "Sneaker",
        price: 4500,
        category: 'Shoes'
    },
    {
        id: 3,
        name: "T-shirt",
        price: 600,
        category: 'Cloth'
    },
    {
        id: 4,
        name: "Trouser",
        price: 700,
        category: 'Cloth'
    },
    {
        id: 5,
        name: "Shampoo",
        price: 1200,
        category: 'cosmetics'
    },
]



const SearchProduct = <T>(ProductsArr: T[], criteria: keyof T, value: string | number): T[] => {
    const foundproducts = ProductsArr.filter((item) => item[criteria] === value)
    return foundproducts
}

console.log(SearchProduct<Product>(Products, "name", "Trouser"));