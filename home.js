

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
 function reload (){
    location.reload();
 }

 //4
 var all_buttons = document.getElementsByTagName('button');
 var copyAllButtons = [];
 for (let i=0; i < all_buttons.length; i++){
     copyAllButtons.push(all_buttons[i].classList[1])
 }

 

 function buttonColorChange(buttonThingy){
     if(buttonThingy.value === 'red'){
         buttonsRed();
         } else if (buttonThingy.value === 'green'){
             buttonsGreen();
         } else if (buttonThingy.value === 'reset'){
            buttonsReset();
        } else {
            randomColors();
        }
 }

 function buttonsRed() {
     for (let i=0; i < all_buttons.length; i++){
         all_buttons[i].classList.remove(all_buttons[i].classList[1]);
         all_buttons[i].classList.add('btn-danger');
     }
 }

 function buttonsGreen() {
    for (let i=0; i < all_buttons.length; i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-success');
    }
}

function buttonsReset() {
    for (let i=0; i < all_buttons.length; i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(copyAllButtons[i]);
    }
}

function randomColors() {
    var choice = ['btn-primary', 'btn-danger', 'btn-success', 'btn-warning']
    for (let i=0; i < all_buttons.length; i++){
        var randomNumber = Math.floor(Math.random() * 4)
        all_buttons[i].classList.remove(all_buttons[i].classList[1])
        all_buttons[i].classList.add(choice[randomNumber])
    }
    

}
//5
let blackjackGame = {
    'you': {'scoreSpan': '#your-blackjack-result', 'div': '#you-box', 'score': 0},
    'dealer': {'scoreSpan': '#dealer-blackjack-result', 'div': '#dealer-box', 'score': 0}
}

const YOU = blackjackGame['you']
const DEALER = blackjackGame['dealer']

 const hitSound = new Audio('static/sounds/swish.m4a')

document.querySelector('#blackjack-hit-button').addEventListener('click', blackjackHit);
document.querySelector('#blackjack-deal-button').addEventListener('click', blackjackDeal);

function blackjackHit () {
    showCard(YOU)
    
}


function showCard(activePlayer) {
    let cardImage = document.createElement('img');
    cardImage.src = 'static/img/Q.png';
    document.querySelector(activePlayer['div']).appendChild(cardImage);
    hitSound.play()
}




function blackjackDeal () {
    let youImages = document.querySelector('#you-box').querySelectorAll('img')
    
    console.log(youImages)
    
}