var ask = confirm('Do you want to play a game?');
var possiblePrize = 100;
var prize = 0;
attempt = 0;
isWon = false;
if (ask === false) {
	alert('You did not become a bilionaire, but can.');
} else {
	while (ask === true) {
		guessNumber = Math.floor(Math.random()*(8-0+1))+0;
		for (var i = 3; i>=attempt; i--){
			if (i === 2) {
	        possiblePrize = possiblePrize / 2;
	      	}
	      	if (i === 1) {
	        possiblePrize = possiblePrize / 2;
	      	}
	      	if (i < 1) {
	        alert('Thank you for your participation. Your prize is: ' + prize);
	        if (confirm('Do you want to play again?') === false) {
	          ask = false;
	          break;
	        } else {
	          prize = 0;
	          attempt = 0;
	          prize = 100;
	          i = 3;
	        }
		}
		var userNumber = parseInt(prompt(`Choose a roulette pocket number from 0 to 8 Attempts left: `+ i + ` Total prize: ` + prize + `
			Possible prize on current attempt: `+ possiblePrize));
		if (i === 3 && ask === guessNumber) {
        alert('Congratulation, you won! Your prize is: ' + (prize = possiblePrize) + '$.');
        isWon = true;
        break;
      } else if (i === 2 && userNumber === guessNumber) {
        alert('Congratulation, you won! Your prize is: ' + (prize = possiblePrize) + '$.');
        isWon = true;
        break;
      } else if (i === 1 && userNumber === guessNumber) {
        alert('Congratulation, you won! Your prize is: ' + (prize = possiblePrize) + '$.');
        isWon = true;
        break;
      }
    }
    if (isWon === true) {
      if (confirm('Do you want to continue?') === true) {
        guessNumber = Math.floor(Math.random() * (12 - 0 + 1)) + 0;
        possiblePrize = possiblePrize * 2;
        for (let i = 3; i >= attempt; i--) {
          if (i === 2) {
            possiblePrize = possiblePrize / 2;
          }
          if (i === 1) {
            possiblePrize = possiblePrize / 2;
          }
          if (i < 1) {
            alert('Thank you for your participation. Your prize is: ' + prize);
            if (confirm('Do you want to play again?') === false) {
              ask = false;
              break;
            } else {
              prize = 0;
              attempt = 0;
              possiblePrize = 100;
              i = 3;
            }
          }
          var userNumber = parseInt(prompt(`Choose a roulette pocket number from 0 to 12 Attempts left: `+ i + ` Total prize: ` + prize + `
				Possible prize on current attempt: `+ possiblePrize));

          if (i === 3 && userNumber === guessNumber) {
            alert('Congratulation, you won! Your prize is: ' + (prize = possiblePrize) + '$.');
            isWon = true;
            ask = false
            break;
          } else if (i === 2 && userNumber === guessNumber) {
            alert('Congratulation, you won! Your prize is: ' + (prize = possiblePrize) + '$.');
            isWon = true;
            ask = false
            break;
          } else if (i === 1 && userNumber === guessNumber) {
            alert('Congratulation, you won! Your prize is: ' + (prize = possiblePrize) + '$.');
            isWon = true;
            ask = false
            break;
          }
        }
      } else {
        alert('Thank you for your participation. Your prize is: ' + prize);
        if (confirm('Do you want to play again?') === false) {
          ask = false;
          break;
        } else {
          prize = 0;
          attempt = 0;
          possiblePrize = 100;
        }
      }
    }
}
}