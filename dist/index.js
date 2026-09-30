"use strict";
class Player {
    constructor(lastname, firstname, age) {
        this.lastname = lastname;
        this.firstname = firstname;
        this.age = age;
        Player.numPlayers++;
        this.printPlayernumber();
    }
    setScore(score) {
        this.age = score;
    }
    printPlayernumber() {
        console.log("등록 선수 인원: ", Player.numPlayers);
    }
}
Player.numPlayers = 0;
const myDog = new Player("성박", "구름이", 5);
console.log("이름: ", myDog.firstname);
