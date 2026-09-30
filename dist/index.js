"use strict";
class Player {
    constructor(lastname, firstname) {
        this.score = 0; // score = 0; // 이것도 가능 형 유추 기능
        this.lastname = lastname;
        this.firstname = firstname;
    }
}
const myDog = new Player("성박", "구름이");
myDog.score = 98;
