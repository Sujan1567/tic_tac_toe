let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset-btn");
let newBtn = document.querySelector("#newbtn");
let message = document.querySelector("#msg");
let msgContain = document.querySelector(".msg-container");

console.log(boxes);

//having the variable for tracking the turn of the player.

let turn0 = true;

//Having the array of the winning pattern.
let winPattern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

//adding the eventlistener in each boxes.
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("The box was clicked");
    // box.innerText = "sujan";
    //giving the condition to the player.
    if (turn0 === true) {
      box.innerText = "0";
      //assigning the value false for the turn0.
      turn0 = false;
    } else {
      box.innerText = "x";
      turn0 = true;
    }
    box.disabled = true;
    //having the function for the winner.
    checkWinner();
  });
});

//resetting the game.
const resetGame = () => {
  turn0 = true;
  enableButtons();
  msgContain.classList.add("hide");
};

//disabling the buttons after the winner is found.
const disabledBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

//having the enable boxes when the new game is started.
const enableButtons = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

const showWinner = (winner) => {
  message.innerText = `you are the winner ${winner}`;
  //removing the classlist with the class "hide" for displaying the message.
  msgContain.classList.remove("hide");
  disabledBoxes();
};

const checkWinner = () => {
  //   console.log("hi sujan");
  for (pattern of winPattern) {
    // console.log(pattern[0], pattern[1], pattern[2]);
    let pas1Val = boxes[pattern[0]].innerText;
    let pas2Val = boxes[pattern[1]].innerText;
    let pas3Val = boxes[pattern[2]].innerText;

    //checking that whether passing value is empty or not.
    if (pas1Val != "" && pas2Val != "" && pas3Val != "") {
      if (pas1Val === pas2Val && pas2Val === pas3Val) {
        console.log(`you are winner who put a value ${pas1Val}`);
        showWinner(pas1Val);
      }
    }
  }
};

//adding the function to the new button.
newBtn.addEventListener("click", () => {
  resetGame();
});

//adding the function to the  reset button
reset.addEventListener("click", () => {
  resetGame();
});
