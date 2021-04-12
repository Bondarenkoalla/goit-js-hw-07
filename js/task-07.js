const inputEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

inputEl.addEventListener('input', controlSize);
function controlSize() {
  textEl.style.fontSize = inputEl.value + 'px';
}
