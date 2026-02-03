const person = {
    firstName: "Igor",
    lastName: "Etkalo",
    age: 40
};
person.email = "test@email.com";
delete person.age;
console.log(person);