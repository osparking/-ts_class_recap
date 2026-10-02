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