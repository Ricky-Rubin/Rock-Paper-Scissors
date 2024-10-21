const rock = document.querySelector('#btn1');
const paper = document.querySelector('#btn2');
const scissors = document.querySelector('#btn3');
const outcome = document.querySelector('#result');

const playScore = document.querySelector('#play_score');
const compScore = document.querySelector('#comp_score');

let play_score = 0;
let comp_score = 0;

playScore.innerHTML = `${play_score}`;
compScore.innerHTML = `${comp_score}`;

const options = ['rock', 'paper', 'scissors'];

const computerOption = (arr) => {
    let choice = arr[Math.floor(Math.random() * arr.length)];
    return choice;
};

const findWinner = (player, computer) => {
    const play = player.slice(0, 1).toUpperCase() + player.slice(1, player.length);
    const comp = computer.slice(0, 1).toUpperCase() + computer.slice(1, computer.length);

    if (player === computer) {
        return `It's a tie!`;
    } else if (player === 'rock' && computer === 'paper' ||
            player === 'paper' && computer === 'scissors' ||
            player === 'scissors' && computer === 'rock') {
                return `You lose! ${comp} beats ${play}`;
    } else {
        return `You win! ${play} beats ${comp}`;
    }

};

let userScore = 0;
let computerScore = 0;
let round = 0;

const playGame = (playerChoice) => {

    const computerChoice = computerOption(options);

    const result = findWinner(playerChoice, computerChoice);

    if (result.includes('You lose!')) {
        computerScore++;
    } else if (result.includes('You win!')) {
        userScore++;
    } else {
        userScore = userScore;
        computerScore = computerScore;
    }
    
    
    round++;
    outcome.innerHTML = `<p>Round ${round}: Player chose ${playerChoice} --- Computer chose ${computerChoice}</p>
                        <p>${result}</p>
                        <p>Score Board: Player - ${userScore}, Computer - ${computerScore}</p>`
    
    if (computerScore === 5 && computerScore > userScore) {
        outcome.innerHTML = `<p>Round ${round}: Player chose ${playerChoice} --- Computer chose ${computerChoice}</p>
                            <p>Game Over!</p>
                            <p>Oops! You got beat by Computer.</p>
                            <p>Player score - ${userScore} : ${computerScore} - Computer score</p>`;

        userScore = 0;
        computerScore = 0;
        round = 0;
    }
    
    if (userScore === 5 && userScore > computerScore) {
        outcome.innerHTML = `<p>Round ${round}: Player chose ${playerChoice} --- Computer chose ${computerChoice}</p>
                            <p>Game Over!</p>
                            <p>Congratulations! You beat Computer.</p>
                            <p>Player score - ${userScore} : ${computerScore} - Computer score</p>`;

        userScore = 0;
        computerScore = 0;
        round = 0;
    } 

    if (outcome.innerHTML.includes('Congratulations')) {
        play_score ++;
        playScore.innerHTML = `${play_score}`
    };

    if (outcome.innerHTML.includes('Oops!')) {
        comp_score++;
        compScore.innerHTML = `${comp_score}`
    }
};

rock.addEventListener('click', () => {
    playGame('rock');
});

paper.addEventListener('click', () => {
    playGame('paper');
});

scissors.addEventListener('click', () => {
    playGame('scissors');
});