class Player {
  private static numPlayers = 0;

  constructor(
    public lastname: string,
    public firstname: string,
    private _age: number,
  ) {
    Player.numPlayers++;
    this.printPlayernumber();
  }

  get fullname(): string {
    return `${this.lastname} ${this.firstname}`;
  }

  get age() {
    return this._age;
  }

  set age(age: number) {
    this._age = age;
  }

  private printPlayernumber() {
    console.log("등록 선수 인원: ", Player.numPlayers);
  }
}

const myDog = new Player("성박", "구름이", 5);
console.log("나이: ", myDog.age);
myDog.age = 6;
console.log("나이: ", myDog.age);
