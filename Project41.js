/*

Great Magicians: Start with a copy of your program from Exercise 39.
Write a function called make_great() that modifies the array of magicians by adding
the phrase the Great to each magician’s name. Call show_magicians() to see that
the list has actually been modified.

*/

let magic = ["Jammu","Umair"];

function show_magicians(){
    return great_magician();
}

function great_magician(){
    
    for(let x in magic){
    console.log("Great Magician "+magic[x]);
    }
    
}

show_magicians();