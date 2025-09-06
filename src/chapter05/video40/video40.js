console.log("video40")

const score = [10, 7, 5, 6, 3];

// score.forEach((value, index) => {
//     console.log("value =", value, "index =", index)
// })

const scorex2 = score.map((value, index) => {
    console.log("value =", value, "index =", index)
    return value * 2;
})
console.log("score =", score)
console.log("scorex2 =", scorex2)