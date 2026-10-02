const el = document.getElementById("my-element");

if (el) {
  // el 을 가지고 어떤 작업을 수행할 수 있습니다.
  el.textContent = "Hello, World!";
} else {
  // el 이 존재하지 않을 경우의 처리는 여기서 수행합니다.
  console.error("Element with ID 'my-element' not found.", el);
}

const printCharactersInString = (str?: string) => {
  if (str) {
    for (const char of str) {
      console.log(char);
    }
  } else {
    console.error("문자열이 제공되지 않았습니다:", str, ".");
  }
};

function howEqualityCheckingWorks(x: string | number, y: string | boolean) {
  if (x === y) {
    console.log("x와 y는 동등합니다.", x, ",", y);
  } else if (x == y) {
    console.log("x와 y는 동등 값입니다.", x, ",", y);
  } else {
    console.log("x와 y는 동등하지 않습니다.", x, ",", y);
  }
}
