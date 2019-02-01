class Dealer{
    constructor(){
        this.name = "Dealer";
        this.score = 0;
    }

    update() {
        this.dealerScore = document.querySelector('.dealer-score');
        this.dealerScore.textContent = `score: ${this.score}`;
    }
}