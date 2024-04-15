let student = {
    name: "Vedant",
    age: "30",
    grade: "A"
};

function hasProperty(objectName, propertyName) {
    console.log(objectName.hasOwnProperty(propertyName))
}

hasProperty(student, "name");
// OUTPUT: true

hasProperty(student, "email");
// OUTPUT: false

hasProperty(parent, "name");
// OUTPUT: Parent is not defined