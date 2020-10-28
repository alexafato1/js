
function ageInDays () {
    let birthYear = prompt('What year were you born ?');
    let Days = (2018 - birthYear ) * 365;
    let h1 = document.createElement('h1');
    let textAnswer = document.createTextNode(`You are  ${Days}  days old`);
    h1.setAttribute('id', 'ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
    
   
}

function reset() {
   document.getElementById('ageInDays').remove() 
}

function generateCat() {
    var image = document.createElement('img');
    var div = document.getElementById('flex-cat-gen')
    image.src = 'https://upload.wikimedia.org/wikipedia/commons/e/ee/Grumpy_Cat_by_Gage_Skidmore.jpg';
    div.appendChild(image)
}

function rpsGame (yourChoice) {
   console.log('Your',yourChoice)
   var humanChoice, botChoice
   humanChoice = yourChoice.id
   botChoice = numberToChoice(randToRpsInt())
   console.log("Comp", botChoice )
  
   result = decideWinner(humanChoice, botChoice);
    message = finalMessage(result)
   console.log(message)

   rpsFrontEnd(yourChoice.id, botChoice, message)
}

function randToRpsInt() {
    return Math.floor(Math.random() * 3);

}

function numberToChoice(number) {
    return ['rock', 'paper', 'scissors'][number]
}

function decideWinner(yourChoice, computerChoice) {
    var rspDatabase = {
        'rock': {'scissors': 1, 'rock': 0.5, 'paper': 0},
        'paper': {'rock': 1, 'papper': 0.5, 'scissors': 0},
        'scissors': {'paper': 1, 'scissors': 0.5, 'rock': 0}

    }

    var yourScore= rspDatabase[yourChoice][computerChoice]
    var computerScore = rspDatabase[computerChoice][yourChoice]
    return [yourScore, computerScore ]
}

function finalMessage ([yourScore, computerScore]){
    if(yourScore === 0){
       return {'message': 'You lost!', 'color': 'red'}
    }
    else if (yourScore === 0.5) {
        return {'message': 'You tied!', 'color': 'yellow'}
    }
    else {
        return { 'message': 'You won!', 'color': 'green'}
    }
}

function rpsFrontEnd (humanImageChoice, botImageChoice, finalMessage) {
     var imageDatabase = {
         'rock': document.getElementById('rock').src,
         'paper': document.getElementById('paper').src,
         'scissors': document.getElementById('scissors').src,
      }

      document.getElementById('rock').remove()
      document.getElementById('paper').remove()
      document.getElementById('scissors').remove()

      var humanDiv = document.createElement('div')
      var botDiv = document.createElement('div')
      var messageDiv = document.createElement('div')

      humanDiv.innerHTML = `<img src= ${imageDatabase[humanImageChoice]} />`

      botDiv.innerHTML = `<img src= ${imageDatabase[botImageChoice]} />`


      messageDiv.innerHTML = `<h1 style='color: ${finalMessage.color} '>${finalMessage.message}</h1>`

      document.getElementById('flex-box-rps-div').appendChild(humanDiv)
      document.getElementById('flex-box-rps-div').appendChild(messageDiv)
      document.getElementById('flex-box-rps-div').appendChild(botDiv)
     

}