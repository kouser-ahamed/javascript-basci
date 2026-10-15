// loop" for loop, "while" while loop, "do while" do while loop, "for in" for in loop, "for of" for of loop

 // for loop 

 //for(variable initialization; condition; increment/decrement) {


//     // code to be executed}


for (let i = 0; i <= 50; i=i+1){

    console.log(" " + i + ": " + " I love programming");

}

// while loop

console.log("While Loop");

// let i = 0;

// while (i <= 50) {
//     console.log(" " + i + ": " + " I love programming");
//     i++;
// }


console.log("Do While Loop");

// do while loop

// let i = 0;

// do{
//     console.log(" " + i + ": " + " I love programming");
//     i++;
// } while (i <= 50);


for (let i = 1; i<= 50; i++){
    if (i == 5 ){
      //   break;
      continue;
    }

    console.log(" " + i + ": " + " I love programming");
}