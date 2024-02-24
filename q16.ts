/*Question no 16 : More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to 
invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing
 people that you found a bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. •
 Print a new set of invitation messages, one for each person in your list.*/





// Original array of guests to invite to dinner
let guestList: string[] = ["Arslan", "Maryam", "Tahreem"];

// Print original invitation messages
guestList.forEach(guest => {
    console.log(`Dear ${guest}, you are invited to dinner. We would be delighted to have your company.`);
});

// Guest who can't make it
const guestWhoCantMakeIt: string = "Maryam";
console.log(`Unfortunately, ${guestWhoCantMakeIt} can't make it to the dinner.`);

// Find the index of the guest who can't make it
const indexOfGuestWhoCantMakeIt: number = guestList.indexOf(guestWhoCantMakeIt);

if (indexOfGuestWhoCantMakeIt !== -1) {
    // Replace with the name of the new person you are inviting (in this case, "Mahnoor")
    guestList[indexOfGuestWhoCantMakeIt] = "Mahnoor";
}

// Print second set of invitation messages
guestList.forEach(newGuest => {
    console.log(`Dear ${newGuest}, you are invited to dinner. We would be delighted to have your company.`);
});

// Inform that a bigger dinner table is found
console.log("Great news! We found a bigger dinner table!");

// Add one new guest to the beginning of the array
guestList.unshift("NewGuest1");

// Add one new guest to the middle of the array
guestList.splice(Math.ceil(guestList.length / 2), 0, "NewGuest2");

// Use push() to add one new guest to the end of the list
guestList.push("NewGuest3");

// Print new set of invitation messages
guestList.forEach(newGuest => {
    console.log(`Dear ${newGuest}, you are invited to dinner. We would be delighted to have your company.`);
});
