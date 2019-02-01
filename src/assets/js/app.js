let indexOfCards = 0;

document.addEventListener('DOMContentLoaded', () => {
  const deck = new Deck();
  deck.shuffle();
  // deck.mount();
  const playerOne = new Player('juan');


  const hitBtn = document.querySelector('.js-hit');
  hitBtn.addEventListener('click', () => { 
    deck.mount();
    
    playerOne.score += deck.cards[indexOfCards].getValue();
    playerOne.update();
    indexOfCards++;
  
  });

  // playerOne.update();

  // Create and shuffle a new deck of cards
  console.log(deck);
});

// alert('ahoj');