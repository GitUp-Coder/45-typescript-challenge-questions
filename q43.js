/*Question no 43 : Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a
copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it
in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one
 array with the Great added to each magician’s name. */
// Define the show_magicians function
function show_magicians(magicians) {
    for (let magician of magicians) {
        console.log(magician);
    }
}
// Define the make_great function to modify the array of magicians
function make_great(magicians) {
    // Create a new array with modified magician names
    let greatMagicians = [];
    for (let magician of magicians) {
        greatMagicians.push(`${magician} the Great`);
    }
    return greatMagicians;
}
// Create an array of magician's names
let magicianNames = ["David Copperfield", "Houdini", "Derren Brown", "Penn & Teller"];
// Call make_great with a copy of the magician names array
let greatMagicians = make_great([...magicianNames]);
// Call show_magicians with the original and modified arrays
console.log("Original Magicians:");
show_magicians(magicianNames);
console.log("\nGreat Magicians:");
show_magicians(greatMagicians);
export {};
