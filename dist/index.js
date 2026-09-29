class Player {
  static description = "이 게임의 참가자";
  static randomPlayer = () => {
    return new Player("기석", "장");
  };
  #score = 0;
  #numlives = 10;
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.last = lastname;
  }
  #secret = "ajskfj$kfvj";
  get score() {
    return this.#score;
  }

  set score(newScore) {
    if (newScore < 0) {
      throw new Error("스코어는 음수일 수 없습니다.");
    }
    this.#score = newScore;
  }

  get fullName() {
    return `${this.last} ${this.firstname}`;
  }

  set fullName(newName) {
    const [lastname, firstname] = newName.split(" ");
    this.firstname = firstname;
    this.last = lastname;
  }

  updateScore(newScore) {
    this.#score = newScore;
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

class AdminPlayer extends Player {
    isAdmin = true;
}

const admin = new AdminPlayer();

const playerSon = new Player("흥민", "손");
playerSon.looseLife();
playerSon.updateScore(28);
playerSon.score = 100;
console.log(`${playerSon.fullName} 성적: `, playerSon.score);
playerSon.fullName = "남궁 옥분";
