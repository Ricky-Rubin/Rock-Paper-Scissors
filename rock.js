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

alert('Welcome to a game of Rock, Paper, Scissors!' + '\n');

let userScore = 0;
let computerScore = 0;
let rounds = 5;

const playGame = () => {
    for (let roundNumber = 1; roundNumber <= rounds; roundNumber++) {
        let playerOption = prompt('Choose one of the following: Rock, Paper, or Scissors: ').toLowerCase();
    
        while (playerOption !== 'rock' && playerOption !== 'paper' && playerOption !== 'scissors') {
            alert('Invalid entry. Check the options and try again!' + '\n');

            playerOption = prompt('Choose one of the following: Rock, Paper, or Scissors: ')
        }

        const playerChoice = playerOption;
        alert(`Player chose: ${playerChoice}`);

        const computerChoice = computerOption(options);
        alert(`Computer chose: ${computerChoice}`);

        const result = findWinner(playerChoice, computerChoice);
        alert(result);

        if (result.includes('You lose!')) {
            computerScore++;
            alert(`Score Board: Player - ${userScore}, Computer - ${computerScore}` + `\n`);
        } else if (result.includes('You win!')) {
            userScore++;
            alert(`Score Board: Player - ${userScore}, Computer - ${computerScore}` + `\n`);
        } else {
            alert(`Score Board: Player - ${userScore}, Computer - ${computerScore}` + `\n`);
        }
    }

    alert('Game Over!')
    if (computerScore > userScore) {
        alert('Oops! You lost the game to Computer.');
    } else if (userScore > computerScore) {
        alert('Congratulations! You beat Computer!');
    } else {
        alert('It\'s a tie. Try again and see if you can beat Computer.')
    }
};

playGame();