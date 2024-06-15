
let a = 10
a = 5
console.log(a);
console.log(typeof(a));

const Student = Object.freeze({
    name : "chandra Kiran",
    age:19,
    cgpa : 8.4
})

console.log(Student["age"])
console.log(Student["cgpa"])
