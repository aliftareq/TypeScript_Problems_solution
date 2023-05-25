/*
Create an interface called Person that includes properties for name (string), age (number), and email (string). Then create an array of Person objects and write a function that takes the array and a string email as parameters, and returns the Person object that matches the email or null if no match is found.
*/


interface Person {
    name: string,
    age: number,
    email: string,
}


const Peoples: Array<Person> = [
    { name: 'Alif', age: 23, email: "alif@gmail.com" },
    { name: 'samiya', age: 24, email: "samiya@gmail.com" },
    { name: 'shoaib', age: 17, email: "shoaib@gmail.com" },
    { name: 'sumaiya', age: 18, email: "sumaiya@gmail.com" },
]


const findPeople = (arr: Array<Person>, email: string): Person | null => {

    const result = arr.find(people => people?.email === email)
    if (result === undefined) {
        return null
    }
    else {
        return result
    }
}

console.log(findPeople(Peoples, "alif@gmail.com"));
console.log(findPeople(Peoples, "saniya@gmail.com"));