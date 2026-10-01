function merge<T extends object, U extends object>(obj1: T, obj2: U): T & U {
  return { ...obj1, ...obj2 };
}

console.log(
  merge<{ name: string }, { age: number }>({ name: "범박" }, { age: 30 }),
);

// 타입 추론(Type Inference)으로 인해 제네릭 타입을 생략 가능
console.log(merge({ name: "범박" }, { weight: 60}));
