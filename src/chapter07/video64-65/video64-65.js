console.log("video 64 + 65")

// const a = 10, b = 0;
// console.log(a / b);

const greeting = (name, Callback) => {
    console.log("Xin chao ", name);
    Callback()
}

const hi = () => {
    console.log("Callback")
}
const hello = () => {
    console.log("This is hello...")
}
greeting("hmlne", hello)
greeting("hmlne", hi)