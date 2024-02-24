/*Question no 41 : Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(),
which prints the name of each magician in the array. */
// Define the show_magicians function
function show_magicians(magicians) {
    for (let magician of magicians) {
        console.log(magician);
    }
}
// Create an array of magician's names
let magicianNames = ["David Copperfield", "Houdini", "Derren Brown", "Penn & Teller"];
// Call the show_magicians function to print the names of magicians
show_magicians(magicianNames);
export {};
