var foods = ["zap fan", "kfc", "mcd", "enterprise 4 food court", "maybank", "subway", "starbuck", "murni", "mee soup", "sushi king", "sushi mentai", "old town white coffee", "padi house", "satay house", "sushi zen", "taiwan food", "owls cafe", "tgi friday", "secret recipe", "marry brown", "A&W", "burger king"]

console.log(foods.length)


//when i wrote this code, only god and i know how it work.
//if you try to change the code and failed, add the counter below:
// counter: 23

var chance = 3

function lunchPicker() {
    if (chance !== 0) {
        var randomIndexOfArray = Math.random() * foods.length //0.2288888
        var roundedIndexOfArray = Math.floor(randomIndexOfArray) //23
        document.getElementById("myLunch").innerHTML = foods[roundedIndexOfArray]
    }
    else {
        alert("What is the point of spinning this if you keep spamming")
    }
    chance--
}



var student1 = {
    name: "Jerry", //name can call as "Key" or "property"
    dob: "1990-01-01",
    address: "Lot 2 - 2, Incubator 1, TPM, Bukit Jalil, KL, WP, MY",
    gender: "Male",
    age: 29
}



var myArray = ["item 1", "item 2", "javascript"]

console.log("object: " + student1.name)
console.log("array: " + myArray["0"])

student1.name = "Judai"

console.log("object: " + student1.name)





myArray[2] = "Judai" //wrong

myArray[2] = student1.name

student1.name = myArray[2]

var jerryname = "Jerry"
var jerrydob = "1990-01-01"
var jerrygender = "male"

var jerry = {
    name: "Jerry",
    dob: "1990-01-01",
    gender: "male"
}

showObject(jerry) //called a function, i pass Jerry variable

function showObject(x) { //{ name:"Jerry", dob: "1990-01-01", gender: "male"}
    console.log(x.name)
    if (!x.name) {
        throw "the showObject(obj) function only can accept object parameter"
    }
    console.log(x)
}

var myCanggihObject = {
    name:"sibeh canggih",
    judai: function(){
        console.log("judai has been executed")
    }
}

myCanggihObject.judai()

console.log(Date.now())
console.log(Math.random())

setTimeout(function() { console.log("i have waited 3 second")}, 3000)

var jerryClass = [
    {name:"judai",age:28, class:""},
    {name:"eric",age:34, class:""},
    {name:"awin",age:28, class:""},
    {name:"tammy",age:34, class:""},
    {name:"zhuan",age:28, class:""},
    {name:"chiyan",age:34},
    {name:"szezhen",age:28},
    {name:"ikmal",age:34},
    {name:"carmen",age:28},
    {name:"jerry",age:34},
]

for(var i = 0; i < jerryClass.length ; i++){
    if(i%2 == 0){
        jerryClass[i]["class"] = "webdev-2"
    }
    else{
        jerryClass[i]["class"] = "webdev-1"
    }
     
}

console.log(jerryClass) // every object has   -->>  class: webdev

var newObj = {
    property1:"something 001",
    property2:"something 002",
    property3:"something 003",
    property4:"something 004",
    property5:"something 005",
    property6:"something 006",
    property7:"something 007",
    property8:"something 008",
}

console.log(newObj)

console.log(document.getElementsByTagName("body")[0].childNodes)