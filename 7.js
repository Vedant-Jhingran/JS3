const myMap = new Map();

myMap.set("name", "vedant");
myMap.set("age", 30);
myMap.set("email", "vedant@gmail.com");

//************adding user records******************

function setValuesInMap(parameter1, parameter2) {
    myMap.set(parameter1, parameter2);
}

setValuesInMap("nationality", "indian");

console.log(myMap);

// OUTPUT:
// 'name' => 'vedant',
// 'age' => 30,
// 'email' => 'vedant@gmail.com',
// 'nationality' => 'indian'

// *************UPDATING USER RECORD***************

function updateUserRecord(name, age, email) {
    if (myMap.has(email)) {
        let user = myMap.get(email);
        user.name = name;
        user.age = age;
        myMap.set(email, user);
        console.log(`User with email ${email} updated successfully.`);
    } else {
        console.log(`User with email ${email} not found.`);
    }
}

updateUserRecord("vedant", 31, "vedant@gmail.com");

console.log(myMap);


// *************** DELETING USER RECORD*************

myMap.delete("email");

console.log(myMap);