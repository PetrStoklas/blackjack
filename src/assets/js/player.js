class Player{
    constructor(name){
        this.name = name;
        this.score = 0;
    }

    update() {
        const playerScore = document.querySelector('.player-score');
        playerScore.textContent = `score: ${this.score}`;
    }
}