interface Cat {
  name: string;
  numLives: number;
}

interface Dog {
  name: string;
  breed: string;
}

function isCat(pet: Cat | Dog) {
  return (pet as Cat).numLives !== undefined;
}

function makeNoise(pet: Cat | Dog): string {
  if (isCat(pet)) {
    return `${pet.name} says Meow!`;
  } else {
    return `${pet.name} says Woof!`;
  }
}