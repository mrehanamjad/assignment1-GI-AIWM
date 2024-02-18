// 43. Unchanged Magicians: Start with your work from Exercise 42. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

// From Exercise 42:
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

const magicians: string[] = [
  "magician 1",
  "magician 2",
  "magician 3",
  "magician 4",
  "magician 5",
  "magician 6",
];

let newMagisions: string[] = make_great([...magicians]);

console.log("Orignal magicians array: ");
show_magicians(magicians);
console.log("The Great magicians array: ");
show_magicians(newMagisions);
