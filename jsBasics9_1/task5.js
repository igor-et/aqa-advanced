const users = [
    {name: "Igor", lastName: "Etkalo", age: 40, email: "igor@com.ua"},
    {name: "Petro", lastName: "Petrov", age: 18, email: "petro@com.ua"},
    {name: "Anna", lastName: "Ivanova", age: 30, email: "anna@com.ua"}
]; 
for (const { name, lastName, age, email } of users) {
  console.log(`${name} ${lastName} is ${age} years old with email ${email}`);
}