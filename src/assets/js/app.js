let indexOfCards = 0;

const dealerHand = document.querySelector('.dealer-cards');
const playerHand = document.querySelector('.player-cards');


document.addEventListener('DOMContentLoaded', () => {
  // Game starts automatically after loaded

  
  const deck = new Deck();
  deck.shuffle();

  //Player is updating his score...if I keep clicking hit button for another card and my score goes over 21 -> the gameState method in players judges if he lost 
  const playerOne = new Player('juan');

  //Dealer is checking his score too....if I click stand button it is his turn to judge who won the game
  const dealer = new Dealer();

  deck.player = playerOne;
  deck.dealer = dealer;
  dealer.pack = deck;
  dealer.opponent = playerOne;

  //renders first cards
  deck.getStart();

  
  const hitBtn = document.querySelector('.js-hit');

  hitBtn.addEventListener('click', () => { // player gets another card...if players score goes over 21 he automatically lost
    deck.cardAnimationPl(playerHand, 'pl');
    setTimeout(() => {
      deck.mount(playerHand);
      playerOne.score += deck.cards[indexOfCards].getValue();    
      playerOne.update();    
    }, 2000)
    deck.update();    
    
  });
  const standBtn = document.querySelector('.js-stand');
  standBtn.addEventListener('click' , ()=> { // player decided to stand -> dealer finishes his turn according to rules and decides who won
    dealer.reverseReverse();
    dealer.drawOrNot();
    dealer.winOrLose();

  })
});
