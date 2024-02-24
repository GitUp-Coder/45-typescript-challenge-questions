/*Question no 3 : Name Cases: Store a person’s name in a variable,
 and then print that person’s name in lowercase, uppercase, and titlecase.*/

// Store a person's name in a variable
let personName: string = "Maryam";

//lowercase
console.log("Lowercase:", personName.toLowerCase());

//uppercase
console.log("Uppercase:", personName.toUpperCase());

//titlecase
console.log("Titlecase:", personName.charAt(0).toUpperCase() + personName.slice(1).toLowerCase());
