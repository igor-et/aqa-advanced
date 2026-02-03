const car1 = {
    brand: "audi",
    model: "a7", 
    year: 2020
};

const car2 = {
    brand: "bmw",
    model: "boooomer",
    owner: "xxx"
};
 
const car3 = {
  ...car1,
  ...car2
};
console.log(car3);
