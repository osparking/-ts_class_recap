class Player {
    private score: number = 0; // score = 0; // 이것도 가능 형 유추 기능
    private static numPlayers = 0;

    constructor(public lastname: string, public firstname: string) {
        Player.numPlayers++;
        this.printPlayernumber();
    }
    public setScore(score: number) {
        this.score = score
    }
    private printPlayernumber() {
        console.log("등록 선수 인원: ", Player.numPlayers);
    }
}

const myDog = new Player("성박", "구름이");
myDog.setScore(98);
console.log("이름: ", myDog.firstname);