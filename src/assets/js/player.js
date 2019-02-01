class Player{
    constructor(name){
        this.name = name;
        this.score = 0;
    }

    update() {
        this.playerScore = document.querySelector('.player-score');
        this.playerScore.textContent = `score: ${this.score}`;
        this.gameState();
    }

    gameState() {
        if (this.score > 21) {
            this.playerScore.textContent = `score: ${this.score} YOU LOSE`;

        } else if (this.score === 21) {
            this.playerScore.textContent = `score: ${this.score} YOU WIN`;

        } 
    }
}