const input = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

input.addEventListener('input', changeInput);

function changeInput(event) {
  nameOutput.textContent = event.currentTarget.value;
  if (event.currentTarget.value === '') {
    nameOutput = 'незнакомец';
  }
}
