import swal from 'sweetalert2';

const img = document.getElementById('image');
const name = document.getElementById('name');
const button = document.getElementById('button');

const baseUrl = 'https://akabab.github.io/superhero-api/api';

const maxHeroes = 1000;

const randomId = () => Math.floor(Math.random() * maxHeroes);

const usedIds = [];

button.addEventListener('click', (event) => {
  event.preventDefault();

  let id = randomId();

  while (usedIds.includes(id)) {
    id = randomId();
  }

  usedIds.push(id);

  fetch(`${baseUrl}/id/${id}.json`)
    .then((result) => result.json())
    .then((data) => {
      img.src = data.images.md;
      name.innerHTML = data.name;
    })
    .catch((error) => swal.fire({
      title: 'Hero not found',
      text: error.message,
      icon: 'error',
      confirmButtonText: 'Cool',
    }));
});
