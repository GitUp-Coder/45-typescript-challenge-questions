/*Question no 14 : Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite?
Make a list that includes at least three people you’d like to invite to dinner. Then use your
list to print a message to each person, inviting them to dinner.(Arslan,Maryam and tahreem)*/
// Array of guests to invite to dinner
const guestList = ["Arslan", "Maryam", "Tahreem"];
//invitation messages
guestList.forEach(guest => {
    console.log(`Dear ${guest}, you are invited to dinner. We would be delighted to have your company.`);
});
export {};
