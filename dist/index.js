class Player {
  score = 0;
  numlives = 10;
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.last = lastname;
  }
  taunt() {
    console.log("짠짜라라...");
  }
}

const playerSon = new Player("흥민", "손");
console.log("축구선수: ", playerSon);
