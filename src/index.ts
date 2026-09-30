class Player {
    public readonly lastname: string;
    public readonly firstname: string;
    private score: number = 0; // score = 0; // 이것도 가능 형 유추 기능
    private fullname: string;
    private static numPlayers = 0;

    constructor(lastname: string, firstname: string) {
        this.lastname = lastname;
        this.firstname = firstname;
        this.fullname = this.lastname + " " + this.firstname;
        Player.numPlayers++;
        this.printPlayernumber();
    }
    public setScore(score: number) {
        this.score = score
    }
    private printPlayernumber() {
        console.log("등록 선수 인원: ", Player.numPlayers);
    }
    public getFullname() {
        return this.fullname;
    }
}

const myDog = new Player("성박", "구름이");
myDog.setScore(98);
console.log("이름: ", myDog.getFullname());