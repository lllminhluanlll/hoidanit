console.log("video 44")

const sv1 = {
    username: "hml",
    score: 10
}
const sv2 = {
    username: "Trọng",
    score: 7
}
const sv3 = {
    username: "Vinh",
    score: 8
}
const sinhvien = [sv1, sv2, sv3]
console.log("Sinh vien:", sinhvien)
// sinhvien.forEach((item, index) => {
//     console.log("index: ", index, "name: ", item.username)
// })
const person = {
    martphone: "oppo",
    diachi: "Đồng Tháp",
    age: 23,
}
// for (let key in person) {
//     console.log(key, person[key]);
// }

for (let value of Object.values(person)) {
    console.log(value);
}