let student = {id:1, name:"Engin"}

// function save(ogrenci, puan=10)  {
//     console.log(ogrenci.name +" : "+ puan)
// }
// save(student);

function save( puan=10, ogrenci)  {
    //console.log(ogrenci.name +" : "+ puan)
}
//save(undefined,student);

let students=["Engin Demiroğ","Nizes Lore","Sezin Erol"]
//console.log(students)

let students2=[student,{id:2, name:"Nizes"}, "Artvin",{city: "Ankara"}]
//console.log(students2)

let showProducts = function (id,...products) {
    console.log(id)
    console.log(products)
}
//console.log(typeof showProducts)
showProducts(10,["Elma","Armut","Karpuz"])

//rest


//destructuring
let populations = [10000,20000,30000]
let [small, medium, high] = populations
console.log(small)
console.log(medium)
console.log(high)

//spread
let letters = [..."ABC","D",..."EFG","H"] 
console.log(letters)
//(8) ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'] Array olarak yazınca cikti bu sekilde oluyor
console.log(..."ABC","D",..."EFG","H")
// A B C D E F G H       Array olarak degil de ayri ayri string ifadeler olarak yazınca cikti bu sekilde oluyor

//classes 
function Customer(firstName, lastName){ //constructor
    this.firstName = firstName; //public
    this.lastName = lastName;

    var someField = "some value";//private

    this.sendProduct = function () { //operation
        alert("Product sent! ")
    }
}
var engin =  new Customer("Engin","Demiroğ");
//engin.sendProduct()
console.log(engin)

//inheritance
function Person(firstName,lastName) {
    this.firstName=firstName;
    this.lastName=lastName;
}
function  Student(favouriteCourse) {
    this.favouriteCourse=favouriteCourse;
}
Student.prototype=new Person("Nizes","Lore")

var nizes= new Student("coding")
alert (nizes.firstName+" " +nizes.lastName+" loves "+ nizes.favouriteCourse)


//abstract classes
var Person={
    name:"None",
    email:"None",
    sendEmail:function () {
        alert("Mail sent to:"+ this.name+"/"+ this.email)
    }
}
function Customer(name, email) {
    this.name=name;
    this.email=email;
    //other staff
}
function Employee(name,email) {
    this.name=name;
    this.email=email;
    //other staff
}
Customer.prototype= Person;
var someCustomer=new Customer("engin","engin@gmail.com")
someCustomer.sendEmail();

Employee.prototype=Person;
var someEmployee=new Employee("nizes", "nizeslore@gmail.com")
someEmployee.sendEmail()
