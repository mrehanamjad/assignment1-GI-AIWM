// 42. Great Magicians: Start with a copy of your program from Exercise 41. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.

// From Exercise 41:
function show_magicians(array: string[]): void {
  for (const i of array) {
    console.log(i);
  }
}

function make_great(array: string[]): string[] {
  for (let i = 0; i < array.length; i++) {
    array[i] = `the Great ${array[i]}`;
  }
  return array;
}

const Magicians: string[] = [
  "magician 1",
  "magician 2",
  "magician 3",
  "magician 4",
  "magician 5",
  "magician 6",
];
console.log("Before Modification: ");
show_magicians(Magicians);

make_great(Magicians);

console.log("\nAfter Modification: ");
show_magicians(Magicians);
