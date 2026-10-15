let bike = {
    name: "Yamaha",
    model: "FZ",
    color: "Black",
    digitalMeter: true,
    advantage: ["Good Mileage", "Low Maintenance", "Affordable Price"],

    batttary: {
        type: "Lithium-ion",
        capacity: "12V",
        warranty: "2 years"
    }
}

console.log(bike);

console.log(bike.name);

console.log(bike.batttary);

console.log(bike.batttary.warranty);




console.log("New Practice");



for (let key in bike) {
    console.log(key, "->", bike[key]);  
}



console.log(Object.keys(bike));
console.log(Object.values(bike));