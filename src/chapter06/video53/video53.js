console.log("video 53")

const elementBtn = document.getElementById("myBtn")

const elemenBackBtn = document.getElementById("backBtn")

const elementText = document.getElementById("myText")

elementBtn.addEventListener("click", () => {
    console.log("click tao đi");
    elementText.style.color = "pink"
    elementText.style.backgroundColor = "black"
    elementText.classList.add("hml")
})

elemenBackBtn.addEventListener("click", () => {
    elementText.style.color = "black"
    elementText.style.backgroundColor = "unset"
    elementText.classList.remove("hml")
})

