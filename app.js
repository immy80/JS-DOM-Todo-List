const input = document.getElementById('input');
const button = document.getElementById('submit');
let list = document.getElementsByTagName('ul')[0];
const removeBtn = document.getElementById('remove');
const listItem = document.getElementsByTagName('li');

button.addEventListener('click', () => {
  let listItem = document.createElement('li');
  listItem.textContent = input.value;
  list.appendChild(listItem);
  input.value = '';
});

removeBtn.addEventListener('click', () => {
  let lastItem = document.querySelector('li:last-child');
  list.removeChild(lastItem);
});

console.log(listItem.length);

for (let i = 0; i < listItem.length; i++) {
  listItem[i].addEventListener('mouseover', () => {
    listItem[i].textContent = listItem[i].textContent.toUpperCase();
  });

  listItem[i].addEventListener('mouseout', () => {
    listItem[i].textContent = listItem[i].textContent.toLowerCase();
  });
}
