console.log("video 39")

const myClass = ["hml", "Trọng", "Vinh", "Hữu", "Dinh", "Huy mập"]

// console.log(myClass, myClass.length)

// for (let i = 0; i < myClass.length; i++) {
//     console.log("i =", i, "value =", myClass[i])
// }

// console.log("================================")

// for (let i = 1; i <= myClass.length; i++) {
//     console.log("i =", i, "value =", myClass[i - 1])
// }

//for-each
myClass.forEach(function (value, index) {
    console.log("value =", value, "index =", index)
})
console.log("================================")
myClass.forEach((value, index) => {
    console.log("value =", value, "index =", index)
})