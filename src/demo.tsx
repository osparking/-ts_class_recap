
const getRandomItem2 = <T,>(list: T[]): T => { // T 다음 콤마 필수
  const randomIndex = Math.floor(Math.random() * list.length);
  return list[randomIndex];
};

console.log(getRandomItem2([12, 22, 32]));
