/*Question no 42 : Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name.
Call show_magicians() to see that the list has actually been modified. */
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
// Call make_great to modify the magician names
let greatMagicians = make_great(magicianNames);
// Call show_magicians to see the modified list
show_magicians(greatMagicians);
export {};
