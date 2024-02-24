/*Question no 39 : City Names: Write a function called city_country() that takes in the name of a city and its country.
The function should return a string formatted like this:

"Lahore, Pakistan"

Call your function with at least three city-country pairs, and print the value that’s returned. */
// Define the city_country function
function city_country(city, country) {
    return `${city}, ${country}`;
}
// Call the city_country function with three different city-country pairs
let result1 = city_country("Lahore", "Pakistan");
let result2 = city_country("Paris", "France");
let result3 = city_country("New York", "USA");
// Print the values returned by the function
console.log(result1);
console.log(result2);
console.log(result3);
export {};
