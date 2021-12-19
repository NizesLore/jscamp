function addToCart(quantity, productName="elma") {
    console.log("Sepete eklendi :" +productName+quantity)
}
addToCart()
addToCart("yumurta")
addToCart("karpuz")
addToCart(10)


//ME
function asalMi(i =2, i<number, i++) {
    if (number % 2 ==0) {
        findPrime = false;
    }
    if (isPrime) {
        console.log("Sayı asaldır")
    } else {
        console.log("Sayı asal değildir")
    }
}
asalMi(4)

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


// Arrow function
let sayHello = () =>{
    console.log("Hello world !")
}
sayHello()

let sayHello2 = function () {
    console.log("Hello world2 !")
}
sayHello2()

let product1 = {productName:"Elma", unitPrice:10,quantity:5}

function addToCart3(product) {
    console.log("Ürün :" + product.productName) 
    console.log("Fiyat :" + product.unitPrice) 
    console.log("Adet :" + product.quantity) 
}
addToCart3(product1)

let product2 = {productName:"Armut", unitPrice:20,quantity:10}
let product3 = {productName:"Kiraz", unitPrice:30,quantity:20}
product2 = product3
product2.productName = "KARPUZ"
console.log(product3.productName)

let sayi1 = 10
let sayi2 = 20
sayi1 = sayi2
sayi2 = 100
console.log(sayi1)

function addToCart4(x) {
    console.log(x)
}
let products = [
    {productName:"Elma", unitPrice:20,quantity:10},
    {productName:"Armut", unitPrice:20,quantity:10},
    {productName:"Karpuz", unitPrice:20,quantity:10}
]
addToCart4(products)

//rest
function add(bisey,...numbers) {
    let total = 0
    for (let i = 0; i < numbers.length; i++) {
        total = total + numbers[i]
    }
    console.log(total) 
    console.log(bisey)
}
add(20,30)
add(20,30,40)
add(20,30,40,50)

//spread
let numbers = [30,10,500,600,120]
console.log(...numbers)
console.log(Math.max(...numbers))

//array destructuring
let [icAnadolu,marmara,karadeniz,[icAnadoluSehirleri]] = [
    {name:"İç Anadolu", population :"20M"},
    {name:"Marmara", population :"30M"} ,
    {name:"Karadeniz", population :"10M"},
    [
        ["Ankara","Konya"],
        ["İstanbul","Bursa"],
        ["Sinop","Trabzon"]
    ]
]
console.log(icAnadolu.name)
console.log(icAnadolu.population)
console.log(icAnadoluSehirleri)


//object destructuring
let newProductName, newUnitPrice, newQuantity 
({productName:newProductName, unitPrice:newUnitPrice, quantity:newQuantity } = 
{productName:"Elma", unitPrice:20, quantity:10})

console.log(newProductName)
console.log(newUnitPrice)
console.log(newQuantity)