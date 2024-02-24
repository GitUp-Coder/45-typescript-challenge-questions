/*Question no 5 : Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called 
famous_person. Then compose your message and store it in a new variable called message. Print your message.*/


let famous_person :string = "Albert Einstein";
let quote : string = "Life is like riding a bicycle. To keep your balance, you must keep moving.";

let message: string = `${famous_person} ones said : "${quote}"`;
console.log(message);
