console.log("video 38")

const names = ["hml", "dtha", "dtq"]
console.log("1 =", names[1])
console.log("2 =", names[2])

names[2] = "bla bla";
console.log("before", names)

names.push(true, 123) //thêm phần tử vào cuối mảng
names.unshift(null) // thêm phần tử vào đầu mảng

names.pop() //xóa phần tử ở cuối mảng
names.shift() //xóa phần tử ở đầu mảng
console.log("after", names)
