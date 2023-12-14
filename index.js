
// This code represents a basic four card guessing game
//The player is asked to guess a randomly generated 
//number within a set number of attempts. 
//window methods are used to collect user input and  provide informations 
 // guiding players toward the correct solution. 








const cards = document.querySelectorAll('.card');

const correctCardIndex = Math.floor(Math.random() * cards.length);

let remainingAttempts = 3;

function checkGuess(clickedIndex) {
    if (remainingAttempts < 0) return;

    if (clickedIndex === correctCardIndex) {
        setTimeout(() => {
            alert("Congratulations! You have the correct card!");
        }, 200);
        endGame();
    } else {
        setTimeout(() => {
            alert("Wrong choice! Please try again.");
        }, 200);

        cards[clickedIndex].style.pointerEvents = 'none';
        remainingAttempts--;

        updateVisualIndication();
    }
}

function updateVisualIndication() {
    const gameContainer = document.getElementById('game-container');

    if (remainingAttempts >= 0) {
        gameContainer.innerHTML += `<p>Remaining attempts: ${remainingAttempts}</p>`;
    } else {
        gameContainer.innerHTML += `<p>Game over! The correct card was at index ${correctCardIndex}.</p>`;
        endGame();
    }
}

function endGame() {
    cards.forEach(card => {
        card.style.pointerEvents = 'none';
    });
}
