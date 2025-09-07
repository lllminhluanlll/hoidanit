console.log("video 52")

const elementBtn = document.getElementById("btn");

const elenmentBack = document.getElementById("backBtn");

const elementmyVideo = document.getElementById("myVideo");


elementBtn.addEventListener("click", () => {
    console.log("Hãy click tôi")
    // elementmyVideo.innerText = ("Here were go");
    elementmyVideo.innerHTML = ("<strong>Chào bạn,</strong> <em>học lập trình với hoidanit!</em>");
})

elenmentBack.addEventListener("click", () => {
    elementmyVideo.innerText = ("video 52");
})