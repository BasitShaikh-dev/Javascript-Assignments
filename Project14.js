var guest = ["Haroon", "Latif", "Muneeb", "Hassan", "Yigit"];

for (let i in guest) {
    if (guest[i] == "Latif") {
        guest[i] = "Hamza";
        console.log(guest[i] + " are Invited");
    } else {
      console.log(guest[i] + " are invited");
    }
  }
  