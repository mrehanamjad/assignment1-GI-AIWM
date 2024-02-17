/*
  16. More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
    • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
    • Add one new guest to the beginning of your array.
    • Add one new guest to the middle of your array.
    • Use append() to add one new guest to the end of your list.
    • Print a new set of invitation messages, one for each person in your list.
*/

//From Exercise 15:
let guestList: string[] = ["Mubin", "Sufyan", "Hasham"];

console.log("I found a bigger dinner table!");
//Add one new guest to the beginning of your array:
guestList.unshift("Asad")
//add one new guest to the end of your list:
guestList.push("Toseef")
//Add one new guest to the middle :
let midOfArray:number = Math.floor(guestList.length/2);
guestList.splice(midOfArray,0,"Moiz")
for (const guest of guestList) {
  console.log(`Hi ${guest}, please join us for dinner tonight!`);
}
