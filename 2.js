let student = {
    name: "Vedant",
    age: "30",
    grade: "F"
};

function upgradeGrade(grade) {
    student.grade = grade;
};

upgradeGrade("A");

console.log(student);

// OUTPUT:
// { name: 'Vedant', age: '30', grade: 'A' }