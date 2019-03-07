//part 1

var loseCounter = 0
var winCounter = 0
var drawCounter = 0

var countdown3 = document.getElementById("countdown3")
var countdown2 = document.getElementById("countdown2")
var countdown1 = document.getElementById("countdown1")
var result = document.getElementById("result")

var drawElement = document.getElementById("drawCount")
var winElement = document.getElementById("winCount")
var loseElement = document.getElementById("loseCount")

var resultPaper = document.getElementById("result-img-paper")
var resultRock = document.getElementById("result-img-rock")
var resultScissors = document.getElementById("result-img-scissors")

var welcomenote = document.getElementById("welcomenote")



function startGuess(guess) {
  resultPaper.style.display = "none"
  resultRock.style.display = "none"
  resultScissors.style.display = "none"
  welcomenote.style.display = "none"

  result.style.display = "none"
  countdown3.style.display = "block"
  setTimeout(() => {
    countdown3.style.display = "none"
    countdown2.style.display = "block"
  }, 1000)

  setTimeout(() => {
    countdown2.style.display = "none"
    countdown1.style.display = "block"
  }, 2000)

  setTimeout(() => {
    countdown1.style.display = "none"
    userGuess(guess)
  }, 3000)
}

function userGuess(guess) {

  if (guess == "rock" && computerChoice == "rock") {
    drawCounter++
    drawElement.innerHTML = drawCounter
    result.innerHTML = "DRAW"
    result.style.display = "block"
    result.style.color = "black"
    document.getElementById("result-img-" + computerChoice).style.display = "block"

  }
  else if (guess == "rock" && computerChoice == "paper") {
    loseCounter++
    loseElement.innerHTML = loseCounter
    result.innerHTML = "LOSE"
    result.style.display = "block"
    result.style.color = "red"
    document.getElementById("result-img-" + computerChoice).style.display = "block"
  }
  else if (guess == "rock" && computerChoice == "scissors") {
    winCounter++
    winElement.innerHTML = winCounter
    result.innerHTML = "WIN"
    result.style.display = "block"
    result.style.color = "green"
    document.getElementById("result-img-" + computerChoice).style.display = "block"
  }
  else if (guess == "paper" && computerChoice == "rock") {
    winCounter++
    loseElement.innerHTML = winCounter
    result.innerHTML = "WIN"
    result.style.display = "block"
    result.style.color = "green"
    document.getElementById("result-img-" + computerChoice).style.display = "block"
  }
  else if (guess == "paper" && computerChoice == "paper") {
    drawCounter++
    drawElement.innerHTML = drawCounter
    result.innerHTML = "DRAW"
    result.style.display = "block"
    result.style.color = "black"
    document.getElementById("result-img-" + computerChoice).style.display = "block"
  }
  else if (guess == "paper" && computerChoice == "scissors") {
    loseCounter++
    drawElement.innerHTML = loseCounter
    result.innerHTML = "LOSE"
    result.style.display = "block"
    result.style.color = "red"
    document.getElementById("result-img-" + computerChoice).style.display = "block"
  }
  else if (guess == "scissors" && computerChoice == "rock") {
    loseCounter++
    loseElement.innerHTML = loseCounter
    result.innerHTML = "LOSE"
    result.style.display = "block"
    result.style.color = "red"
    document.getElementById("result-img-" + computerChoice).style.display = "block"
  }
  else if (guess == "scissors" && computerChoice == "paper") {
    winCounter++
    winElement.innerHTML = winCounter
    result.innerHTML = "WIN"
    result.style.display = "block"
    result.style.color = "green"
    document.getElementById("result-img-" + computerChoice).style.display = "block"
  }
  else if (guess == "scissors" && computerChoice == "scissors") {
    drawCounter++
    drawElement.innerHTML = drawCounter
    result.innerHTML = "DRAW"
    result.style.display = "block"
    result.style.color = "black"
    document.getElementById("result-img-" + computerChoice).style.display = "block"
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