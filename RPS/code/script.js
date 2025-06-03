// Get references to the buttons for player's choices
let r = document.getElementById("rock");
let p = document.getElementById("paper");
let s = document.getElementById("scissors");

// Get references to the display elements for showing choices and result
const playerChoiceDisplay = document.getElementById("player-choice");
const computerChoiceDisplay = document.getElementById("computer-choice");
const outcomeDisplay = document.getElementById("outcome");

// Numeric options representing Rock(1), Paper(2), Scissors(3)
const options = [1, 2, 3];

// Helper function to convert numeric choice to string
function choiceName(num) {
  if (num === 1) return "Rock";
  if (num === 2) return "Paper";
  if (num === 3) return "Scissors";
}

// Variable to store player's choice
let c_player = 0;

// Event listeners for player buttons
r.addEventListener("click", function () {
  c_player = 1;
  let c_com = options[Math.floor(Math.random() * options.length)];  // Random computer choice
  let val = check_winner(c_player, c_com);                          // Decide winner

  // Update UI with choices and result
  playerChoiceDisplay.textContent = "You chose: Rock";
  computerChoiceDisplay.textContent = `Computer chose: ${choiceName(c_com)}`;
  outcomeDisplay.textContent = `Result: ${val}`;
});

// (Repeat similarly for paper and scissors buttons...)


// Function to decide the winner based on choices
function check_winner(c_player, c_com) {
  if (c_player == c_com) {
    return "tie";
  }
  else if (c_player == 1) {
    return c_com == 2 ? "lose" : "win";
  }
  else if (c_player == 2) {
    return c_com == 1 ? "win" : "lose";
  }
  else if (c_player == 3) {
    return c_com == 2 ? "win" : "lose";
  }
}
