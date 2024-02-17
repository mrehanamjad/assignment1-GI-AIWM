// 22. Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.

//Array index error : array index out of range
// this error occurs when  you're trying to access an element at an index that doesn't exist in the array

let cities: string[] = [
  "Karachi",
  "Lahore",
  "Islamabad",
  "Rawalpindi",
  "Faisalabad",
  "Multan",
  "Hyderabad",
  "Quetta",
  "Peshawar",
  "Sialkot",
];

// console.log(cities[14]); //Trying to access an index that is out of bounds: This will produce an array index error

console.log(cities[4]) // error CORRECTED
