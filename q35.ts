/*Question no 35 : Animals: Think of at least three different animals that have a common characteristic. 
Store the names of these animals in a list, and then use a for loop to print out the name of each animal. 
• Modify your program to print a statement about each animal, such as A dog would make a great pet. 
• Add a line at the end of your program stating what these animals have in common. 
You could print a sentence such as Any of these animals would make a great pet!*/

// Array of animals
let animals: string[] = ["Dog", "Cat", "Rabbit"];

// Print the names of each animal using a for loop
console.log("Animal Names:");
for (let animal of animals) {
    console.log(animal);
}

// Print statements about each animal using a for loop
console.log("\nAnimal Statements:");
for (let animal of animals) {
    console.log(`A ${animal.toLowerCase()} would make a great pet.`);
}

// Print a concluding sentence outside the for loop
console.log("\nAny of these animals would make a great pet!");
