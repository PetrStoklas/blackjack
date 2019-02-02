/*
 * Generates a random integer from min to max.
 */
function randint(min, max) {
  return Math.round(min + Math.random() * (max - min));
}

/*
 * The deck of cards to deal from.
 */
class Deck {
  constructor() {
    this.cards = [
      new Card('ace', 'clubs'),
      new Card('2', 'clubs'),
      new Card('3', 'clubs'),
      new Card('4', 'clubs'),
      new Card('5', 'clubs'),
      new Card('6', 'clubs'),
      new Card('7', 'clubs'),
      new Card('8', 'clubs'),
      new Card('9', 'clubs'),
      new Card('10', 'clubs'),
      new Card('jack', 'clubs'),
      new Card('queen', 'clubs'),
      new Card('king', 'clubs'),
      new Card('ace', 'hearts'),
      new Card('2', 'hearts'),
      new Card('3', 'hearts'),
      new Card('4', 'hearts'),
      new Card('5', 'hearts'),
      new Card('6', 'hearts'),
      new Card('7', 'hearts'),
      new Card('8', 'hearts'),
      new Card('9', 'hearts'),
      new Card('10', 'hearts'),
      new Card('jack', 'hearts'),
      new Card('queen', 'hearts'),
      new Card('king', 'hearts'),
      new Card('ace', 'spades'),
      new Card('2', 'spades'),
      new Card('3', 'spades'),
      new Card('4', 'spades'),
      new Card('5', 'spades'),
      new Card('6', 'spades'),
      new Card('7', 'spades'),
      new Card('8', 'spades'),
      new Card('9', 'spades'),
      new Card('10', 'spades'),
      new Card('jack', 'spades'),
      new Card('queen', 'spades'),
      new Card('king', 'spades'),
      new Card('ace', 'diamonds'),
      new Card('2', 'diamonds'),
      new Card('3', 'diamonds'),
      new Card('4', 'diamonds'),
      new Card('5', 'diamonds'),
      new Card('6', 'diamonds'),
      new Card('7', 'diamonds'),
      new Card('8', 'diamonds'),
      new Card('9', 'diamonds'),
      new Card('10', 'diamonds'),
      new Card('jack', 'diamonds'),
      new Card('queen', 'diamonds'),
      new Card('king', 'diamonds'),
    ]

    // this.index = 0;
    this.player;
    this.dealer;
  }

  /*
   * Fisher–Yates shuffle of the cards in the deck.
   */
  shuffle() {
    for(let i = 0; i < this.cards.length - 1; i++) {
      let j = randint(i, this.cards.length - 1);
      let swap = this.cards[i];
      this.cards[i] = this.cards[j];
      this.cards[j] = swap;
    }
  }

  render(){
    // console.log('rendered');
    this.element = document.createElement('div');
    this.element.className = `card face-${this.cards[indexOfCards].rank}-of-${this.cards[indexOfCards].suit}`;
    return this.element;
  }
  
  mount(parent){
    // console.log('start works deck');
    
    parent.appendChild(this.render());
    // this.update();
  }

  update(){
    indexOfCards++;
  }

  cardAnimationPl(cil){
    console.log('animation');
    this.target = cil;
    this.card = document.createElement('div');
    this.card.className = 'card face-revers comming';
    this.card.style.position = 'relative';
    this.target.appendChild(this.card);
    console.log('taddyyyy');
    setTimeout(() => {this.card.className = '.hidden';
  console.log('kurva');}, 3000);
    
  }

  getStart(){
    this.mount(dealerHand);//GIVES FIRST CARD ON TABLE
    this.update();

    this.cardAnimationPl(playerHand);

    setTimeout(() => {
      this.mount(playerHand);
    }, 3000);
    
    setTimeout(() => {
      this.update(playerHand);
    }, 3001)
    
    
    this.reverse = document.createElement('div');//REVERSED CARD ON TABLE
    this.reverse.className = 'card face-revers';
    dealerHand.appendChild(this.reverse);


    setTimeout(() => {
      this.cardAnimationPl(playerHand);
    }, 3002);

    setTimeout(() => {
      this.mount(playerHand);
    }, 6002);//THIRD CARD ON TABLE

    setInterval(() => {
      this.update();
    }, 6003);
    
    
    this.player.score = this.cards[1].getValue() + this.cards[2].getValue();//ADDS PLAYERS SCORE AFTER START
    this.player.update();
    

    this.dealer.score = this.cards[0].getValue();//ADDS CASINOS  PRE-SCORE AFTER START
    this.dealer.updateInfo();
  }


}