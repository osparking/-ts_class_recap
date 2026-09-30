interface Colorful {
  color: string;
}

interface Deliverable {
  deliveryMethod: string;
  requestDelivery():void;
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