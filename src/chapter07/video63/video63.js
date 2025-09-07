console.log("video 63")

//fetch => raw data response => object
const hml = fetch("http://localhost:8000/users");

hml.then(res => res.json()).then(data => console.log(data))
