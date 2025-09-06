console.log("video 41")

const ages = [20, 15, 42, 11, 23]

const agesx2 = ages.map((item, index) => {
    return item * 2;
})
const agesthan18 = ages.filter((item, index) => {
    return item > 18;
})
console.log("Orginal =", ages);
console.log("agesx2 =", agesx2);
console.log("agesthan18 =", agesthan18);