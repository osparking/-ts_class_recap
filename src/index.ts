class Player {
  private static numPlayers = 0;

  constructor(
    public lastname: string,
    public firstname: string,
    private age: number,
  ) {
    Player.numPlayers++;
    this.printPlayernumber();
  }
  public setScore(score: number) {
    this.age = score;
  }
  private printPlayernumber() {
    console.log("등록 선수 인원: ", Player.numPlayers);
  }
}

const myDog = new Player("성박", "구름이", 5);
console.log("이름: ", myDog.firstname);
