console.log("video 27")

const score = 7;

switch (true) { //true === true thì sẽ xét điều kiện console, nếu xét score thì giá trị trả về true
    case (score >= 8 && score <= 10):
        console.log("Giỏi")
        break;

    case (score >= 6 && score < 8):
        console.log("Khá")
        break;
    case (score >= 4 && score < 6):
        console.log("Trung bình")
        break;

    default:
        console.log("Yếu")

}