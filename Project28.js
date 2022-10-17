/*

Favorite Fruit: Make a array of your favorite fruits,
and then write a series of independent if statements that check for certain fruits in your array.

• Make a array of your three favorite fruits and call it favorite_fruits.

• Write five if statements. Each should check whether a certain kind of fruit is in your array.
If the fruit is in your array, the if block should print a statement, such as You really like bananas!

*/

let fav_fruit = ["mango","cherry","apple"]; 

// if(fav_fruit = "mango"){
//     console.log("I love Mango");
//     }else if(fav_fruit = "cherry"){
//     console.log("I love Cherry");
//     }else if(fav_fruit = "apple"){
//         console.log("I love Apple");
//     }else{
//     console.log("kuch nhi mila");
// }

for(let i in fav_fruit){
    if(fav_fruit[i] == "mango"){
        console.log("I love Mango");
        }else if(fav_fruit[i] == "cherry"){
        console.log("I love Cherry");
        }else if(fav_fruit[i] == "apple"){
            console.log("I love Apple");
        }else{
        console.log("kuch nhi mila");
    }
}