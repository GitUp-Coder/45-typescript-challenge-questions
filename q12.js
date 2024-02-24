/*Question no 12 : Greetings: Start with the array you used in Exercise 11, but instead of just printing each
person’s name,print a message to them. The text of each message should be the same, but each message should be
personalized with the person’s name.*/
// Array of names
const names = ["Arslan", "Maryam", "Tahreem", "Mahnoor", "Tawer", "Arbab"];
// Greet each person with a personalized message
names.forEach(name => {
    console.log(`Hello, ${name}! Have a great day!`);
});
export {};
