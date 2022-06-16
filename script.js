var Scores, RoundScores, PlayerActive, Playing;
start();
function start() {
    Scores = [0, 0];
    PlayerActive = 0;
    RoundScores = 0;
    Playing = true;
    
    document.querySelector('.dice').style.display = 'none';

    document.getElementById('totalScore-0').textContent = '0';
    document.getElementById('totalScore-1').textContent = '0';
    document.getElementById('currentScore-0').textContent = '0';
    document.getElementById('currentScore-1').textContent = '0';
    document.getElementById('player-0').textContent = 'Player 1';
    document.getElementById('player-1').textContent = 'Player 2';
    document.querySelector('.player-0-box').classList.remove('winner');
    document.querySelector('.player-1-box').classList.remove('winner');
    document.querySelector('.player-0-box').classList.remove('active');
    document.querySelector('.player-1-box').classList.remove('active');
    document.querySelector('.player-0-box').classList.add('active');
}


function rollDice() {
    if(Playing) {
        var dice = Math.floor(Math.random() * 6) + 1;
        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.png';
        if (dice !== 1) {
            RoundScores += dice;
            document.querySelector('#currentScore-' + PlayerActive).textContent = RoundScores;
        } else {
            nextPlayer();
        }
    }    
}


function holdDice() {
    if (Playing) {
        Scores[PlayerActive] += RoundScores;
        document.querySelector('#totalScore-' + PlayerActive).textContent = Scores[PlayerActive];
        var winningScore = 50;
        if (Scores[PlayerActive] >= winningScore) {
            document.querySelector('#player-' + PlayerActive).textContent = 'Winner!';
            document.getElementById('dice-1').style.display = 'none';
           
        
            document.querySelector('.player-' + PlayerActive + '-box').classList.add('winner');
            document.querySelector('.player-' + PlayerActive + '-box').classList.remove('active');
            Playing = false;
        } else {
            nextPlayer();
        }
    }
}

function nextPlayer() {
    
    PlayerActive === 0 ? PlayerActive = 1 : PlayerActive = 0;
    RoundScores = 0;

    document.getElementById('currentScore-0').textContent = '0';
    document.getElementById('currentScore-1').textContent = '0';

    document.querySelector('.player-0-box').classList.toggle('active');
    document.querySelector('.player-1-box').classList.toggle('active');

    document.querySelector('.dice').style.display = 'none';
}


