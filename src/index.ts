interface Colorful {
  color: string;
}

class Vehicle implements Colorful {
  constructor(public color: string) {}
}

const myK8 = new Vehicle("네이비");

class Battery implements Colorful {
  constructor(
    public color: string,
    public brand: string,
  ) {}
}

const v12battery = new Battery("진노랑", "아틀라스");