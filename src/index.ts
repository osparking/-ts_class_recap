const el = document.getElementById('my-element');

if (el) {
  // el 을 가지고 어떤 작업을 수행할 수 있습니다.
  el.textContent = 'Hello, World!';
} else {
  // el 이 존재하지 않을 경우의 처리는 여기서 수행합니다.
  console.error("Element with ID 'my-element' not found.", el);
}
