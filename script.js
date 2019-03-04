var foods = ["zap fan", "kfc", "mcd", "enterprise 4 food court","maybank", "subway", "starbuck", "murni","mee soup", "sushi king", "sushi mentai", "old town white coffee","padi house", "satay house", "sushi zen", "taiwan food", "owls cafe", "tgi friday","secret recipe", "marry brown", "A&W", "burger king"]

console.log(foods.length)


//when i wrote this code, only god and i know how it work.
//if you try to change the code and failed, add the counter below:
// counter: 23

var chance = 3

function lunchPicker(){
    if(chance !== 0){
        var randomIndexOfArray = Math.random()*foods.length //0.2288888
        var roundedIndexOfArray = Math.floor(randomIndexOfArray) //23
        document.getElementById("myLunch").innerHTML = foods[roundedIndexOfArray]
    }
    else{
        alert("What is the point of spinning this if you keep spamming")
    }
    chance--
}

