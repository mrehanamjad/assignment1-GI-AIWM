// 3.Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

let pName: string = "furQAn";

console.log(`uppercase : ${pName.toUpperCase()}`);
console.log(`lowercase : ${pName.toLowerCase()}`);
 
console.log(`titlecase : ${pName[0].toUpperCase() + pName.slice(1).toLowerCase()}`);

