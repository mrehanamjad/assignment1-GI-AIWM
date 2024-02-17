/*
24. More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
    • Tests for equality and inequality with strings
    • Tests using the lower case function
    • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
    • Tests using "and" and "or" operators
    • Test whether an item is in a array
    • Test whether an item is not in a array
 */

//Tests for equality and inequality with strings:
console.log("\nTests for equality and inequality with strings:");
let str: string = "Newton";
console.log("Is str == Newton? I predict True.");
console.log(str == "Newton");
console.log("Is str != Newton? I predict False.");
console.log(str != "Newton");

//Tests using the lower case function:
console.log("\nTests using the lower case function:");
console.log("Is str.toLowerCase() == 'newton'? I predict True.");
console.log(str.toLowerCase() == "newton");

//Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to:
console.log("\nNumerical tests:");
let num: number = 24;
console.log("Is num == 23? I predict False.");
console.log(num == 23);
console.log("Is num != 23? I predict True.");
console.log(num != 23);
console.log("Is num >= 24? I predict True.");
console.log(num >= 23);
console.log("Is num <= 6? I predict False.");
console.log(num <= 6);
console.log("Is num < 100? I predict True.");
console.log(num < 100);
console.log("Is num > 6? I predict True.");
console.log(num > 6);

//Tests using "and" and "or" operators
console.log('\nTests using "and" and "or" operators:');
const age: number = 18;
console.log("Is age < 60 && age > 12? I predict True.");
console.log(age < 60 && age > 12);
console.log("Is age < 10 && age > 12? I predict False.");
console.log(age < 10 && age > 12);
console.log("Is age <= 10 || age >= 12? I predict True.");
console.log(age <= 10 || age >= 12);
console.log("Is age <=10 || age > 92? I predict True.");
console.log(age <= 10 || age >= 12);

//Test whether an item is in a array
console.log("\nTest whether an item is in a array:");
let arr: string[] = ["A", "B", "C"];
console.log("IS 'D' in arr? I predict False");
console.log(arr.includes("D"));
console.log("IS 'B' in arr? I predict True");
console.log(arr.includes("B"));

//Test whether an item is not in a array
console.log("\nTest whether an item is in a array:");
console.log("IS 'D' not in arr? I predict True");
console.log(!arr.includes("D"));
console.log("IS 'A' not in arr? I predict False");
console.log(!arr.includes("A"));
