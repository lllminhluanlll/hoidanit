console.log("lab05")



const fetchData = async () => {
    const res = await fetch("http://localhost:8000/users");
    const data = await res.json()
    console.log("User :", data)

    if (data && data.length) {
        data.forEach((user, index) => {
            const tbody = document.querySelector("#users tbody");
            tbody.innerHTML += `
            <tr>
                <td>${user.id}</td>
                <td>${user.name}</td>
                <td>${user.email}</td>
            </tr>
    `
        })
    }
}
fetchData()

