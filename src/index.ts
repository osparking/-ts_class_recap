class Player {
  private static numPlayers = 0;
  protected _score: number;

  constructor(
    public lastname: string,
    public firstname: string,
    private _age: number,
  ) {
    Player.numPlayers++;
    this._score = 0;
    this.printPlayernumber();
  }

  public get score(): number {
    return this._score;
  }

  public set score(value: number) {
    if (value < 0) {
      throw new Error("점수는 음수가 불가능합니다.");
    }
    this._score = value;
  }

  get fullname(): string {
    return `${this.lastname} ${this.firstname}`;
  }

  get age() {
    return this._age;
  }

  set age(age: number) {
    if (age < 0) {
      throw new Error("나이는 음수가 불가능합니다.");
    }
    this._age = age;
  }

  private printPlayernumber() {
    console.log("등록 선수 인원: ", Player.numPlayers);
  }
}

class JokerPlayer extends Player {
  public isAdmin: boolean = true;
  constructor(public first: string, public last: string, _age: number) {
    super(last, first, _age);    
    this._score = 999999;
  }
}

const myDog = new Player("성박", "구름이", 5);
console.log("나이: ", myDog.age);
myDog.age = 6;
console.log("나이: ", myDog.age);
const joker = new JokerPlayer("난", "멋져", 64);
