const car = {
    make: "Hyundai",
    model: "Venue",
    year: "2021"
};

function displayCar() {
    for (const key in car) {
         console.log(`${key} : ${car[key]}`)
    }
};

displayCar();

//OUTPUT: 
// make : Hyundai
// model : Venue
// year : 2021