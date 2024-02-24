/*Question no 21 : They think of something you could store in a TypeScript Object. Write a program that 
creates Objects containing these items.*/


// Array of country objects
let countries: { name: string; capital: string; population: number; currency: string }[] = [
    { name: "USA", capital: "Washington, D.C.", population: 331000000, currency: "US Dollar" },
    { name: "Japan", capital: "Tokyo", population: 126500000, currency: "Japanese Yen" },
    { name: "France", capital: "Paris", population: 67000000, currency: "Euro" },
    { name: "Brazil", capital: "Brasília", population: 213993437, currency: "Brazilian Real" },
    { name: "Australia", capital: "Canberra", population: 25700000, currency: "Australian Dollar" },
];

// Print information about each country
countries.forEach(country => console.log(`Country: ${country.name}, Capital: ${country.capital}, Population: ${country.population}, Currency: ${country.currency}`));
