"use strict";
class Player {
    constructor(lastname, firstname) {
        this.lastname = lastname;
        this.firstname = firstname;
        this.score = 0; // score = 0; // 이것도 가능 형 유추 기능
        Player.numPlayers++;
        this.printPlayernumber();
    }
    setScore(score) {
        this.score = score;
    }
    printPlayernumber() {
        console.log("등록 선수 인원: ", Player.numPlayers);
    }
}
Player.numPlayers = 0;
const myDog = new Player("성박", "구름이");
myDog.setScore(98);
console.log("이름: ", myDog.firstname);
