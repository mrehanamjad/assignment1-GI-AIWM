// 41. Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

const magicians: string[] = [
  "magician 1",
  "magician 2",
  "magician 3",
  "magician 4",
  "magician 5",
  "magician 6",
];

function show_magicians(array:string[]): void {
  for (const i of array) {
    console.log(i);
  }
}

show_magicians(magicians);