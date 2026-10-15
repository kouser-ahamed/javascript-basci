let str = "Kouser ";
let str1 = " kouser";

console.log(str.toLowerCase().trim() === str1.toLowerCase().trim());


let bd = " I Love Bangladesh";

console.log(bd.slice(3, 7));


let new1 = str.concat(str1);
console.log(new1);


// console.log(str1.replace("Kouser", "Ahamed"));

let new2 = str1.replace("kouser", "Ahamed");

console.log(str.concat(new2));


let new3 = bd.split(" ").reverse().join(" ");
console.log(new3);


let travel = "We Love to travel and watch movies";


let count = 0;

for (let i = 0; i < travel.length; i++){

    let letter = travel[i];
    if(letter.toLowerCase() == "o"){
        count += 1;
    }
}
console.log(count);




