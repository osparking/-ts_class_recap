class Player {
  constructor() {
    console.log("생성자 실행 중...");
  }
  taunt() {
    console.log("짠짜라라...");
  }
}

const playerSon = new Player();
playerSon.taunt();

const playerHodo = new Player();
playerHodo.taunt();
