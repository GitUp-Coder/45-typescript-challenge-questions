/*Question no 17 : Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

• Print a message to each of the two people still on your list, letting them know they’re still invited.

• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.*/



// Original array of guests to invite to dinner
let guestList: string[] = ["Arslan", "Maryam", "Tahreem", "Mahnoor", "NewGuest1", "NewGuest2", "NewGuest3"];

// Print original invitation messages
guestList.forEach(guest => console.log(`Dear ${guest}, you are invited to dinner.`));

// Guest who can't make it
const guestWhoCantMakeIt: string = "Maryam";
console.log(`Unfortunately, ${guestWhoCantMakeIt} can't make it.`);

// Replace the guest who can't make it
guestList[guestList.indexOf(guestWhoCantMakeIt)] = "Mahnoor";

// Print second set of invitation messages
guestList.forEach(newGuest => console.log(`Dear ${newGuest}, you are invited to dinner.`));

// Inform about a bigger dinner table
console.log("Great news! We found a bigger dinner table!");

// Add new guests
guestList.unshift("NewGuest1");
guestList.splice(Math.ceil(guestList.length / 2), 0, "NewGuest2");
guestList.push("NewGuest3");

// Print new set of invitation messages
guestList.forEach(newGuest => console.log(`Dear ${newGuest}, you are invited to dinner.`));

// Inform that only two people can be invited
console.log("Unfortunately, the new dinner table won't arrive in time, so we can only invite two people.");

// Remove guests one at a time until only two names remain
while (guestList.length > 2) {
    const removedGuest = guestList.pop();
    console.log(`Sorry, ${removedGuest}, we can't invite you to dinner.`);
}

// Print a message to each of the two people still on your list
guestList.forEach(finalGuest => console.log(`Dear ${finalGuest}, you are still invited to dinner.`));

// Remove the last two names from your list
guestList.splice(0, 2);

// Print your list to make sure it's empty
console.log("Guest List:", guestList);
