// 19. Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.

// Exercise 14:
let guestList: string[] = ["Mubin", "Ahmed", "Hasham"];

for (const guest of guestList) {
  console.log(`Hi ${guest}, please join us for dinner tonight!`);
}

//message indicating the number of people you are inviting to dinner
console.log(`\n I'm inviting ${guestList.length} people to dinner.`);
