// count wrong guesses
var counter = 0;
// set max guesses
var max = 8;
// count right guesses
var right = 0;

// the hint phrase
var wordHint = '...where it is greater';

var word = [
  'd',
  'e',
  'c',
  'a',
  't',
  'u',
  'r'
]

// set total lives
document.getElementById('totalLives').innerHTML = word.length;

//hint
document.getElementById('hint').addEventListener('click', function(){
  document.getElementById('clue').innerHTML = wordHint;
});

// refresh the page when play again is clicked
document.getElementById('reset').addEventListener('click', function(){
  document.location = '';
});

let letters = document.getElementsByClassName('letter');
let guess = document.getElementsByClassName('guess');

for (let i = 0; i < letters.length; i++) {
  letters[i].addEventListener('click', function(){
    // get letter html element for list of alphabet
    let letter = letters[i];
    // check if letter has class deactivate reduce counter
    if (letter.classList.contains('deactivate')) {
      counter--;
    }
    // get letter text
    let text = letter.innerText;
    // set the letter to not be active
    letter.classList.add('deactivate');

    if (word.indexOf(text) > -1) {
      guess[word.indexOf(text)].innerText = text;
      right++;
    }

    counter++;
    document.getElementById('mylives').innerHTML = counter;
    if (right == word.length) {
      document.getElementById('alphabet').innerHTML = 'WINNER!!!';
      i = letters.length;
    }
    if (counter == max) {
      document.getElementById('alphabet').innerHTML = 'LOSER!!!';
      i = letters.length;
    }
  });
}


    //user can lose when > 6 wrong guesses
