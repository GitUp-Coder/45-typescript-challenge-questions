/*Question no 15 : Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send 
out a new set of invitations. You’ll have to think of someone else to invite.

• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

• Print a second set of invitation messages, one for each person who is still in your list.*/



// Original array of guests to invite to dinner
let guestList: string[] = ["Arslan", "Maryam", "Tahreem"];

//original invitation messages
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

//second set of invitation messages
guestList.forEach(newGuest => {
    console.log(`Dear ${newGuest}, you are invited to dinner. We would be delighted to have your company.`);
});
