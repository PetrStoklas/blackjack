let indexOfCards = 0;

const dealerHand = document.querySelector('.dealer-cards');
const playerHand = document.querySelector('.player-cards');


document.addEventListener('DOMContentLoaded', () => {
  const deck = new Deck();
  deck.shuffle();
  const playerOne = new Player('juan');
  const dealer = new Dealer();

  deck.player = playerOne;
  deck.dealer = dealer;
  dealer.pack = deck;
  dealer.opponent = playerOne;
  deck.getStart();

  
  const hitBtn = document.querySelector('.js-hit');
  hitBtn.addEventListener('click', () => { 
    console.log('clicked');
    deck.cardAnimationPl(playerHand);
    console.log('animated');
    setTimeout(() => {
      deck.mount(playerHand);
      playerOne.score += deck.cards[indexOfCards].getValue();    
      playerOne.update();    
    }, 3001)
    deck.update();    
    
  });
  const standBtn = document.querySelector('.js-stand');
  standBtn.addEventListener('click' , ()=> {
    dealer.reverseReverse();
    dealer.drawOrNot();
    dealer.winOrLose();

  })
});
