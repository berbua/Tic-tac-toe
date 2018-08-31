const gameBoard = (() => {
  let boardArray = ["", "", "", "", "", "", "", "", ""];
  const boardTiles = document.querySelectorAll(".tile");

  function render() {
    boardTiles.forEach(tile => {
      tile.innerHTML = boardArray[tile.id];
    });
  }
  render();

  //clear board
  function clear() {
    for (let i = 0; i < boardArray.length; i++) {
      boardArray[i] = "";
    }
    render();
  }
  //clear assignment to button
  const clearButton = () => {
    const clearButton = document.getElementById("clear");
    clearButton.addEventListener("click", function() {
      clear();
      player.score = 0;
      document.getElementById("player-score").innerHTML = player.score;
    });
  };
  clearButton();

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
      case gameBoard.boardArray[0] === "X" &&
        gameBoard.boardArray[3] === "X" &&
        gameBoard.boardArray[6] === "X":
      case gameBoard.boardArray[1] === "X" &&
        gameBoard.boardArray[4] === "X" &&
        gameBoard.boardArray[7] === "X":
      case gameBoard.boardArray[2] === "X" &&
        gameBoard.boardArray[5] === "X" &&
        gameBoard.boardArray[8] === "X":
        window.alert(`${player.userName} won!`);
        player.score += 1;
        document.getElementById("player-score").innerHTML = player.score;
        gameBoard.clear();

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
      case gameBoard.boardArray[0] === "O" &&
        gameBoard.boardArray[3] === "O" &&
        gameBoard.boardArray[6] === "O":
      case gameBoard.boardArray[1] === "O" &&
        gameBoard.boardArray[4] === "O" &&
        gameBoard.boardArray[7] === "O":
      case gameBoard.boardArray[2] === "O" &&
        gameBoard.boardArray[5] === "O" &&
        gameBoard.boardArray[8] === "O":
        window.alert("Computer won!");
        computerScore += 1;
        document.getElementById("computer-score").innerHTML = computerScore;
        gameBoard.clear();
        break;
    }
  }

  const userPlay = () => {
    boardTiles.forEach(tile => {
      tile.addEventListener("click", function() {
        if (this.innerHTML === "") {
          this.innerHTML = "X";
          gameBoard.boardArray[this.id] = "X";
          setTimeout(computerPlay, 250);
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
const player = (() => {
  //factory
  const playerNameDisplay = document.getElementById("playerNameDisplay");
  let userName = window.prompt("Please enter your name");
  playerNameDisplay.innerHTML = userName;
  let score = 0;

  //getUserName();
  //return object
  return {
    userName: userName,
    score: score
  };
})();

console.log(player.userName);

//const player1 = playerFactory;

//Player factory - stara
// const playerFactory = (() => {
//   //factory
//   let userName;
//   let score = 0;
//   const getUserName = (() => {
//     const startButton = document.getElementById("start");
//     const playerNameDisplay = document.getElementById("playerNameDisplay");
//     startButton.addEventListener("click", function() {
//       gameBoard.clear();
//       userNameInput = window.prompt("Please enter your name");
//       playerNameDisplay.innerHTML = userNameInput;
//       this.userName = userNameInput;
//     });
//   })();
//   //getUserName();
//   //return object
//   return {
//     userName: this.userNameInput || "Player",
//     score: this.score || 0,
//     getUserName: getUserName
//   };
// })();
