/*Question no 45 : Cars: Write a function that stores information about a car in a Object. The function should always
receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function
with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object
that’s returned to make sure all the information was stored correctly. */
// Define the car_information function
function car_information(manufacturer, model, options) {
    let car = {
        manufacturer: manufacturer,
        model: model,
        ...options
    };
    return car;
}
// Call the car_information function with required information and additional name-value pairs
let carInfo = car_information("Toyota", "Camry", { color: "Blue", feature: "Navigation" });
// Print the Object returned by the function
console.log(carInfo);
export {};
