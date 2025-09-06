console.log("video 43")

const person = {
    name: "hml",
    age: 23
}
console.log("person before: ", person);
console.log("name: ", person.name);
console.log("age: ", person["age"])

person.address = "Dồng Tháp"
delete person.name
console.log("person after: ", person);
