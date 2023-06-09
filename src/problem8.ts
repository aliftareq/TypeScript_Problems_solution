/**
 Create a TypeScript program that declares a function that takes a string parameter with a literal type of "red", "green", or "blue", and an optional boolean parameter. If the boolean parameter is true, log the string parameter in uppercase. If the boolean parameter is false or not provided, log the string parameter in lowercase.

 */

const LogColor = (color: "red" | "green" | "blue", isUpperCase?: boolean): void => {
    const result = isUpperCase ? color.toLocaleUpperCase() : color.toLocaleLowerCase()
    console.log(result);
}

LogColor("red", true)
LogColor("blue")