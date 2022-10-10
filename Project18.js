/*

Dinner Guests: Working with one of the programs from Exercises 14 through 18,
print a message indicating the number of people you are inviting to dinner

*/

var guest = ["Mansoor", "Latif", "Muneeb", "Hassan", "Yigit"];
guest.unshift("Noorgul");
guest.splice(-2);

for (let i in guest) {
  if (guest[i] == "Latif") {
    guest[i] = "Hamza";
  }
  console.log(guest.length + " are invited");
}
