class Dealer{
    constructor(){
        this.name = "Dealer";
        this.score = 0;
        this.pack;
    }

    updateInfo() {
        this.dealerScore = document.querySelector('.dealer-score');
        this.dealerScore.textContent = `score: ${this.score}`;
    }

    reverseReverse(){// getting rid of reverse
        this.reverse = document.querySelector('.face-revers');
        dealerHand.removeChild(this.reverse);
    }
    drawOrNot() {
        while (this.score <= 16) {
            // console.log(this.score);
            // console.log(indexOfCards);
            // console.log(this.pack.cards[indexOfCards+1]);
            this.pack.mount(dealerHand);

            this.score += this.pack.cards[indexOfCards].getValue();
            this.pack.update();
        }
        this.updateInfo();
    }
}