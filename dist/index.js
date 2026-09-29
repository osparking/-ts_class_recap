class Player {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.last = lastname;
  }
  taunt() {
    console.log("짠짜라라...");
  }
}

const playerSon = new Player("흥민", "손");
console.log("축구선수: ", playerSon.last, playerSon.firstname);

playerSon.taunt();

const playerHodo = new Player("크리스", "호날두");
playerHodo.taunt();
