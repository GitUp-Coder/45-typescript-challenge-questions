/*Question no 6 : Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and
end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once,
so the whitespace around the name is displayed. Then print the name after striping the white spaces.*/
// Store a person's name with whitespace characters
const personNameWithWhitespace = "\t\n   Maryam javed   \t\n";
//name with whitespace
console.log("Name with whitespace:", personNameWithWhitespace);
// Strip whitespace from the name
const strippedName = personNameWithWhitespace.trim();
//stripped name
console.log("Stripped Name:", strippedName);
export {};
