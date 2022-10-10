/*

Think of something you could store in a array.
For example, you could make a list of mountains, rivers, countries, cities, languages, or
anything else you’d like. Write a program that creates a list containing these items.

*/

let river = ["Indus River", "jhelum River", "Chenab River"];
let mountains = ["Mount Everest", "Aconcagua", "Mount Kilimanjaro"];
let countries = ["Pakistan", "Africa", "Norway"];
let cities = ["Karachi", "Capetown", "Oslo"];
let language = ["English", "African"];

let arrsum = countries.concat(cities,river,mountains,language);

for(let i in arrsum){
    console.log(arrsum[i]);
}