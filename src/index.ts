interface Colorful {
  color: string;
}

class Vehicle implements Colorful {
  constructor(public color: string) {}
}

const myK8 = new Vehicle("네이비");
