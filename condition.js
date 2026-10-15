// conditional

let result = 3.5;

if (result == 5.0) {
  console.log("Baba Computer Kine Dibe");
} else if (result >= 4.5) {
  console.log("Baba Laptop Kine Dibe Na");
} else if (result >= 4.0) {
  console.log("Baba Mobile Kine Dibe");
} else {
  console.log("Baba Kichu Kine Dibe Na");
}

// problem 2: ATM withdrawal: balance input, withdraw

let balance = 1000;
let withdrawAmount = 500;

if (withdrawAmount <= balance) {
  if (withdrawAmount % 500 === 0) {
    console.log("Withdrawal Successful. Please Collect Your Cash.");
  }
} else {
  console.log("Insufficient Balance. Please Check Your Account.");
}


