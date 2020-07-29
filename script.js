
window.onload = function() {
  const startPage = document.querySelector('#start_page');//pages befor game starting
  const rulesButton = document.querySelector('#rules_button');//rules button
  const rulesField = document.querySelector('#rules_container');//rules paragraph and x
  const rulesExitButton = document.querySelector('#rc_exit_button');//closing rules (x)
  const newGameButton = document.querySelector('#new_game_button');
  const newGameField = document.querySelector('#new_game_container');//new game page + (x) + rounds 3,5,9
  const newGameExitButton = document.querySelector('#ngcc_exit_button');//(x)
  const myH1 = document.querySelector("h1");

//player option for choose

  rulesButton.addEventListener("click", () => {
    rulesField.style.visibility = "visible";
  });
  rulesExitButton.addEventListener("click", () => {
    rulesField.style.visibility = "hidden"
  });
  newGameButton.addEventListener("click", () => {
    newGameField.style.visibility = 'visible';
    myH1.style.visibility = 'hidden';

  })
  newGameExitButton.addEventListener("click", () => {
    newGameField.style.visibility = 'hidden'

    let inputField = document.querySelector('#ngcc_username');//input your name
    inputField.value = '';
  })

let pbtnContainer = document.getElementById('mg_left_side');//image father left side;
let pngFour = document.getElementById("mg_right_side");
    
    
const startGameButton = document.querySelector('#start_game_button');//start button
const startGame = function() {
   let inputField = document.querySelector('#ngcc_username');//<input> </input>
   var playerName = document.querySelector('#player_name');//<h2>player Name</h2>
   if (inputField.value !== "") {
     playerName.textContent = inputField.value;
   }

  let pbtnContainer = document.getElementById('mg_left_side');//image father left side;
  let pbtns = pbtnContainer.getElementsByClassName('gm_buttons');//img (paper,scisor,rock) left side;
  let cbtnContainer = document.getElementById('mg_right_side');//the same thing but it right side
  let cbtns = cbtnContainer.getElementsByClassName('gm_c_buttons');

  //creating the three game option;
  const ROCK = "ROCK";
  const PAPER = "PAPER";
  const SCISSORS = "SCISSORS";
  
 //score variable to keep track of the scores;
  let roundsCounter = 0;
  let playerScore = 0;
  let computerScore = 0;
  let playerOption;
  let playerChoice;
  let computerChoice;

  
  //element to represent the result in the html/on the screen/with Dom;
  let roundText = document.querySelector('#round_number');
  let leftScoreDisplay = document.querySelector('#mg_c_ls_n');//<h2>0</h2> in left center
  let rightScoreDisplay = document.querySelector('#mg_c_rs_n');//<h2>0</h2> in right center
  let centerDisplay = document.querySelector('#mg_c_c_r_text');//<h2>empty</h2>
  
//making the player and game variable
  function random_choice() {
    let random = Math.floor((Math.random()*3)+1);
    let computerChoice;
    if(random == 1 ) {
      computerChoice = ROCK;
    }
    else if(random == 2) {
      computerChoice = PAPER;
    }
    else if(random == 3) {
      computerChoice = SCISSORS;
    }
    else {
      console.log("ERROR | random_choice");
    }
    return computerChoice;
    ;
  }
  // making the game buttons selectable
  
  for (let i = 0; i < pbtns.length; i++) {
    pbtns[i].addEventListener("click", function() {
      let current = document.getElementsByClassName("select_btn_active");
      if (current.length > 0) {
        current[0].className = current[0].className.replace(" select_btn_active", "");
      }
    this.className += " select_btn_active";
  });}
  

  //the actual game
  
  for (let i = 0; i < pbtns.length; i++) {
     pbtns[i].addEventListener('click', function() {
       playerOption = this.getAttribute('id');

    //assigning player-choice to the clicked button
   
    if (playerOption == 'ROCK_BUTTON') {
      playerChoice = 'ROCK';
    }
    else if (playerOption == 'PAPER_BUTTON') {
      playerChoice = 'PAPER'
    }
    else if (playerOption == 'SCISSORS_BUTTON') {
      playerChoice = 'SCISSORS'
    }

  computerChoice = random_choice();
 if (playerChoice == "ROCK") {
   for (let i = 0; i < pbtns.length; i++) {
      pbtns[i] = pbtns[i].classList.remove('won_btn_active');
      pbtns[i] = pbtns[i].classList.remove('lost_btn_active');
      pbtns[i] = pbtns[i].classList.remove('draw_btn_active');
   }
   for (let i = 0; i < pbtns.length; i++) {
     cbtns[i] = cbtns[i].classList.remove('won_btn_active');
     cbtns[i] = cbtns[i].classList.remove('lost_btn_active');
     cbtns[i] = cbtns[i].classList.remove('draw_btn_active')
   }
   roundText.textContent = "";
   roundText.textContent += roundsCounter + 1;

   if (computerChoice == "ROCK") {
     this.classList.add('draw_btn_active');
     cbtns[0].classList.add('draw_btn_active');
    //adding the score
     playerScore += 0;
     computerScore += 0;
    //clearing the display
     leftScoreDisplay.textContent = '';
     leftScoreDisplay.textContent += playerScore;
     rightScoreDisplay.textContent = '';
     rightScoreDisplay.textContent += computerScore
    //adding the description of the game scence to display the center
     centerDisplay.textContent = '';
     centerDisplay.textContent = 'DRAW';
     
     roundsCounter += 1;

  }
  else if (computerChoice == PAPER) {
    this.classList.add('lost_btn_active');
    cbtns[1].classList.add('won_btn_active');
    //adding the scores
    playerScore += 0;
    computerScore += 1;
    //clearing the display /adding the clear
    leftScoreDisplay.textContent = '';
    leftScoreDisplay.textContent += playerScore;
    rightScoreDisplay.textContent = '';
    rightScoreDisplay.textContent += computerScore;
    //adding the description
    centerDisplay.textContent = '';
    centerDisplay.textContent = 'comp + 1 point';
   
    roundsCounter += 1
  }
  else if (computerChoice == SCISSORS) {
    this.classList.add('won_btn_active');
    cbtns[2].classList.add('lost_btn_active');
    //adding the score
    playerScore += 1;
    computerScore += 0;
    leftScoreDisplay.textContent = '';
    leftScoreDisplay.textContent += playerScore;
    rightScoreDisplay.textContent = '';
    rightScoreDisplay.textContent += computerScore;
  //adding the description
   centerDisplay.textContent = '';
   centerDisplay.textContent = playerName.textContent + ' + 1 point';
  
   roundsCounter += 1
  }
  else {
    console.log('ERROR | player choie = rock')
  }
}
//-----------------------------------------------------------
else if(playerChoice == PAPER) {
  //removing classes from the player buttons
  for(let i = 0; i < pbtns.length; i++) {
    pbtns[i] = pbtns[i].classList.remove('won_btn_active');
    pbtns[i] = pbtns[i].classList.remove('lost_btn_active');
    pbtns[i] = pbtns[i].classList.remove('draw_btn_active');
  }
  //removing classes from the comp buttons
  for(let i = 0; i < pbtns.length; i++) {
    cbtns[i] = cbtns[i].classList.remove('won_btn_active');
    cbtns[i] = cbtns[i].classList.remove('lost_btn_active');
    cbtns[i] = cbtns[i].classList.remove('draw_btn_active');
  }
  //removing the current Text adding the new text to the round title
  roundText.textContent = "";
  roundText.textContent += (roundsCounter + 1);

  //if else for other senarios
  if( computerChoice == ROCK ) {
    //adding appropriate claasses to the selected buttos
    this.classList.add('won_btn_active');
    cbtns[0].classList.add('lost_btn_active');
    //adding the scores
    playerScore += 1;
    computerScore += 0;
    //clearing the display / adding the score
    leftScoreDisplay.textContent = "";
    leftScoreDisplay.textContent += playerScore;
    rightScoreDisplay.textContent = "";
    rightScoreDisplay.textContent += computerScore;
    //adding the description 
    centerDisplay.textContent = "";
    centerDisplay.textContent = playerName.textContent + " + 1 Point ";
    
    roundsCounter += 1;
  }
  else if( computerChoice == PAPER ) {
    this.classList.add('draw_btn_active');
    cbtns[1].classList.add('draw_btn_active');
    //adding the scores
    playerScore += 0;
    computerScore += 0;
    //clearing the display | adding the score
    leftScoreDisplay.textContent = "";
    leftScoreDisplay.textContent += playerScore;
    rightScoreDisplay.textContent = "";
    rightScoreDisplay.textContent += computerScore;
    //adding the description of the game scene to the center to display
    centerDisplay.textContent = "";
    centerDisplay.textContent = "DRAW";
    
    roundsCounter += 1;
  }
  else if(computerChoice == SCISSORS) {
    this.classList.add('lost_btn_active');
    cbtns[2].classList.add('won_btn_active');
    //adding the scores
    playerScore += 0;
    computerScore += 1;
    //clearing the display | adding the score
    leftScoreDisplay.textContent = "";
    leftScoreDisplay.textContent += playerScore;
    rightScoreDisplay.textContent = "";
    rightScoreDisplay.textContent += computerScore;
    //adding the description
    centerDisplay.textContent = "";
    centerDisplay.textContent = "Comp + 1 Point";
    
    roundsCounter += 1;
  }
  else {
    console.log("ERROR | player choie = rock ");
  }
}


//-------------------------------------------------------------
else if(playerChoice == SCISSORS) {
  //removing classses from player buttons
  for(let i = 0; i < pbtns.length; i++) {
    pbtns[i] = pbtns[i].classList.remove('won_btn_active');
    pbtns[i] = pbtns[i].classList.remove('lost_btn_active');
    pbtns[i] = pbtns[i].classList.remove('draw_btn_active');
}
 //removing classes from the computer buttons
 for(let i = 0; i < pbtns.length; i++) {
  cbtns[i] = cbtns[i].classList.remove('won_btn_active');
  cbtns[i] = cbtns[i].classList.remove('lost_btn_active');
  cbtns[i] = cbtns[i].classList.remove('draw_btn_active');
}
  //removing the current Text adding the new text to the round title
  roundText.textContent = "";
  roundText.textContent += (roundsCounter + 1);

  if( computerChoice == ROCK ) {
      //adding appropriate claasses to the selected buttos
      this.classList.add('lost_btn_active');
      cbtns[0].classList.add('won_btn_active');
      //adding the scores
      playerScore += 0;
      computerScore += 1;
      //clearing the display /adding the score
      leftScoreDisplay.textContent = "";
      leftScoreDisplay.textContent += playerScore;
      rightScoreDisplay.textContent = "";
      rightScoreDisplay.textContent += computerScore;
      //adding the description
      centerDisplay.textContent = "";
      centerDisplay.textContent = "Comp + 1 Point";
     
      roundsCounter += 1;
  }
  else if( computerChoice == PAPER ) {
    this.classList.add('won_btn_active');
    cbtns[1].classList.add('lost_btn_active');
    //adding the scores
    playerScore += 1;
    computerScore += 0;
    //clearing the display / adding the score
    leftScoreDisplay.textContent = "";
    leftScoreDisplay.textContent += playerScore;
    rightScoreDisplay.textContent = "";
    rightScoreDisplay.textContent += computerScore;
    //adding the description
    centerDisplay.textContent = "";
    centerDisplay.textContent = playerName.textContent + " 1 Point";
   
    roundsCounter += 1;
  }
  else if(computerChoice == SCISSORS) {
    this.classList.add('draw_btn_active');
    cbtns[2].classList.add('draw_btn_active');
    //adding the scores
    playerScore += 0;
    computerScore += 0;
    //clearing the display / adding the score
    leftScoreDisplay.textContent = "";
    leftScoreDisplay.textContent += playerScore;
    rightScoreDisplay.textContent = "";
    rightScoreDisplay.textContent += computerScore;
    //adding the description
    centerDisplay.textContent = "";
    centerDisplay.textContent = "DRAW";
    
    roundsCounter += 1;
  }
  else {
    console.log("ERROR | player choie = rock ");
  }

}
else {
  console.log("ERROR | PLAYER CHOICES SECTION");
}

const winner = document.querySelector('#the_win');

let inputField = document.querySelector('#ngcc_username');
var playerName2 = document.querySelector('#player_name2');//<h2>player Name</h2>
var roundedCount = document.querySelector('#mg_c_h_rounds_title')

if (playerScore == 3) {
playerName2.textContent = inputField.value || "player one"
}
else if (computerScore < 3) {
  playerName2.textContent = "computer"

}
  //reagain button inside the game

var reagains = document.querySelector("#reagain");
reagains.onclick = function() {
  roundsCounter = 0;
  playerScore = 0;
  computerScore = 0;
  leftScoreDisplay.textContent = 0;
  rightScoreDisplay.textContent = 0;
  centerDisplay.textContent = "";
  roundText.textContent = "";

}

const playAgain = document.querySelector("#game_again");
const hah = document.querySelector("#game_page")
//when reatch 3 its declare the winner / open the wimmer page
setInterval(function () {
if(playerScore >= 3 || computerScore >= 3) {
  roundsCounter = 0;
  playerScore = 0;
  computerScore = 0;
  winner.style.visibility = 'visible';
  pbtnContainer.style.visibility ="hidden";
  pngFour.style.visibility = "hidden";
  roundedCount.style.visibility = "hidden";
  reagains.style.visibility = "hidden";

    
}
},300)
playAgain.onclick = function() {
  roundsCounter = 0;
  playerScore = 0;
  computerScore = 0;
  leftScoreDisplay.textContent = 0;
  rightScoreDisplay.textContent = 0;
  centerDisplay.textContent = "";
  roundText.textContent = "";
  winner.style.visibility = 'hidden';
  hah.style.visibility = 'visible';
  pbtnContainer.style.visibility ="visible";
  pngFour.style.visibility = "visible";
  roundedCount.style.visibility = "visible";
  reagains.style.visibility = "visible";

}

     

})

}
}

  //when clicking the start button it should redirect you and start the game
  startGameButton.addEventListener("click", () => {
    newGameField.style.visibility = "hidden";
    startPage.style.display = "none";
    startGame();
    let inputField = document.querySelector('#ngcc_username');
    
  });

}