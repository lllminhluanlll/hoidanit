console.log("video 55")

const elementBtn = document.getElementById("submitBtn")

const elementName = document.getElementById("name")

const sauName = document.getElementById("sauName")

const prevName = localStorage.getItem("hmlne");
if (prevName) {
    sauName.innerHTML = `${prevName}`
}

elementBtn.addEventListener("click", () => {
    // console.log(elementName.value)
    localStorage.setItem("hmlne", elementName.value)
    document.getElementById("xuatName").innerHTML = `${elementName.value}`

})