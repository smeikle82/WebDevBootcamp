let guesses = 0;
let gameOver = false;
while(gameOver === false) {
    let secretNumber = Math.floor(Math.random() * 10 + 1);
    let guess = prompt('What number am I thinking of?\nPress q or click cancel to quit');
    if (parseInt(guess) === secretNumber) {
        guesses += 1;
        console.log(`You guessed the right number!\nIt took you ${guesses} number of tries.`);
        gameOver = true;
    }
    if (parseInt(guess) !== secretNumber ){
        guesses += 1;
    }
    if (guess === 'q' || guess === null) {
        console.log(`You are quitting the game.`);
        break;
    }
}