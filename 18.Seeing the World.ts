/* 
18. Seeing the World: Think of at least five places in the world you’d like to visit.
    • Store the locations in a array. Make sure the array is not in alphabetical order.
    • Print your array in its original order.
    • Print your array in alphabetical order without modifying the actual list.
    • Show that your array is still in its original order by printing it.
    • Print your array in reverse alphabetical order without changing the order of the original list.
    • Show that your array is still in its original order by printing it again.
    • Reverse the order of your list. Print the array to show that its order has changed.
    • Reverse the order of your list again. Print the list to show it’s back to its original order.
    • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
    • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
*/

let placeLocations: string[] = [
  "Kyoto, Japan",
  "Eiffel Tower, Paris, France",
  "Great Wall of China, Beijing, China",
  "Burj Khalifa, Dubai, United Arab Emirates",
  "Great Barrier Reef, Australia:",
];

console.log("Array in its orignal order : ", placeLocations);
console.log(
  "Array in alphabetical order without modifying it : ",
  [...placeLocations].sort()
);
console.log("array is still in its original order : ", placeLocations);
console.log(
  "array in reverse alphabetical order without modifying : ",
  [...placeLocations].sort().reverse()
);
console.log("array is still in its original order : ", placeLocations);
placeLocations.reverse();
console.log("array's original order has reversed : ", placeLocations);
placeLocations.reverse();
console.log("array back to its original order : ", placeLocations);
placeLocations.sort();
console.log("Orignal array in alphabetical order : ", placeLocations);
placeLocations.reverse();
console.log("Orignal array in reverse alphabetical order : ", placeLocations);
