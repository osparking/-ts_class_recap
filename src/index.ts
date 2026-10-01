function numberIdentity(num: number): number {
  return num;
}

function stringIdentity(str: string): string {
  return str;
}

function booleanIdentity(bool: boolean): boolean {
  return bool;
}

function identitySloppy(arg: any): any {
  return arg;
}

function identity<T>(argument: T): T {
  return argument;
}

type Doggie = {
  name: string;
  age: number;
  breed: string;
};

console.log("1", identity<number>(1));
console.log("우리 개",
  identity<Doggie>({ name: "구름이", age: 5, breed: "보더믹스" }),
);
