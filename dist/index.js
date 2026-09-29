class Player {
  #score = 0;
  #numlives = 10;
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.last = lastname;
  }
  #secret = "ajskfj$kfvj";
  getScore() {
    return this.#score;
  }
  updateScore(newScore) {
    this.#score = newScore
  }
  taunt() {
    console.log("짠짜라라...");
  }
  looseLife() {
    this.#numlives--;
  }
  #setSecret() {
    this.#secret = "askkfjn@#$12rjf";
  }
  checkSecret(password) {
    if (this.#secret === password) {
        return true;
    }
    return false;
  }
}

const playerSon = new Player("흥민", "손");
playerSon.looseLife();
playerSon.updateScore(28)
console.log("흥민 성적: ", playerSon.checkSecret("ajskfj$kfvj"));

