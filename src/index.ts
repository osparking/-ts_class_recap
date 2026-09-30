interface Colorful {
  color: string;
}

interface Deliverable {
  deliveryMethod: string;
  requestDelivery(): void;
}

class Vehicle implements Colorful {
  constructor(public color: string) {}
}

const myK8 = new Vehicle("네이비");

class Battery implements Colorful, Deliverable {
  constructor(
    public color: string,
    public brand: string,
    public deliveryMethod: string,
  ) {}
  requestDelivery(): void {
    console.log("배송요청 처리됨");
  }
}

const v12battery = new Battery("진노랑", "아틀라스", "경동택배");

abstract class Employee {
  constructor(
    public last: string,
    public first: string,
  ) {}
  abstract getPay(): number;
  doSomeTask() {
    console.log("직원이 자기의 직무를 수행한다.");
  }
}

class FulltimeEmployee extends Employee {
  getPay(): number {
    return this.salary;
  }
  constructor(
    public last: string,
    public first: string,
    public salary: number,
  ) {
    super(first, last);
  }
}

class ParttimeEmployee extends Employee {
  private _workhour: number = 0;

  set workhour(hour: number) {
    this._workhour = hour;
  }

  getPay(): number {
    return this.hourpay * this._workhour;
  }

  constructor(
    public last: string,
    public first: string,
    public hourpay: number,
  ) {
    super(first, last);
  }
}

const myself = new ParttimeEmployee("범", "박", 10000)
myself.workhour = 120;