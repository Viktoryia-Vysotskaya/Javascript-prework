{
    function playGame(playerInput) {
    clearMessages();

    function getMoveName(argMoveId) {
        if (argMoveId == 1) {
            return 'kamień';
        } else if (argMoveId == 2) {
            return 'papier';
        } else if (argMoveId == 3) {
            return 'nożyce';
        }
        printMessage('Nie znam ruchu o id ' + argMoveId + '.');
        return 'nieznany ruch';
    }


    /*let randomNumber = Math.floor(Math.random() * 3 + 1);*/
    const randomNumber = Math.floor(Math.random() * 3 + 1);

    console.log('Wylosowana liczba to: ' + randomNumber);

    /*let argComputerMove = getMoveName(randomNumber);*/
    const argComputerMove = getMoveName(randomNumber);

    /*if (randomNumber == 1) {
        computerMove = 'kamień';
    } else if (randomNumber == 2) {
        computerMove = 'papier';
    } else if (randomNumber == 3) {
        computerMove = 'nożyce';
    }*/

    printMessage('Mój ruch to: ' + argComputerMove);

    /*let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');*/

    console.log('Gracz wpisał: ' + playerInput);

    /*let argPlayerMove = getMoveName(playerInput);*/
    const argPlayerMove = getMoveName(playerInput);

    /*if (playerInput == '1') {
        playerMove = 'kamień';
    } else if (playerInput == '2') {
        playerMove = 'papier';
    } else if (playerInput == '3') {
        playerMove = 'nożyce';
    }*/

    printMessage('Twój ruch to: ' + argPlayerMove);


    function displayResult(argComputerMove, argPlayerMove) {
        printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
        console.log('ruch komputera:' + argComputerMove, 'ruch gracza:' + argPlayerMove);
        if (argComputerMove == 'kamień' && argPlayerMove == 'papier') {
            printMessage('Ty wygrywasz!');
        } else if (argComputerMove == 'papier' && argPlayerMove == 'nożyce') {
            printMessage('Ty wygrywasz!');
        } else if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień') {
            printMessage('Ty wygrywasz!');
        } else if (argComputerMove == 'kamień' && argPlayerMove == 'nożyce') {
            printMessage('Ty pregrywasz!');
        } else if (argComputerMove == 'papier' && argPlayerMove == 'kamień') {
            printMessage('Ty pregrywasz!');
        } else if (argComputerMove == 'nożyce' && argPlayerMove == 'papier') {
            printMessage('Ty pregrywasz!');
        } else if (argComputerMove == 'papier' && argPlayerMove == 'papier') {
            printMessage('Remis!');
        } else if (argComputerMove == 'nożyce' && argPlayerMove == 'nożyce') {
            printMessage('Remis!');
        } else if (argComputerMove == 'kamień' && argPlayerMove == 'kamień') {
            printMessage('Remis!');
        } else if (argComputerMove == 'kamień' && argPlayerMove == 'nieznany ruch') {
            printMessage('Nieznany ruch!');
        } else if (argComputerMove == 'papier' && argPlayerMove == 'nieznany ruch') {
            printMessage('Nieznany ruch!');
        } else if (argComputerMove == 'nożyce' && argPlayerMove == 'nieznany ruch') {
            printMessage('Nieznany ruch!');

    }
}
    console.log('wynik funkcji:' + displayResult);
    
    displayResult(argComputerMove, argPlayerMove);
    
}


function rockClicked() {
    playGame(1);
}

/*let playRock = document.getElementById('play-rock');*/
const playRock = document.getElementById('play-rock');

playRock.addEventListener('click', rockClicked);


function paperClicked() {
    playGame(2);
}

/*let playPaper = document.getElementById('play-paper');*/
const playPaper = document.getElementById('play-paper');

playPaper.addEventListener('click', paperClicked);


function scissorsClicked() {
    playGame(3);
}

let playScissors = document.getElementById('play-scissors');

playScissors.addEventListener('click', scissorsClicked);

}