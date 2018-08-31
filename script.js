const gameBoard = (() => {
  let boardArray = ["", "", "", "", "", "", "", "", ""];
  const boardTiles = document.querySelectorAll(".tile");

  let animals = false;

  function render() {
    if (animals === "false") {
      boardTiles.forEach(tile => {
        tile.firstElementChild.innerHTML = boardArray[tile.id];
      });
    } else {
    }
  }
  render();

  //clear board
  console.log();
  function clear() {
    if (animals === false) {
      for (let i = 0; i < boardArray.length; i++) {
        boardArray[i] = "";
      }
    } else {
      boardTiles.forEach(tile => {
        tile.firstElementChild.removeChild();
      });
      render();
    }
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

  //Animals Switch
  const animalsButton = document.getElementById("animalsBtn");
  const animalsSwitch = () => {
    animalsButton.addEventListener("click", function() {
      gameBoard.animals = true;
      clear();
      gameBoard;
      boardTiles.forEach(tile => {
        let ico = document.createElement("i");
        tile.firstElementChild.appendChild(ico);
      });
    });
  };
  animalsSwitch();

  //return object
  return {
    animals,
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
    if (gameBoard.animals === "false") {
      if (gameBoard.boardArray[index] === "") {
        gameBoard.boardArray[index] = "O";
        gameBoard.render();
      } else {
        while (true) {
          getComputerChoiceIndex();
          if (gameBoard.boardArray[index] === "") {
            gameBoard.boardArray[index] = "O";
            gameBoard.render();
            break;
          } else continue;
        }
      }
    } else {
      if (gameBoard.boardArray[index] === "") {
        tile.firstElementChild.firstElementChild.classList.add(
          "fas",
          "fa-kiwi-bird"
        );
        gameBoard.boardArray[index] = "O";
      } else {
        while (true) {
          getComputerChoiceIndex();
          if (gameBoard.boardArray[index] === "") {
            gameBoard.boardArray[index] = "O";
            boardTiles[index].firstElementChild.firstElementChild.classList.add(
              "fas",
              "fa-frog"
            );
            break;
          } else continue;
        }
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
        if (gameBoard.animals === false) {
          if (tile.firstElementChild.innerHTML === "") {
            tile.firstElementChild.innerHTML = "X";
            gameBoard.boardArray[this.id] = "X";
            setTimeout(computerPlay, 250);
            setTimeout(checkResult, 750);
          } else {
            window.alert("Please select a free field");
          }
        } else {
          if (gameBoard.boardArray[tile.id] === "") {
            tile.firstElementChild.firstElementChild.classList.add(
              "fas",
              "fa-kiwi-bird"
            );
            gameBoard.boardArray[tile.id] = "X";
            setTimeout(computerPlay, 250);
            setTimeout(checkResult, 750);
          } else {
            window.alert("Please select a free field");
          }
        }
      });
    });
  };
  userPlay();
  return {
    userPlay
  };

  //Add animals feature
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
