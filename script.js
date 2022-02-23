'use strict';

//console.log(document.querySelector('.message').textContent); // with document.querySelector we select html element using classes like we did in css.
// if we want to select with id we use # and id name. And after that with .textContent we can select the text in the html element
/* document.querySelector('.message').textContent = 23;  like this we can change text in the element
    document.querySelector('.quess').value= 23;
    console.log(document.querySelector('.quess').value);  input ise .value kullanmak zorundayız
 */

//ilk parametre event type. click, hover...  ikinci parametre ise fonksiyonun vereceği reaction. ve ikinci argüman olarak fonksiyon vermek zorundayız

let secretNumber = Math.trunc(Math.random() * 20) + 1;
//Math.trunc float kısımdan kurtulmak için. *20 0 dan 19 a kadar random sayı üretmesi için. +1 ile 1 den 20 ye kadar random sayı üretir
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  //we must specify what should happen
  const guess = Number(document.querySelector('.guess').value);
  //inputtan bir şey aldığımız zaman string olarak alırız

  if (!guess) {
    //  input alanı boş bırakıldığı zaman 0 sayılıyor, falsy değer. falsy değer girildiği zaman loopa girebilmesi için !guess
    document.querySelector('.message').textContent = '⛔No number!';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉Correct Number!';
    document.querySelector('.number').textContent = secretNumber;

    //css için .style yazarız ve .değiştirmekistenenözellik
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem'; // bütün atamalar string şeklinde olmak ZORUNDA

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secretNumber ? 'Too high!' : 'Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      console.log(score);
      document.querySelector('.message').textContent = 'You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
    /*   } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      console.log(score);
      document.querySelector('.message').textContent = 'You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      console.log(score);
      document.querySelector('.message').textContent = 'You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }
 */
    /*   if (guess !== secretNumber) {
    let score = document.querySelector('.score').textContent;
    document.querySelector('.score').textContent = score - 1;

    if (Number(score) === 1) {
      document.querySelector('.message').textContent = 'You lost the game!';
    }
  } */
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = secretNumber;

  document.querySelector('.score').textContent = 20;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = ''; //input to empty
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
