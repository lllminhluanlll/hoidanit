console.log("video23")

const fullName = "Hml";
const birthYear = 2002;
const isStudent = true

const today = new Date();
const currentYear = today.getFullYear();
console.log(currentYear, typeof currentYear) //kiem tra kieu datatype cua currenYear

console.log(`Ten: ${fullName}
Tuoi: ${currentYear - birthYear}
Sinh vien: ${isStudent}`)