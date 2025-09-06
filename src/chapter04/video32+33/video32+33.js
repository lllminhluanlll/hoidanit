console.log("video 32")

// const sum = (a, b, c) => {
//     return a + b + c;
// }
// console.log(sum(1, 2, 3))

let globalVar = "Tôi là biến toàn cục";
function show() {
    console.log(globalVar); // Truy cập được
}
show();
console.log(globalVar); // Truy cập được


function sayHi() {
    let name4 = "hoidanit";
    console.log("Hi " + name4);
    if (true) {
        let x = 10;
        const y = 20;
        console.log(x, y); // ✅ Truy cập được
    }
    console.log(x); // ❌ Lỗi: x is not defined
}
sayHi();
console.log(name4); // ❌ Lỗi: name is not defined

