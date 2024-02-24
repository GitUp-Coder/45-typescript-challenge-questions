/*Question no 19 : Dinner Guests: Working with one of the programs from Exercises 14 through 18,
 print a message indicating the number of people you are inviting to dinner.*/

 // Original array of guests to invite to dinner
let guestList: string[] = ["Arslan", "Maryam", "Tahreem", "Mahnoor", "NewGuest1", "NewGuest2", "NewGuest3"];

// Print the number of people being invited to dinner
console.log(`Number of people invited to dinner: ${guestList.length}`);

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

// Print the number of people being invited to dinner after modifications
console.log(`Number of people invited to dinner: ${guestList.length}`);
