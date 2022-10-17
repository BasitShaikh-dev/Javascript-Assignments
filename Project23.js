/*

More Conditional Tests: You don’t have to limit the number of tests you create to 10.
If you want to try more comparisons, write more tests.
Have at least one True and one False result for each of the following:

• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than,
greater than or equal to, and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array
*/

let car = ["Porche","Mercedes","Bentley","Audi"];
let model = 1996;
let color = 'red';
let cc = "3000";

console.log(car.length == 4);

console.log(car.length == 4 || car[3] == "Bentley");
console.log(car.length == 4 && car[3] == "Bentley");
console.log(car.length == 4 && car[3] == "Audi" && model === 1996 || color == red);
console.log(car.length == 4 && car[3] == "Audi" && model === "1996" && cc >= 1994);
console.log(car.length == 4 && car[3] == "Audi" && model === 1996 && cc >= "1994");

