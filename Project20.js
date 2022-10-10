/*

They think of something you could store in a JavaScript Object.
Write a program that creates Objects containing these items.

*/

let rivers = ["Indus River", "jhelum River", "Chenab River"];
let mountains = ["Mount Everest", "Aconcagua", "Mount Kilimanjaro"];
let countries = ["Pakistan", "Africa", "Norway"];
let cities = ["Karachi", "Capetown", "Oslo"];
let languages = ["English", "African"];

let obj = {mountain: mountains, river : rivers, country : countries, city : cities, language : languages};


for(let key in obj)
console.log(key + "\n" + obj[key])