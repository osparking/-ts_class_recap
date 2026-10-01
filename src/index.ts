
function getRandomItem<T>(list: T[]): T {
  const randomIndex = Math.floor(Math.random() * list.length);
  return list[randomIndex];
}

const getRandomItem3 = <T>(list: T[]): T => { // T 다음 콤마 필수
  const randomIndex = Math.floor(Math.random() * list.length);
  return list[randomIndex];
};

console.log(getRandomItem2([12, 22, 32]));
console.log(getRandomItem([1, 2, 3]));
console.log(getRandomItem(["행복", "노력", "성공"]));
console.log(getRandomItem([true, false]));