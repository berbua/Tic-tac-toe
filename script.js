const gameBoard = (() => {
  //module
  let boardArray = ["", "", "", "", "", "", "", "", ""];
  const boardTiles = document.querySelectorAll(".tile");

  const render = () => {
    boardTiles.forEach(tile => {
      tile.innerHTML = boardArray[tile.id];
    });
  };
  render();

  //clear
  const clear = () => {
    boardArray = ["", "", "", "", "", "", "", "", ""];
    render();
    console.log(boardArray);
  };
  //clear assignment to button
  const clearGame = () => {
    const clearButton = document.getElementById("clear");
    clearButton.addEventListener("click", function() {
      gameBoard.clear();
    });
  };
  clearGame();

  //return object
  return {
    boardArray,
    boardTiles,
    render,
    clear
  };
})();

const gameController = (() => {
  const boardTiles = document.querySelectorAll(".tile");
  let computerScore = 0;
  function computerPlay() {
    //pick random index
    let index;
    const getComputerChoiceIndex = () => {
      index = Math.floor(Math.random() * gameBoard.boardArray.length);
      console.log(index);
      return index;
    };
    //check if tile is empty
    if (gameBoard.boardArray[index] === "") {
      gameBoard.boardArray[index] = "O";
      gameBoard.render();
    } else {
      while (true) {
        getComputerChoiceIndex();
        if (gameBoard.boardArray[index] === "") {
          gameBoard.boardArray[index] = "O";
          gameBoard.render();
          console.log(index);
          break;
        } else continue;
      }
    }
  }

  //check result

  function checkResult() {
    switch (true) {
      case gameBoard.boardArray[0] === "X" &&
        gameBoard.boardArray[1] === "X" &&
        gameBoard.boardArray[2] === "X":
      case gameBoard.boardArray[3] === "X" &&
        gameBoard.boardArray[4] === "X" &&
        gameBoard.boardArray[5] === "X":
      case gameBoard.boardArray[6] === "X" &&
        gameBoard.boardArray[7] === "X" &&
        gameBoard.boardArray[8] === "X":
      case gameBoard.boardArray[0] === "X" &&
        gameBoard.boardArray[4] === "X" &&
        gameBoard.boardArray[8] === "X":
      case gameBoard.boardArray[2] === "X" &&
        gameBoard.boardArray[4] === "X" &&
        gameBoard.boardArray[6] === "X":
        window.alert("User won!");
        break;
      case gameBoard.boardArray[0] === "O" &&
        gameBoard.boardArray[1] === "O" &&
        gameBoard.boardArray[2] === "O":
      case gameBoard.boardArray[3] === "O" &&
        gameBoard.boardArray[4] === "O" &&
        gameBoard.boardArray[5] === "O":
      case gameBoard.boardArray[6] === "O" &&
        gameBoard.boardArray[7] === "O" &&
        gameBoard.boardArray[8] === "O":
      case gameBoard.boardArray[0] === "O" &&
        gameBoard.boardArray[4] === "O" &&
        gameBoard.boardArray[8] === "O":
      case gameBoard.boardArray[2] === "O" &&
        gameBoard.boardArray[4] === "O" &&
        gameBoard.boardArray[6] === "O":
        window.alert("Computer won!");
        break;
    }
  }

  let userPlay = () => {
    boardTiles.forEach(tile => {
      tile.addEventListener("click", function() {
        if (this.innerHTML === "") {
          this.innerHTML = "X";
          gameBoard.boardArray[this.id] = "X";
          setTimeout(computerPlay, 750);
          setTimeout(checkResult, 750);
        } else {
          window.alert("Please select a free field");
        }
      });
    });
  };
  userPlay();
  return {
    userPlay
  };
})();

//players
const playerFactory = (name => {
  //factory
  let userName;
  let score;
  let getUserName = () => {
    const startButton = document.getElementById("start");
    const playerNameDisplay = document.getElementById("playerNameDisplay");
    startButton.addEventListener("click", function() {
      gameBoard.clear();
      userName = window.prompt("Please enter your name");
      playerNameDisplay.innerHTML = userName;
    });
  };
  getUserName();
  //return object
  return {
    userName: this.userName,
    score: this.score
  };
})();
