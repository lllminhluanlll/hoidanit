console.log("lab04")

const btnUsername = document.getElementById("username");
const btnPassword = document.getElementById("password");
const btnClick = document.getElementById("click");

btnClick.addEventListener("click", () => {
    const usename = btnUsername.value
    const password = btnPassword.value
    if (usename === "hoidanit@gmail.com" && password === "123456") {
        alert("Đăng nhập thành công")
        window.location.href = "success.html"
    } else {
        alert("Tài khoản hoặc mặc khẩu sai")
        btnUsername.style.borderColor = "red"
        btnPassword.style.borderColor = "red"
    }
})
