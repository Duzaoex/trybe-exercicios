import './style.css';

const dogButton = document.getElementById('dog');
const catButton = document.getElementById('cat');
const surpriseButton = document.getElementById('surprise');
const imgPet = document.getElementById('randomPet');

dogButton.addEventListener('click', () => {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then((data) => {
            const petUrl = data.message;
            imgPet.src = petUrl;
        });
});

catButton.addEventListener('click', () => {
    fetch('https://api.thecatapi.com/v1/images/search')
        .then(response => response.json())
        .then((data) => {
            const petUrl = data[0].url;
            imgPet.src = petUrl;
        });
});

surpriseButton.addEventListener('click', () => {
    Promise.all([
        fetch('https://api.thecatapi.com/v1/images/search'),
        fetch('https://api.thecatapi.com/v1/images/search')
    ])
        .then(responses => Promise.all(responses.map(response => response.json())))
        .then((data) => {
            const petUrl = data[0][0].url || data[1][0].url;
            imgPet.src = petUrl;
        });
});
