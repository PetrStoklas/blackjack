let indexOfCards = 0;//AFTER getStart()

const dealerHand = document.querySelector('.dealer-cards');
const playerHand = document.querySelector('.player-cards');


document.addEventListener('DOMContentLoaded', () => {
  const deck = new Deck();
  const playerOne = new Player('juan');
  const dealer = new Dealer();

  deck.player = playerOne;
  deck.dealer = dealer;
  dealer.pack = deck;

  // deck.mount();
  // deck.shuffle();
  deck.getStart();

  
  const hitBtn = document.querySelector('.js-hit');
  hitBtn.addEventListener('click', () => { 
    console.log('AFTER FIRST HIT CLICK: ', indexOfCards);
    deck.mount(playerHand);
    console.log('AFTER FIRST HIT MOUNT: ', indexOfCards, 'play score:', playerOne.score);
    playerOne.score += deck.cards[indexOfCards].getValue();
    console.log('AFTER FIRST HIT SCORE ADDITION: ', indexOfCards, ',,,,,,,,,', playerOne.score);
    playerOne.update();
    console.log('AFTER FIRST HIT  PL UPDATE: ', indexOfCards);
    deck.update();
    console.log('AFTER FIRST HIT  DECK UPDATE: ', indexOfCards);
    
    
    // indexOfCards++;
  });
  const standBtn = document.querySelector('.js-stand');
  standBtn.addEventListener('click' , ()=> {
    dealer.reverseReverse();
    // deck.mount(dealerHand);
    // indexOfCards++;
    dealer.drawOrNot();

  })
  // playerOne.update();

  // Create and shuffle a new deck of cards
  console.log(deck);
});

// alert('ahoj');