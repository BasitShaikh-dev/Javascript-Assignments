/*

Sandwiches: Write a function that accepts a array of items a person wants on a sandwich.
The function should have one parameter that collects as many items as the function call provides,
and it should print a summary of the sandwich that is being ordered. Call the function three times,
using a different number of arguments each time.

*/

let order = ["Cheese Sandwich", "Pizza","Burger"];

function get_order(oorder){
    return oorder;
}

for(let x in order){

console.log(get_order(order[x]));

}