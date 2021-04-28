'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

// creating functions to keep the code clean, DRY and scalable
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const displayNumberHTML = function (number) {
  document.querySelector('.number').textContent = number;
};
const displayNumberCSS = function (number) {
  document.querySelector('.number').style.width = number;
};
const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};

// reset button
document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  displayScore(score);
  document.querySelector('body').style.backgroundColor = '#222';
  displayNumberHTML('?');
  displayNumberCSS('15rem');
  displayMessage('Start guessing...');
  document.querySelector('.guess').value = '';
});

// Check if number is correct-button
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // no input
  if (!guess) {
    displayMessage('Please insert number!');

    // when player wins
  } else if (guess === secretNumber) {
    displayMessage('Correct number!');
    displayNumberHTML(secretNumber);

    document.querySelector('body').style.backgroundColor = '#60b347';
    displayNumberCSS('30rem');
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // when guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too high!' : 'Too low');
      score--;
      displayScore(score);
    } else {
      displayMessage('Game over');
      displayScore(0);
    }
  }
});
