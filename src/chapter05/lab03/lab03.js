console.log("video lab03")

const ao1 = {
    name: "T-shirt",
    price: 200,
    inStock: true
}
const ao2 = {
    name: "Thun",
    price: 200,
    inStock: true
}
const ao3 = {
    name: "Somi",
    price: 250,
    inStock: false
}
const ao4 = {
    name: "Hoddie",
    price: 400,
    inStock: false
}
const ao5 = {
    name: "Khoac",
    price: 500,
    inStock: true
}
const product = [ao1, ao2, ao3, ao4, ao5]

//1. In ra tên của sản phẩm đầu tiên
const sp1 = product[0]
console.log("1.Tên của Sản phẩm đầu tiên: ", sp1.name)

//2.Thay đổi giá sản phẩm thứ hai thành 150 và in ra danh sách tất cả sản
ao2.price = 150;
console.log("2.Tất cả sản phẩm:", product)

//3.Thêm một sản phẩm mới vào cuối mảng và in ra danh sách tất cả sản phẩm
product.push({
    name: "Xach nach",
    price: 350,
    inStock: true
})
console.log("3.Tất cả sản phẩm sau khi thêm:", product)

//4.Xoá sản phẩm cuối cùng ra khỏi danh sách và in ra danh sách tất cả sản phẩm
product.pop()
console.log("4.Tất cả sản phẩm sau khi xóa:", product)

//5.Dùng forEach( ) để in ra tất cả tên sản phẩm
product.forEach((item) => {
    console.log("5.Tên sản phẩm: ", item.name)
})

//6.Dùng map( ) để tạo mảng mới chỉ chứa giá sản phẩm.
let giasp = product.map((item) => {
    return item.price
})
console.log("6.Giá sản phẩm: ", giasp)

//7.Dùng filter() để lấy các sản phẩm còn hàng (inStock = true)
let inStocknew = product.filter((item) => {
    return item.inStock === true
})
console.log("7.Các sản phẩm còn hàng:", inStocknew)

//8.dùng for...in để duyệt qua thuộc tính của sản phẩm đầu tiên
for (const key in ao1) {
    console.log(key, ao1[key])
} 