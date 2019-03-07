//part 1

var loseCounter = 0
var winCounter = 0
var drawCounter = 0


var drawElement = document.getElementById("drawCount")
var winElement = document.getElementById("winCount")
var loseElement = document.getElementById("loseCount")

function userStart(guess) {
    //initializing
    var counter = document.getElementsByClassName("counter")[0]
    document.getElementById("botImage").style.display = "none"
    document.getElementById("desc").style.display = "none"

    console.log(counter)

    counter.innerHTML = "3"

    counter.style.display = "block"
    setTimeout(() => {
        counter.innerHTML = "2"
    }, 1000);
    setTimeout(() => {
        counter.innerHTML = "1"
    }, 2000);
    setTimeout(() => {
        counter.style.display = "none"
        userGuess(guess)
    }, 3000);
}



function userGuess(guess) {

    var botPaper = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRQ9MMBsPDNfeVYqMfO4mpKUhSb_OOif483lzuXd8SO6rXVQ905w"
    var botRock = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIzhz6k1mtjUjI3_O445Q2wecEwIK_5_UuCl0xCSdwjXL4xUEN"
    var botScissors = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd98LEAPVyUJ9FviL1yMPC5U9_qr0fNKUtvvvRTO1Nkmrxs4_7"
    
    var botImage = document.getElementById("botResult")
    var description = document.getElementById("desc")

    document.getElementById("botImage").style.display = "block"
    document.getElementById("desc").style.display = "block"

    if (guess == "rock" && computerChoice == "rock") {
        drawCounter++
        drawElement.innerHTML = drawCounter
        botImage.src = botRock
        description.innerHTML = "Draw"
        
    }
    else if (guess == "rock" && computerChoice == "paper") {
        loseCounter++
        loseElement.innerHTML = loseCounter
        botImage.src = botPaper
        description.innerHTML = "Lose"


    }
    else if (guess == "rock" && computerChoice == "scissors") {
        winCounter++
        winElement.innerHTML = winCounter
        botImage.src = botScissors
        description.innerHTML = "Win"

    }
    else if (guess == "paper" && computerChoice == "rock") {
        winCounter++
        loseElement.innerHTML = winCounter
        botImage.src = botRock
        description.innerHTML = "Win"

    }
    else if (guess == "paper" && computerChoice == "paper") {
        drawCounter++
        drawElement.innerHTML = drawCounter
        botImage.src = botPaper
        description.innerHTML = "Draw"

    }
    else if (guess == "paper" && computerChoice == "scissors") {
        loseCounter++
        drawElement.innerHTML = loseCounter
        botImage.src = botScissors
        description.innerHTML = "Lose"

    }
    else if (guess == "scissors" && computerChoice == "rock") {
        loseCounter++
        loseElement.innerHTML = loseCounter
        botImage.src = botRock
        description.innerHTML = "Lose"

    }
    else if (guess == "scissors" && computerChoice == "paper") {
        winCounter++
        winElement.innerHTML = winCounter
        botImage.src = botPaper
        description.innerHTML = "Win"

    }
    else if (guess == "scissors" && computerChoice == "scissors") {
        drawCounter++
        drawElement.innerHTML = drawCounter
        botImage.src = botScissors
        description.innerHTML = "Draw"

    }

    computerChoose()
}

//part 2
var options = ["paper", "scissors", "rock"]
var computerChoice

function computerChoose() {
    var randomNumber = Math.floor(Math.random() * options.length)
    computerChoice = options[randomNumber]
    //alert(computerChoice)
}


computerChoose()