// function addToCart(quantity, productName="elma") {
//     console.log("Sepete eklendi :" +productName+quantity)
// }
// //addToCart()
//addToCart("yumurta")
//addToCart("karpuz")
//addToCart(10)


//ME
// function asalMi(i =2, i<number, i++) {
//     if (number % 2 ==0) {
//         findPrime = false;
//     }
//     if (isPrime) {
//         console.log("Sayı asaldır")
//     } else {
//         console.log("Sayı asal değildir")
//     }
// }
// asalMi(4)

//string, number, boolean types 
var teacher = "Nizes Lore"
teacher=teacher.substr(2,5)
var value = 39
value ="SEZİN"
var teacher2 = teacher
var isItTrue = true
console.log(teacher2,value,isItTrue)

//array
//var teachers = new array ("Sezin Erol","Hande Ece Evrim","Özay Bulut")
var teachers = ["Sezin Erol","Hande Ece Evrim","Özay Bulut"]
teachers[0]= "Engin Demiroğ"

teachers.push("Şefik Doğan")
teachers [teachers.length] = "Yılmaz Yılmaz"
console.log(teachers)


//Dynamic typing
var customer = {id:1, contactName:"Engin Demiroğ"}
customer.country ="Turkey"

customer.sayHello = function () {
    console.log("Hello " + this.contactName)
}
console.log(customer.country)
customer.sayHello()

//if
var date = new Date()
var hour = date.getHours()

if (hour >=5 && hour <= 11) {
    alert ("Good morning!")
} else if(hour >11 && hour < 17) {
    alert ("Good afternoon!")
} else if(hour >= 17 && hour < 23) {
    alert ("Good evening!")
} else{
    alert ("Good night!")
}
//switch
var language = prompt("What is your language?")

switch (language) {
    case "fr":
        alert("French")
        break;
    case "tr":
        alert("Turkish")
        break;
    default:
        alert("English")
        break;
}




