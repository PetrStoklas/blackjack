let indexOfCards = 3;//AFTER getStart()

const dealerHand = document.querySelector('.dealer-cards');
const playerHand = document.querySelector('.player-cards');


document.addEventListener('DOMContentLoaded', () => {
  const deck = new Deck();
  const playerOne = new Player('juan');
  const dealer = new Dealer();

  deck.player = playerOne;
  deck.dealer = dealer;
  // deck.mount();
  deck.shuffle();
  deck.getStart();

  
  const hitBtn = document.querySelector('.js-hit');
  hitBtn.addEventListener('click', () => { 
    deck.mount(playerHand);
    playerOne.score += deck.cards[indexOfCards].getValue();
    playerOne.update();
    
    indexOfCards++;
  
  });

  // playerOne.update();

  // Create and shuffle a new deck of cards
  console.log(deck);
});

// alert('ahoj');