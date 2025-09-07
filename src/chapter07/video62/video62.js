console.log("video 62")

// console.log("1")

// setTimeout(() => {
//     console.log("2")
// }, 3000)
// console.log("3")

const myPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("2");
            resolve("hml")
        }, 3000)
    })
}
myPromise();

console.log("1")
myPromise().then(data => {
    console.log("data:", data)
    console.log("3")
})