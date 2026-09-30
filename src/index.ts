class Player {
    public readonly lastname: string;
    public readonly firstname: string;
    public score: number = 0; // score = 0; // 이것도 가능 형 유추 기능

    constructor(lastname: string, firstname: string) {
        this.lastname = lastname;
        this.firstname = firstname;
    }
}

const myDog = new Player("성박", "구름이");
myDog.score = 98;