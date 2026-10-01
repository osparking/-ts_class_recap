
function getRandomItem<T>(list: T[]): T {
  const randomIndex = Math.floor(Math.random() * list.length);
  return list[randomIndex];
}

console.log(getRandomItem<number>([1, 2, 3]));
console.log(getRandomItem<string>(["행복", "노력", "성공"]));
console.log(getRandomItem<boolean>([true, false]));