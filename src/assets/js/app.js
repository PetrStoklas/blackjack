document.addEventListener('DOMContentLoaded', () => {
  const deck = new Deck();
  // deck.mount();
  const playerOne = new Player('juan');


  const hitBtn = document.querySelector('.js-hit');
  hitBtn.addEventListener('click', () => { 
    deck.mount();
    playerOne.update()});

  // playerOne.update();

  // Create and shuffle a new deck of cards
  // deck.shuffle();
  console.log(deck);
});

// alert('ahoj');