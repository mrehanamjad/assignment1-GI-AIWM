// 44. Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.

function sandwichSummary(items: string[]) {
  console.log("Your Sandwich has : ");
  items.forEach((item) => console.log("*", item));
}
sandwichSummary(["Cheese"]);
sandwichSummary(["Catchup", "Chicken", "cheese"]);
sandwichSummary(["Catchup", "Egg"]);
