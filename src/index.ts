// discriminated union types
// interface Cow, Pig, Rooster
// getFarmAnimalSound(animal: FarmAnimal): string {
// name, age, weight, type,
// type FarmAnimal

interface Cow {
  type: "cow";
  name: string;
  age: number;
  weight: number;
}

interface Pig {
  type: "pig";
  name: string;
  age: number;
  weight: number;
}

interface Rooster {
  type: "rooster";
  name: string;
  age: number;
  weight: number;
}

interface Sheep {
  type: "sheep";
  name: string;
  age: number;
  weight: number;
}

type FarmAnimal = Cow | Pig | Rooster | Sheep;

function getFarmAnimalSound(animal: FarmAnimal): string {
  switch (animal.type) {
    case "cow":
      return `${animal.name} 음매`;
    case "pig":
      return `${animal.name} 꿀꿀`;
    case "rooster":
      return `${animal.name} 꼬끼요`;
    case "sheep":
      return `${animal.name} 메헤헤헤`;
    default:
      const _exhaustiveCheck: never = animal;
      return _exhaustiveCheck;
  }
}

console.log(
  getFarmAnimalSound({ type: "cow", name: "음마이", age: 5, weight: 1500 }),
);
console.log(
  getFarmAnimalSound({ type: "pig", name: "뚱이", age: 3, weight: 800 }),
);
console.log(
  getFarmAnimalSound({ type: "rooster", name: "꼬꼬", age: 2, weight: 5 }),
);
console.log(
  getFarmAnimalSound({ type: "sheep", name: "꼬양", age: 5, weight: 56 }),
);
