class Player {
  #score = 0;
  numlives = 10;
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.last = lastname;
  }
  getScore() {
    return this.#score;
  }
  taunt() {
    console.log("짠짜라라...");
  }
  looseLife() {
    this.numlives--;
  }
}

const playerSon = new Player("흥민", "손");
playerSon.looseLife();
console.log("흥민 성적: ", playerSon.getScore());

