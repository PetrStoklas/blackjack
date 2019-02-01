class Player{
    constructor(name){
        this.name = name;
        this.score = 6;
    }

    update() {
        const playerScore = document.querySelector('.player-score');
        playerScore.textContent = `score: ${this.score}`;
    }
}