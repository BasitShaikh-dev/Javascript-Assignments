/*

Unchanged Magicians: Start with your work from Exercise 40.
Call the function make_great() with a copy of the array of magicians’ names.
Because the original array will be unchanged, return the new array and store it in a separate array.
Call show_magicians() with each array to show that you have one array of
the original names and one array with the Great added to each magician’s name.

*/

let magic = ["Jammu","Umair"];
let greatmagician = [];

function great_magician(){
    let gm = magic.concat(greatmagician);
    
    for(let x in gm){
    console.log("Great Magician "+ gm[x]);
    }

}


function show_magicians(){

    for(let x in magic){
    console.log(magic[x]);
    }
}

//great_magician();
show_magicians();
great_magician();


