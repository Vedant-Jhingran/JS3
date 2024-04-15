let student = {
    name: "Vedant",
    age: "30",
    grade: "A"
};

function numberOfProperties(parameter){
    let keyss = Object.keys(parameter);
    console.log(`Properties are ${keyss}`)
    console.log(`Number of properties are ${keyss.length}`)
};

numberOfProperties(student);