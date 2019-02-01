/*
 * A playing card
 */
class Card {
  constructor(rank, suit) {
    this.rank = rank;
    this.suit = suit;
  }

  getValue(){
    switch (this.rank) {
      case "2":
        return 2;

      case "3":
        return 3;

      case "4":
        return 5;

      case "5":
        return 5;

      case "6":
        return 6;
      case "7":
        return 7;

      case "8":
        return 8;

      case "9":
        return 9;

      case "10":
        return 10;

      case "jack":
        return 10;

      case "queen":
        return 10;

      case "king":
        return 10;

      case "ace":
        return 11;
    }
    //vrati this.value
  }
} 