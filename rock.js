const options = ['rock', 'paper', 'scissors'];

const computerOption = (arr) => {
    let choice = arr[Math.floor(Math.random() * arr.length)];
    return choice;
};

const findWinner = (player, computer) => {
    const play = player.slice(0, 1).toUpperCase() + player.slice(1, player.length);
    const comp = computer.slice(0, 1).toUpperCase() + computer.slice(1, computer.length);

    if (player === computer) {
        return `It's a tie!`
    } else if (player === 'rock' && computer === 'paper' ||
            player === 'paper' && computer === 'scissors' ||
            player === 'scissors' && computer === 'rock') {
                return `You lose! ${comp} beats ${play}`;
    } else {
        return `You win! ${play} beats ${comp}`;
    }

};

console.log('Welcome to a game of Rock, Paper, Scissors!' + '\n');

let userScore = 0;
let computerScore = 0;
let rounds = 5;

const playGame = () => {
    for (let roundNumber = 1; roundNumber <= rounds; roundNumber++) {
        let playerOption = prompt('Choose one of the following: Rock, Paper, or Scissors: ').toLowerCase();
    
        while (playerOption !== 'rock' && playerOption !== 'paper' && playerOption !== 'scissors') {
            console.log('Invalid entry. Check the options and try again!' + '\n');

            playerOption = prompt('Choose one of the following: Rock, Paper, or Scissors: ')
        }

        const playerChoice = playerOption;
        console.log(`Player chose: ${playerChoice}`);

        const computerChoice = computerOption(options);
        console.log(`Computer chose: ${computerChoice}`);

        const result = findWinner(playerChoice, computerChoice);
        console.log(result);

        if (result.includes('You lose!')) {
            computerScore++;
            console.log(`Score Board: Player - ${userScore}, Computer - ${computerScore}` + `\n`);
        } else if (result.includes('You win!')) {
            userScore++;
            console.log(`Score Board: Player - ${userScore}, Computer - ${computerScore}` + `\n`);
        } else {
            console.log(`Score Board: Player - ${userScore}, Computer - ${computerScore}` + `\n`);
        }
    }

    console.log('Game Over!')
    if (computerScore > userScore) {
        console.log('Oops! You lost the game to Computer.');
    } else if (userScore > computerScore) {
        console.log('Congratulations! You beat Computer!');
    } else {
        console.log('It\'s a tie. Try again and see if you can beat Computer.')
    }
};

playGame();