"use strict";
class Player {
    constructor(lastname, firstname, _age) {
        this.lastname = lastname;
        this.firstname = firstname;
        this._age = _age;
        Player.numPlayers++;
        this.printPlayernumber();
    }
    get fullname() {
        return `${this.lastname} ${this.firstname}`;
    }
    get age() {
        return this._age;
    }
    set age(age) {
        if (age < 0) {
            throw new Error("나이는 음수가 불가능합니다.");
        }
        this._age = age;
    }
    printPlayernumber() {
        console.log("등록 선수 인원: ", Player.numPlayers);
    }
}
Player.numPlayers = 0;
const myDog = new Player("성박", "구름이", 5);
console.log("나이: ", myDog.age);
myDog.age = 6;
console.log("나이: ", myDog.age);
